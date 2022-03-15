import React, { useState, useEffect } from 'react';
// import {ContentLoader} from '@/components/common/ContentLoader'
import { useIntl } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { Button, Grid, makeStyles } from "@material-ui/core";
import './index.scss'
import '@/near-contracts/contract';
import Router from 'next/router'

import * as nearAPI from "near-api-js"
import getConfig from "@/config"

export function Nav(): JSX.Element {
    const [acc, setAcc] = useState('');
    const [NearBalance, setNearBalance] = useState('');
    
    const [isSigned, setSigned] = useState(false);
async function setIcon(type){
    if (type == "NEAR"){

    }
}

    async function fetchInfo() {
        var booltrue = true;
        while (booltrue) {
            try {
                console.log(window.walletAccount.isSignedIn())
                break;
            } catch (ex) {
                // Initializing connection to the NEAR node.
                window.near = await nearAPI.connect(Object.assign({ deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

                // Initializing Wallet based Account. It can work with NEAR TestNet wallet that
                // is hosted at https://wallet.testnet.near.org
                window.walletAccount = new nearAPI.WalletAccount(window.near);


                continue;
            };
        }
        if (window.walletAccount.isSignedIn() == true) {
            let accoun = await near.account(window.walletAccount.getAccountId());
            await setAcc(window.walletAccount.getAccountId());
            var Balance = await accoun.getAccountBalance();
            let price = await Number(Balance.total / 1000000000000000000000000);

            setNearBalance(price.toString() + " NEAR");
            setIcon()
            setSigned(true);
            window.document.getElementById("withoutSign").style.display = "none";
            window.document.getElementById("withSign").style.display = "";
        } else if (window.ethereum.selectedAddress != null && window.localStorage.getItem("ConnectedMetaCelo") != "") {
            
            await setAcc(  window.ethereum.selectedAddress.toString().substring(0, 25) + "...");
            let Blc = await fetch("https://alfajores-blockscout.celo-testnet.org/api/eth-rpc", {
                "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    "content-type": "application/json; charset=UTF-8",

                },
                "body": "{\"id\":0,\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"" + window.ethereum.selectedAddress + "\",\"latest\"]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
            }).then(e=>e.json()).then(e=>e.result);
           let price= parseInt(Blc)/1000000000000000000
           
            setNearBalance(price.toString() + " CELO");
            setSigned(true);
            window.document.getElementById("withoutSign").style.display = "none";
            window.document.getElementById("withSign").style.display = "";
        }
    }
    useEffect(() => {
        setTimeout(() => {
            fetchInfo();
        },2000)
        
    }, [2000]);
    function NavButtons(): JSX.Element {
        if (window.localStorage.getItem("Type") == null || window.localStorage.getItem("Type") == "") {
            return (<>
                <li>
                    <NavLink to="/donation" id="donationbtnNav">
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/CreateEvents">
                        Create Events
                    </NavLink>
                </li>
            </>);
        }
        if (window.localStorage.getItem("Type") == "user") {
            return (<>
                <li>
                    <NavLink to="/donation" id="donationbtnNav">
                        Donation
                    </NavLink>
                </li></>);
        }
        return (<>
            <li>
                <NavLink to="/donation" id="donationbtnNav">
                    Donation
                </NavLink>
            </li>
            <li>
                <NavLink to="/CreateEvents">
                    Create Events
                </NavLink>
            </li>
        </>)
    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <nav className="main-nav">
            <ul>
                <NavButtons />

                <li>
                    <div id='withoutSign' className="wallets">
                        <div className="wallet">
                            <NavLink to="/login?[/donation]">

                                <button type="button" className="btn btn-secondary" aria-disabled="false">
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    </div>


                    <div id="withSign" className="wallets" style={{ display: "none" }}>
                        <div className="wallet" style={{ height: 48, display: "flex", alignItems: "center" }}>
                            <div className="wallet__wrapper" style={{ display: "flex", alignItems: "center", height: "100%" }}>
                             
                                <div className="wallet__info" >
                                    <div className="wallet__address" style={{ fontSize: 14, letterSpacing: "0.5px" }}>
                                        {acc}
                                    </div>
                                    <div className="wallet__balance" style={{ color: "rgb(236 190 33 / 50%)", fontSize: 12, letterSpacing: "0.6px" }}>
                                        {NearBalance}
                                    </div>
                                </div>
                                <button type="button" onClick={() => { window.localStorage.setItem("Type", "");  window.localStorage.setItem("ConnectedMetaCelo",""); window.walletAccount.signOut(); window.location.reload() }} className="btn btn-logout" style={{ padding: 0 }}>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={32} width={32} style={{ fill: "rgb(197, 228, 243)" }}>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>


                </li>
            </ul>


        </nav>
    )
}
