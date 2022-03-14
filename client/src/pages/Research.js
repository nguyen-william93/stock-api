import React, { useState, useEffect } from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import { API } from '../utils/API'
const Research = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const symbol = searchInput.toUpperCase();
        const url = {
            method: 'GET',
            url: `https://yfapi.net/ws/insights/v1/finance/insights?symbol=${symbol}`,
            params: {modules: 'defaultKeyStatistics,assetProfile'},
            headers:{
                'x-api-key': 'iPkydunA9e2Kc8Y4kYGaK1j6HsNFJfIe4qtMaubc'
            }
        };

        try{
            const data = await API(url);
            const {keyTechnicals, technicalEvents, valuation} = data.finance.result.instrumentInfo;
            console.log(keyTechnicals);
            console.log(technicalEvents);
            console.log(valuation);
        }catch(err){
            console.log(err)
        }
    }

    return (
        <Container className='text-light bg-dark w-75'>
            <h1 className='d-flex justify-content-center'>Search A Stock</h1>
            <Form className='d-flex justify-content-between'>
                <Form.Group className="w-auto" controlId="formBasicEmail">
                    <Form.Control
                        name='searchInput'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        placeholder="Enter stock symbol" />
                </Form.Group>
                <Button variant='primary' type='submit' className='mb-3' onClick={(e) => handleSubmitForm(e)}>Submit</Button>
            </Form>
        </Container>
    )
};

export default Research;