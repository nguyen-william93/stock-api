import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Dropdown, DropdownButton,  } from 'react-bootstrap';
import { test } from '../utils/API';
import BarChart from '../components/BarChart'

const apiKey = 'GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H'
const OptionChain = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchDate, setDate] = useState('')
    const [searchDates, setDates] = useState([]);
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const SearchFormHandle = async () => {
            const symbol = searchInput.toUpperCase();
            const options = {
                method: 'GET',
                url: `https://api.tdameritrade.com/v1/marketdata/chains?apikey=GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H&symbol=${symbol}`,
            }
            try {
                //Getting all the expiration date for option contracts
                const result = await test(options);
                const expirationDates = await Object.keys(result.callExpDateMap)
                setDates(expirationDates);

            } catch (err) {
                console.log(err);
            };
        }
        SearchFormHandle()
    }, [searchInput])

    const dateFormHandle = (e) => {
        e.preventDefault();
        setDate(e.target.innerHTML.split(' ')[0])
    }

    const SubmitFormHandle = async (e) => {
        e.preventDefault();

        const date = searchDate.split(':')[0]
        const symbol = searchInput.toUpperCase();
        const options = {
            method: 'GET',
            url: `https://api.tdameritrade.com/v1/marketdata/chains?apikey=GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H&symbol=${symbol}&fromDate=${date}&toDate=${date}`,
        }
        try {
            //destructing response from request and initialized the necessary information to travers the object
            const result = await test(options);
            const { callExpDateMap, putExpDateMap } = await result;
            const strikes = Object.keys(callExpDateMap[searchDate]);

            console.log(strikes)

            const optionData = strikes.map((strike) => ({
                expiration: searchDate,
                strike: strike,
                callOpenInterest: callExpDateMap[searchDate][strike][0].openInterest,
                callVolume: callExpDateMap[searchDate][strike][0].volume,
                putOpenInterest: putExpDateMap[searchDate][strike][0].openInterest,
                putVolume: putExpDateMap[searchDate][strike][0].volume,
            }))
            setChartData(optionData);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Container fluid className='text-light bg-dark w-75'>
                <h1 className='d-flex justify-content-center'>Search Option Chain</h1>
                <Form className='d-flex flex-row justify-content-between'>
                    <Form.Group className="mb-3 w-75 d-flex" controlId="formBasicEmail">
                        <Form.Control
                            name='searchInput'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            type="text"
                            placeholder="Enter stock symbol" />
                    </Form.Group>
                    <DropdownButton id="dropdown-item-button" title="Pick Expiration Date" className="mb-3 ml-4 d-flex justify-content-between">
                            {searchDates.map((date) => {
                                return (
                                    <Dropdown.Item key={date} onClick={(e) => dateFormHandle(e)}>{date} days till expiration</Dropdown.Item>
                                )
                            })}
                    </DropdownButton> 
                    <div className='vr' />
                    <Button variant='primary' type='submit' onClick={(e) => SubmitFormHandle(e)} className="mb-3 d-flex justify-content-between">Submit</Button>
                </Form>
            </Container>
            <Container fluid className='d-flex w-75 mx.auto justify-content-center' >
                {chartData.length
                    ? <BarChart data={chartData} />
                    : 'Enter a stock symbol'}
            </Container>
        </>
    )
};

export default OptionChain;