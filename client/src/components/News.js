import { Title } from 'chart.js';
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const News = (props) => {
    const news = props.news;

    return (
        <>
            {news.map((element) => {
                return (
                    <Card key={element.id} className="d-flex justify-content-center align-content-center mt-2">
                        <Card.Title> {element.title} </Card.Title>
                        <Card.Body>
                            <Card.Text>Published On: {element.publishedOn} </Card.Text>
                            <Card.Text>Author: {element.provider} </Card.Text>
                            <Card.Text>Summary: {element.summary}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default News