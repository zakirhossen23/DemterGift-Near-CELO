import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as nearAPI from "near-api-js"
import Router from 'next/router'
import BidNFTModal from '../../../components/components/modals/BidNFTModal';
import ViewBidNFTModal from '../../../components/components/modals/ViewBidNFTModal';

import DonateNFTModal from '../../../components/components/modals/DonateNFTModal';
import AddLotteryModal from '@/modals/lottery/AddLotteryModal';
import BuyLotteryModal from '@/modals/lottery/BuyLotteryModal';


import useContract from '../../../../services/useContract';
export default function Auction() {
    const regex = /\[(.*)\]/g;
    const str = decodeURI(window.location.search);
    let m;
    let id = "";
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        id = m[1];
    }

    const { contract, contractCelo, signerAddress } = useContract('ERC721');
    console.log("id => ", id);
    const [CreatemodalShow, setDonateModalShow] = useState(false);
    const [AddLotterymodalShow, setAddLotteryModalShow] = useState(false);
    const [BuyLotterymodalShow, setBuyLotteryModalShow] = useState(false);

    const [eventId, setEventId] = useState(id);
    const [RealEventId, setRealEventId] = useState(0);

    const [list, setList] = useState([]);

    const [title, setTitle] = useState('');
    const [goalusd, setgoalusd] = useState('');
    const [goal, setgoal] = useState('');
    const [dateleft, setdateleft] = useState('');
    const [date, setdate] = useState('');
    const [dateleftBid, setdateleftBid] = useState('');
    const [logo, setlogo] = useState('');
    const [selectid, setselectid] = useState(0);
    const [selectrecid, setselectrecid] = useState('');
    const [selecttitle, setselecttitle] = useState('');
    const [selecttype, setselecttype] = useState('');
    const [Eventwallet, setEventwallet] = useState("");
    let selectwallet2 = "";
    const [selectwallet, setselectwallet] = useState('');
    const [walletType, setWalletType] = useState("");
    const [selectbid, setselectbid] = useState(0);
    const [selectprice, setselectprice] = useState(0);
    const [LotteryNumber, setLotteryNumber] = useState(0);
    const boolTrue = true;
    const [modalShow, setModalShow] = useState(false);
    const [ViewmodalShow, setViewModalShow] = useState(false);
    const [SameWallet, setSameWallet] = useState(false);
    let currentWallet2 = "";

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");
    }
    function LeftDateBid(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s");
    }

    async function AuctionfetchContractData() {
        if (id && window.location.pathname == "/donation/auction") {
            console.log("started chekcing");
            let nearPrice = 0;
            //NEAR currency
            try {

                var nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
                const currency_options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json, text/plain, */*'
                    },
                };
                await fetch(nearCurrencyUrl, currency_options).then(res => res.json())
                    .then(json => nearPrice = json)
                    .catch(err => console.error('error:' + err));
                nearPrice = nearPrice.data.marketPairs[0].price;

            } catch (ex) {
                console.log(ex);

                nearPrice = 0;
            }

            let celoPrice = 0;
            //CELO currency
            try {

                var celoCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
                const currency_options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json, text/plain, */*'
                    },
                };
                await fetch(celoCurrencyUrl, currency_options).then(res => res.json())
                    .then(json => celoPrice = json)
                    .catch(err => console.error('error:' + err));
                celoPrice = celoPrice.data.marketPairs[0].price;

            } catch (ex) {
                console.log(ex);

                celoPrice = 0;
            }

            var Airtable = require('airtable');
            var base = new Airtable({ apiKey: 'keyR1Rrcl9O2s9bTs' }).base('appgbRCpbkzmdcucO');

            var findEvents = new Promise(async (resolve, reject) => {
                await base('events').find(id, async function (err, record) {
                    if (err) { console.error(err); return; }
                    setEventId(record.getId());
                    setRealEventId(record.get('id'));
                    setTitle(record.get("title"));

                    await setWalletType(record.get("wallettype"));
                    setselectwallet(record.get('wallet'));
                    selectwallet2 = record.get('wallet');
                    setEventwallet(record.get('wallet'));
                    let usdprice = 0;
                    if (record.get("wallettype") == "NEAR") usdprice = formatter.format(Number(Number(record.get("Goal")) * nearPrice));
                    if (record.get("wallettype") == "CELO") usdprice = formatter.format(Number(Number(record.get("Goal")) * celoPrice));

                    setgoalusd(usdprice);
                    setgoal(Number(record.get("Goal")));
                    setdateleft(LeftDate(record.get("endDate")));
                    setdate(record.get("endDate"));
                    setdateleftBid(LeftDateBid(record.get("endDate")));
                    setlogo(record.get("logolink"));

                    resolve(record);

                })

            }).then(e => { return e });

            let events = await findEvents;
            console.log('Retrieved', events);
            var findNFTs = new Promise(async (resolve, reject) => {

                await base('nfts').select({
                    filterByFormula: `({eventid} = '${Number(await events.get('id'))}')`,
                    // Selecting the first 10 records in Grid view:
                    maxRecords: 10,
                    sort: [{ field: "price", direction: "desc" }],
                    view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.
                    var arr = [];

                    for (let ir = 0; ir < records.length; ir++) {
                        let record = records[ir];
                        let currentAcc = "";
                        var goalPrice2usd = 0;
                        if (record.get("type") == "NEAR") {
                            goalPrice2usd = Number(Number(record.get("price")) * nearPrice);                     
                            currentWallet2 = walletAccount._authData.accountId;
                            currentAcc = (walletAccount._authData.accountId);
                        } else if (record.get("type") == "CELO") {
                            goalPrice2usd = Number(Number(record.get("price")) * celoPrice);                          
                            currentWallet2 = window.ethereum.selectedAddress;
                            currentAcc = window.ethereum.selectedAddress;;
                        }

                        let isbought = false;
                        try {
                            if (record.get("isbought").includes(currentAcc)) {
                                isbought = true;
                            }
                        } catch { }                    
                      
                        arr.push({
                            recId: record.id,
                            Id: record.get("id"),
                            name: record.get("name"),
                            description: record.get("description"),
                            Bidprice: goalPrice2usd,
                            price: Number(record.get("price")),
                            type: record.get("type"),
                            image: record.get("image"),
                            lottery: record.get("lottery"),
                            isbought: isbought,
                            ticketnumber: record.get("ticketnumber"),
                            ownerWallet: record.get("ownerWallet"),
                        });
                    }

                    setList(arr);
                    if (document.getElementById("Loading"))
                        document.getElementById("Loading").style = "display:none";
                    resolve(arr);

                }, function done(err) {
                    if (err) { console.error(err); return; }
                });

            }).then(e => { return e });;

            console.log(await findNFTs);

            if (currentWallet2.toUpperCase() == selectwallet2.toUpperCase()){
                setSameWallet(true);
            }else{
                setSameWallet(false);
            }

        }
    }
    useEffect(() => {
        AuctionfetchContractData();

    }, []);

    setInterval(function () {
        calculateTimeLeft();
    }, 1000);


    function calculateTimeLeft() {
        if ((window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null)) {
            Router.push("/login?[/donation]");
        }
        try {
            var allDates = document.getElementsByName("dateleft");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDate(date);
            }
            var allDates = document.getElementsByName("date");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDateBid(date);
            }
        } catch (error) { }
    }

    function activateViewBidModal(e) {
        if ((window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null)) {
            Router.push("/login?[/donation]");
        }

        setselectrecid(e.target.getAttribute("recid"));
        setselectid(e.target.getAttribute("tokenid"));
        setselecttitle(e.target.getAttribute("title"));

        setViewModalShow(true);
    }

    function activateBidNFTModal(e) {
        if ((window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null)) {
            Router.push("/login?[/donation]");
        }

        setselectrecid(e.target.getAttribute("recid"));
        setselectid(e.target.getAttribute("tokenid"));
        setselectbid(e.target.getAttribute("highestbid"));
        console.log(selectbid);
        setselecttype("NFT");
        setModalShow(true);
    }
    function addtoLottery(e) {

        if ((window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null)) {
            Router.push("/login?[/donation]");
        }

        setselectid(e.target.getAttribute("tokenid"));
        setselectrecid(e.target.getAttribute("recid"));
        setAddLotteryModalShow(true);
    }

    async function BuyLottery(e) {
        setselectid(e.target.getAttribute("tokenid"));
        setselectrecid(e.target.getAttribute("recid"));
        setselectprice(e.target.getAttribute("price"));
        setselectwallet(e.target.getAttribute("wallet"));
        setLotteryNumber(e.target.getAttribute("ticketnumber"));
        setBuyLotteryModalShow(true);
    }
    function activateCreateNFTModal(e) {
        setselecttype("NFT");

        setDonateModalShow(true);
    }


    function Topbutton() {
        if ((window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null)) {
            return (<>
                <div style={{
                    color: 'white',
                    overflow: 'hidden',
                    background: 'rgb(236, 201, 0)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: '72px',
                    width: '244px',
                    float: 'right',
                    padding: '0px'
                }} >
                    <NavLink to="/login?[/donation]">
                        <div className="card-body" style={{ height: '100%', paddingTop: '34px' }} >
                            Login
                        </div>
                    </NavLink>

                </div>
            </>)
        }
        if ((window.localStorage.getItem('Type') == "user")) {
            return (<>
                <div style={{ display: 'flex', gap: '14px', position: 'absolute', right: '25px' }} >
                    <div onClick={activateCreateNFTModal} className="card" style={{ color: 'white', overflow: 'hidden', background: 'rgb(236, 201, 0)', textAlign: 'center', width: '172px', cursor: 'pointer', height: '48px', margin: '0', padding: '0px' }}>
                        <div onClick={activateCreateNFTModal} className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Donate NFT</div>
                    </div>
                </div>


                <NavLink to={`/lottery?[${RealEventId}]`}>
                    <div style={{ display: 'flex', gap: '14px', position: 'absolute', right: '208px' }} >
                        <div className="card" style={{ color: 'white', overflow: 'hidden', background: 'rgb(236, 201, 0)', textAlign: 'center', width: '172px', cursor: 'pointer', height: '48px', margin: '0', padding: '0px' }}>
                            <div className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Go to lottery</div>
                        </div>
                    </div>
                </NavLink>
            </>)
        }
        return (<>

            <NavLink to={`/lottery?[${RealEventId}]`}>
                <div style={{ display: 'flex', gap: '14px', position: 'absolute', right: '80px' }} >
                    <div className="card" style={{ color: 'white', overflow: 'hidden', background: 'rgb(236, 201, 0)', textAlign: 'center', width: '172px', cursor: 'pointer', height: '48px', margin: '0', padding: '0px' }}>
                        <div className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Go to lottery</div>
                    </div>
                </div>
            </NavLink>
        </>)

    }

    return (
        <>
            <div className="row EventContainer" >
                <div style={{
                    display: 'flex',
                    width: '100%',
                    position: 'relative'
                }}>
                    <img src={logo} className="AuctionImage" />
                    <div className="DetialsContainer" style={{
                        rowGap: '16px',
                        paddingTop: '70px'
                    }}>
                        <h4 style={{
                            fontSize: '2vw'
                        }} >{title}</h4>

                        <div className='TextContainer'>
                            <h4 style={{
                                fontSize: '2vw'
                            }}>Goal: </h4>
                            <h4 style={{
                                fontSize: '2vw'
                            }}>$ {goalusd} ({goal} {walletType})</h4>
                        </div>
                        <div className='TextContainer'>
                            <h4 style={{
                                fontSize: '2vw'
                            }} name='dateleft' date={date}>{dateleft}</h4>
                        </div>
                    </div>
                    <Topbutton />

                </div>
            </div>
            <div id='Loading' className="LoadingArea">
                <h1>Loading...</h1>
            </div>
            {list.map((listItem) => (
                <div key={listItem.Id} className="row ElementsContainer bgWhite">
                    <div style={{
                        width: '100%',
                        display: 'flex'
                    }}>
                        {listItem.type == "Cryptopunk" ? (
                            <img src={listItem.image} className="AuctionBidImage pixel" />
                        ) : (
                            <img src={listItem.image} className="AuctionBidImage" />
                        )}

                        <div style={{ width: "100%" }}>
                            <div className="DetialsContainer" style={{ rowGap: "5px" }} >
                                <h2 style={{ fontSize: '2vw' }} >{listItem.name}</h2>

                                <h4 style={{ color: "rgb(211 187 51)", fontSize: '1.7vw' }}>Type: NFT</h4>

                                <div className="TextContainer">
                                    <h4 style={{ color: "rgb(211 187 51)", fontSize: '1.7vw' }}>{listItem.description}</h4>
                                </div>
                            </div>
                            <div className='ElementBottomContainer'>
                                <div style={{ maxWidth: "216px" }}>
                                    {listItem.lottery != "true" ? (<>
                                        <h3 style={{ fontSize: '1vw' }} className="smallgrey">Current bid</h3>
                                        <h4 style={{ fontSize: '1.7vw' }} className='bidprice'>$ {listItem.Bidprice.toFixed(2)} ({listItem.price} {walletType})</h4>
                                        <h7 style={{ fontSize: '1vw' }} name="date" date={date} className="smallgrey">{dateleftBid}</h7>
                                    </>) : (<>
                                        <h3 style={{ fontSize: '1vw' }} className="smallgrey">Ticket price</h3>
                                        <h4 style={{ fontSize: '1.7vw' }} className='bidprice'>$ {listItem.Bidprice.toFixed(2)} ({listItem.price} {walletType})</h4>

                                    </>)}
                                </div>
                                <div className='BidAllcontainer' >
                                    <div className='Bidsbutton'>


                                        {listItem.lottery != "true" ? (<>
                                            {(window.localStorage.getItem("Type") == "user") ? (<>
                                                <div style={{ width: '168px' }} tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} onClick={activateViewBidModal} className="Bidcontainer col">
                                                    <div tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} className="card BidcontainerCard">
                                                        <div tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} className="card-body bidbuttonText">View</div>
                                                    </div>
                                                </div>
                                                <div style={{ width: '168px' }} tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} goalScore={goal} className="Bidcontainer col" onClick={activateBidNFTModal}>
                                                    <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card BidcontainerCard">
                                                        <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card-body bidbuttonText">Bid</div>
                                                    </div>
                                                </div>
                                            </>) : (<></>)}


                                            {((window.localStorage.getItem("Type") == "manager") && SameWallet == true ? (
                                                <div style={{ width: '224px' }} tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} goalScore={goal} className="Bidcontainer col" onClick={addtoLottery}>
                                                    <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card BidcontainerCard" onClick={addtoLottery} >
                                                        <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card-body bidbuttonText" onClick={addtoLottery}>Add to Lottery</div>
                                                    </div>
                                                </div>) : (<></>))}

                                        </>

                                        ) : ((listItem.isbought == true) ? (<>
                                            <NavLink to={`/lottery?[${RealEventId}]`}>
                                                <div style={{ width: '224px' }} tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} price={listItem.price} goalScore={goal} className="Bidcontainer col" >
                                                    <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} price={listItem.price} className="card BidcontainerCard">
                                                        <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} price={listItem.price} className="card-body bidbuttonText" >Go to lottery</div>
                                                    </div>
                                                </div>
                                            </NavLink>

                                        </>) : (<>
                                            <div style={{ width: '251px' }} tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} ticketnumber={listItem.ticketnumber} price={listItem.price} goalScore={goal} ownerWallet={listItem.ownerWallet} onClick={BuyLottery} className="Bidcontainer col" >
                                                <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} price={listItem.price} ticketnumber={listItem.ticketnumber} ownerWallet={listItem.ownerWallet} className="card BidcontainerCard" >
                                                    <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} price={listItem.price} ticketnumber={listItem.ticketnumber} ownerWallet={listItem.ownerWallet} className="card-body bidbuttonText" >Buy lottery ticket</div>
                                                </div>
                                            </div>

                                        </>))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <BidNFTModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    AuctionfetchContractData();
                }}
                tokenId={selectid}
                recid={selectrecid}
                type={selecttype}
                ToAddress={selectwallet}
                eventId={eventId}
                RealEventId={RealEventId}
                Highestbid={selectbid}
                walletType={walletType}
                goal={goal}
                contract={contract}
                contractCelo={contractCelo}
                senderAddress={signerAddress}

            />

            <ViewBidNFTModal
                show={ViewmodalShow}
                onHide={() => {
                    setViewModalShow(false);

                    AuctionfetchContractData();
                }}
                id={selectid}
                walletType={walletType}
                title={selecttitle}

            />
            <DonateNFTModal
                show={CreatemodalShow}
                onHide={() => {
                    setDonateModalShow(false);

                }}
                EventID={RealEventId}
                EventeRecID={eventId}
                type={walletType}
                SelectedTitle={title}
                enddate={date}
            />

            <AddLotteryModal
                show={AddLotterymodalShow}
                onHide={() => {
                    setAddLotteryModalShow(false);

                }}
                nftrecid={selectrecid}
                nftid={selectid}
                eventid={RealEventId}
                walletType={walletType}
            />
            <BuyLotteryModal
                show={BuyLotterymodalShow}
                onHide={() => { setBuyLotteryModalShow(false) }}
                nftid={selectid}
                ToAddress={Eventwallet}
                nftrecid={selectrecid}
                price={selectprice}
                ticketnumber={LotteryNumber}
                walletType={walletType}
            /></>
    );
}
