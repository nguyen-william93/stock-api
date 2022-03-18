import { Title } from 'chart.js';
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const NewsCard = (props) => {
    const news = props.news;

    return (
        <>
            {news.map((element) => {
                return (
                    <Card key={element.id} className="d-flex justify-content-center align-content-center mt-2 pl-2">
                        <Card.Link href = {element.article_url} target='_blank'> {element.title} </Card.Link>
                        <Card.Body>
                            <Card.Text>Publisher: {element.publisher.name}</Card.Text>
                            <Card.Text>Published On: {element.published_utc} </Card.Text>
                            <Card.Text>Author: {element.author} </Card.Text>
                            <Card.Text>Summary: {element.description}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export default NewsCard;