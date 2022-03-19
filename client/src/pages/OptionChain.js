import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Dropdown, DropdownButton, } from 'react-bootstrap';
import { optionAPI } from '../utils/API';
import BarChart from '../components/BarChart'

const apiKey = 'GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H'
const OptionChain = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchDate, setDate] = useState('')
    const [searchDates, setDates] = useState([]);
    const [chartData, setChartData] = useState([])
    const [currentPrice, setCurrentPrice] = useState('');
    const [symbol, setSymbol] = useState('')

    useEffect(() => {
        const SearchFormHandle = async () => {
            const symbol = searchInput.toUpperCase();
            const url = {
                method: 'GET',
                url: `https://api.tdameritrade.com/v1/marketdata/chains?apikey=GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H&symbol=${symbol}`,
            }
            try {
                //Getting all the expiration date for option contracts
                const result = await optionAPI(url);
                const expirationDates = Object.keys(result.callExpDateMap)
                setDates(expirationDates)

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
        const url = {
            method: 'GET',
            url: `https://api.tdameritrade.com/v1/marketdata/chains?apikey=GIGELQVPAWW4KA2J9TMC1VP3IAEH4Q7H&symbol=${symbol}&fromDate=${date}&toDate=${date}`,
        };

        try {
            //destructing response from request and initialized the necessary information to travers the object
            const result = await optionAPI(url);
            const { callExpDateMap, putExpDateMap } = await result;
            const strikes = Object.keys(callExpDateMap[searchDate]);
            console.log(result)
            const optionData = strikes.map((strike) => ({
                expiration: searchDate,
                strike: strike,
                callOpenInterest: callExpDateMap[searchDate][strike][0].openInterest,
                callVolume: callExpDateMap[searchDate][strike][0].totalVolume,
                putOpenInterest: putExpDateMap[searchDate][strike][0].openInterest,
                putVolume: putExpDateMap[searchDate][strike][0].totalVolume,
            }));

            setChartData(optionData);
            setCurrentPrice(result.underlyingPrice);
            setSymbol(symbol)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Container fluid className='d-flex m-1 p-0 flex-row' id='optionChain'>
                <Container fluid className='d-flex text-dark bg-light flex-column w-auto m-1 rounded-right'>
                    <h2 className='d-flex justify-content-center'>Search Option Chain</h2>
                    <Form className='d-flex justify-content-between flex-wrap'>
                        <Form.Group className="w-100 mb-2" controlId="formBasicEmail">
                            <Form.Control
                                name='searchInput'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type="text"
                                placeholder="Enter stock symbol" />
                        </Form.Group>
                        {searchDate.length
                            ? <DropdownButton id="dropdown-item-button" title={searchDate} className='mb-3 w-100'>
                                {searchDates.map((date) => {
                                    return (
                                        <Dropdown.Item key={date} onClick={(e) => dateFormHandle(e)}>{date} days till expiration</Dropdown.Item>
                                    )
                                })}
                            </DropdownButton>
                            : <DropdownButton id="dropdown-item-button" title='Select an expiration date' className='mb-3'>
                                {searchDates.map((date) => {
                                    return (
                                        <Dropdown.Item key={date} onClick={(e) => dateFormHandle(e)}>{date} days till expiration</Dropdown.Item>
                                    )
                                })}
                            </DropdownButton>}
                        <Button variant='primary' type='submit' onClick={(e) => SubmitFormHandle(e)} className='mb-3 w-100'>Submit</Button>
                    </Form>
                </Container>
                <Container fluid className='d-flex justify-content-center flex-wrap p-0' >
                    {chartData.length
                        ? <BarChart data={chartData} currentPrice={currentPrice} symbol={symbol} />
                        : 'Enter a stock symbol'}
                </Container>
            </Container>
        </>
    )
};

export default OptionChain;