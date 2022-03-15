import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../../components/components/UseFormInput';
import { createTokenAPI } from '@/pages/Events/token';

import { toast } from 'react-toastify';

import useContract from '../../../services/useContract';
import { WalletAccount } from 'near-api-js';

export default function AddLotteryModal({
    show,
    onHide,
    nftid,
    nftrecid,
    eventid,
    walletType
}) {

    const [price, priceTicketInput] = UseFormInput({
        type: 'text',
        placeholder: 'Price Ticket'
    });
    const [startDate, startDateInput] = UseFormInput({
        defaultValue: "",
        type: 'datetime-local',
        placeholder: 'Start Date Lottery ',
        id: 'startdate',
    });

    const [endDate, endDateInput] = UseFormInput({
        defaultValue: "",
        type: 'datetime-local',
        placeholder: 'End Date Lottery ',
        id: 'enddate',
    });

    async function addLottery() {
        await toast.promise(CreatingOnAirtable, {
            pending: "Creating Lottery...",
            error: "Please try again later",
            success: "Created successfully!"
        })
      await toast.promise(UpdateOnAirtable, {
            pending: "Updating NFT...",
            error: "Please try again later",
            success: "Updated successfully!"
        })
        window.location.reload();
    }

    async function CreatingOnAirtable() {

        var Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyR1Rrcl9O2s9bTs'
        });
        const base = require('airtable').base('appgbRCpbkzmdcucO');

        await base('lottery').create([
            {
                "fields": {
                    "nftid": Number(nftid),
                    "eventid": eventid,
                    "price":price,
                    "startDate": startDate,
                    "endDate": endDate
                }
            }
        ]);

    }
    async function UpdateOnAirtable() {

        var Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyR1Rrcl9O2s9bTs'
        });
        const base = require('airtable').base('appgbRCpbkzmdcucO');

        await base('nfts').update([
            {
                "id":nftrecid,
                "fields": {
                    "lottery": "true",
                    "price": price,
                }
            }
        ]);

    }
    return (<>
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            size="gg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add to Lottery
                </Modal.Title>

            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Price Ticket in {walletType}</Form.Label>
                        {priceTicketInput}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Start Date Lottery</Form.Label>
                        {startDateInput}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>End Date Lottery</Form.Label>
                        {endDateInput}
                    </Form.Group>

                    <div className="d-grid" style={{ marginTop: "20px" }}>
                        <Button variant="primary"  onClick={addLottery}>
                            Add to Lottery
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>

    </>


    );
}
