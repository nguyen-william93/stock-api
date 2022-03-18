import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { newsAPI } from '../utils/API';
import News from '../components/News';

const Research = () => {
    const [searchInput, setSearchInput] = useState('');
    const [news, setNews] = useState([]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const symbol = searchInput.toUpperCase();

        try {
            const data = await newsAPI(symbol);
            setNews(data.results);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Container className='text-light bg-dark w-75 flex-wrap flex-column'>
                <h1 className='d-flex justify-content-center'>Research a Stock</h1>
                <Form className='d-flex justify-content-around flex-wrap'>
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
            <Container fluid className='d-flex flex-column justify-content-center w-75 p-0'>
                {news.length
                    ? <News news={news} />
                    : "Search For A Stock"
                }
            </Container>
        </>
    )
};

export default Research;