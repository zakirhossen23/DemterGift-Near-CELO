
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { bidsgetbytokenid } from '@/pages/Events/token'

export default function ViewmodalShow({
	show,
	onHide,
	id,
	walletType,
	title
}) {
	const [list, setList] = useState([]);
	var Airtable = require('airtable');
	var base = new Airtable({ apiKey: 'keyR1Rrcl9O2s9bTs' }).base('appgbRCpbkzmdcucO');

	function addZero(num) {
		return num < 10 ? `0${num}` : num;
	}
	function AmPM(num) {
		return num < 12 ? 'AM' : 'PM';
	}
	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});


	async function fetchContractData() {
		try {
			if (id) {
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
					nearPrice = 0;
				}

				await base('tokenbid').select({
					filterByFormula: `({Tokenid} = '${id}')`,
					// Selecting the first 10 records in Grid view:
					maxRecords: 10,
					sort: [{ field: "Bidprice", direction: "desc" }],
					view: "Grid view"
				}).eachPage(async function page(records, fetchNextPage) {
					// This function (`page`) will get called for each page of records.
					var arr = [];
					await records.forEach(function (record) {
						var goalPrice2usd = 0;
						goalPrice2usd = Number(Number(record.get("Bidprice")) * nearPrice);
						const Datetime = new Date(record.get("Date"));
						let currentdate = `${addZero(Datetime.getDate())}/${addZero(Datetime.getMonth() + 1)}/${addZero(Datetime.getFullYear())} ${addZero(Datetime.getHours())}:${addZero(Datetime.getMinutes())}:${addZero(Datetime.getSeconds())} ${AmPM(Datetime.getHours())}`

						arr.push({
							Date: currentdate,
							UserName: record.get("UserName"),
							bidpriceusd: formatter.format(goalPrice2usd),
							Bidprice: record.get("Bidprice")
						});
					});

					setList(arr);
					// fetchNextPage();
					if (document.getElementById("LoadingView"))
						document.getElementById("LoadingView").style = "display:none";
					if (document.getElementById("Loadingtable")) {
						var element = document.getElementById("Loadingtable");
						element.style = "display:block";
						(element).setAttribute("id", "");
					}
				}, function done(err) {
					if (err) { console.error(err); return; }

				});




			}
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchContractData();

	}, []);

	return (
		<Modal
			show={show}
			onHide={onHide}
			onShow={fetchContractData}
			aria-labelledby="contained-modal-title-vcenter"
			size="xl"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					View Bid - {title}
				</Modal.Title>

			</Modal.Header>
			<Modal.Body className="show-grid">
				<div id='LoadingView' className="LoadingArea">
					<h1>Loading...</h1>
				</div>
				<div id='Loadingtable' style={{ display: 'none' }} className="">
					<div className='tableHeader'>
						<div className='tableHeaderContainer'>
							<div className='tableheaderDateContainer' >
								<h4 className="header">Date</h4>
							</div>
							<div className="tableheaderUserContainer" >
								<h4 className="header">User Name</h4>
							</div>
							<div className="tableheaderBidContainer" >
								<h4 className="header">Bid</h4>
							</div>
						</div>

					</div> {list.map((listItem) => (
						<div key={listItem.Id} className='tableFullRowContainer'>
							<div className='tableRowContainer'>
								<div className='tableRowCellContainer'>
									<div className='tableRowCellDateContainer'>
										<h5 className="cell">{listItem.Date}</h5>
									</div>
									<div className='tableRowCellUserContainer'>
										<h5 className="cell">{listItem.UserName}</h5>
									</div>
									<div className="tableRowCellBidContainer">
										<h5 className="cell">${listItem.bidpriceusd} ({listItem.Bidprice} {walletType})</h5>
									</div>
								</div>
							</div>
						</div>))}
				</div>


			</Modal.Body>
		</Modal>
	);
}
