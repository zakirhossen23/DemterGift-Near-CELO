import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../UseFormInput';
import { createTokenAPI } from '@/pages/Events/token';

import { toast } from 'react-toastify';

import useContract from '../../../../services/useContract';
import { WalletAccount } from 'near-api-js';

export default function DonateNFTModal({
	show,
	onHide,
	senderAddress,
	type,
	EventID,
	EventeRecID,
	SelectedTitle,
	enddate,
	selectedWallet
}) {

	var Airtable = require('airtable');
	Airtable.configure({
		endpointUrl: 'https://api.airtable.com',
		apiKey: 'keyR1Rrcl9O2s9bTs'
	});
	const base = require('airtable').base('appgbRCpbkzmdcucO');

	const { contract, contractCelo, signerAddress } = useContract('ERC721');
	let NewTokenId = 0;

	const [name, nameInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter name',
	});
	const [description, descriptionInput] = UseFormInput({
		as: 'textarea',
		placeholder: 'Enter description',
	});
	const [url, urlInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter image url',
	});

	const [price, priceInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Price',
	});
	const [NFTaddress, NFTaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter NFT address',
	});
	const [Cryptopunkaddress, CryptopunkaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Cryptopunk address',
	});

	async function createNFT() {
		await toast.promise(CreatingNFTAirtable, {
			pending: `Creating NFT on Airtable...`,
			error: `Please try again`,
			success: `Created NFT on Airtable!`
		});
		if ( type == "NEAR"){
				await toast.promise(creatingNFTonAurora, {
			pending: `Creating NFT on Aurora...`,
			error: `Please try again`,
			success: `Created NFT on Aurora!`
		});
		}else if (type == "CELO"){
			await toast.promise(creatingNFTonCELO, {
				pending: `Creating NFT on CELO...`,
				error: `Please try again`,
				success: `Created NFT on CELO!`
			});
		}
	
	}
	let newtokenrec = '';
	async function CreatingNFTAirtable() {

		var Airtable = require('airtable');
		Airtable.configure({
			endpointUrl: 'https://api.airtable.com',
			apiKey: 'keyR1Rrcl9O2s9bTs'
		});
		const base = require('airtable').base('appgbRCpbkzmdcucO');


		var test = await base('nfts').create([
			{
				"fields": {
					"name": name,
					"description": description,
					"price": price,
					"type": type,
					"image": url,
					"eventid": Number(EventID),
					"ownerWallet": signerAddress
				}
			}])
		var done = new Promise((resolve, reject) => {
			NewTokenId = test[0].get('id');
			newtokenrec = test[0].getId();
			resolve(NewTokenId);
		}).then(e => { return e });
		console.log(await done);

	}
	async function creatingNFTonAurora() {
		let Logourl = url;
		var tokenAddress = NFTaddress;
		if ("Cryptopunk" == type) {
			tokenAddress = Cryptopunkaddress;
		}

		try {
			const createdObject = {
				eventid: EventID,
				name: name,
				description: description,
				Bidprice: price,
				price: price,
				type: type,
				image: Logourl
			};
			const result = await contract.claimToken(
				signerAddress,
				NewTokenId,
				EventID,
				createdObject
			);

			console.log(result);

			let TokenID = Number(await contract.latestTokenID());

			console.log(TokenID);
			var test = await base('nfts').update([
				{
					"id": newtokenrec,
					"fields": {
						"TokenID": TokenID
					}
				}
			]);
			console.log(test);
			window.location.href = `/donation/auction?[${EventeRecID}]`;
			window.document.getElementsByClassName("btn-close")[0].click();
		} catch (error) {
			return (error);
		}


	}
	async function creatingNFTonCELO() {
		let Logourl = url;
		var tokenAddress = NFTaddress;
		if ("Cryptopunk" == type) {
			tokenAddress = Cryptopunkaddress;
		}

		try {
			const createdObject = {
				eventid: EventID,
				name: name,
				description: description,
				Bidprice: price,
				price: price,
				type: type,
				image: Logourl
			};
			const result = await contractCelo.claimToken(
				signerAddress,
				NewTokenId,
				EventID,
				createdObject
			);

			console.log(result);

			let TokenID = Number(await contractCelo.latestTokenID());

			console.log(TokenID);
			var test = await base('nfts').update([
				{
					"id": newtokenrec,
					"fields": {
						"TokenID": TokenID
					}
				}
			]);
			console.log(test);
			window.location.href = `/donation/auction?[${EventeRecID}]`;
			window.document.getElementsByClassName("btn-close")[0].click();
		} catch (error) {
			return (error);
		}


	}


	return (<>
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Donate NFT - {SelectedTitle}
				</Modal.Title>

			</Modal.Header>
			<Modal.Body className="show-grid">
				<Form>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Name</Form.Label>
						{nameInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupDescription">
						<Form.Label>Description</Form.Label>
						{descriptionInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Opening price in {type}</Form.Label>
						{priceInput}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formGroupImageUrl">
						<Form.Label>Enter image URL</Form.Label>
						{urlInput}
					</Form.Group>
					{(type == "Cryptopunk") ? (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>Cryptopunk address</Form.Label>
							{CryptopunkaddressInput}
						</Form.Group>
					) : (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>NFT address</Form.Label>
							{NFTaddressInput}
						</Form.Group>
					)

					}

					<div className="d-grid" style={{ marginTop: "20px" }}>
						<Button variant="primary" onClick={createNFT}>
							Donate NFT
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>

	</>


	);
}
