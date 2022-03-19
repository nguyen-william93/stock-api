import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { newsAPI } from '../utils/API';
import NewsCard from '../components/NewsCard';

const News = () => {
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
        <Container fluid className='d-flex m-0 flex-column flex-lg-row'>
            <Container className='d-flex text-dark bg-light w-auto flex-wrap flex-column m-0 mt-2 rounded-right'>
                <h1 className='d-flex justify-content-center'>Research a Stock</h1>
                <Form className='d-flex flex-wrap flex-colum'>
                    <Form.Group className="w-auto mb-3" controlId="formBasicEmail">
                        <Form.Control
                            name='searchInput'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            type="text"
                            placeholder="Enter stock symbol" />
                    </Form.Group>
                    <Button variant='primary' type='submit' onClick={(e) => handleSubmitForm(e)} className='w-auto mb-3'>Submit</Button>
                </Form>
            </Container>
            <Container fluid className='d-flex flex-column justify-content-center'>
                {news.length
                    ? <NewsCard news={news} />
                    : "Search For A Stock"
                }
            </Container>
            </Container>
        </>
    )
};

export default News;