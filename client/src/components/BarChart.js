import React from 'react';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { Container } from 'react-bootstrap';

const BarChart = (props) => {
    console.log(props)
    const callOpenInterest = [];
    const strike = [];
    const putOpenInterest = [];
    props.data.forEach(prop => {
        callOpenInterest.push(prop.callOpenInterest);
        putOpenInterest.push(prop.putOpenInterest);
        strike.push(prop.strike)
    })
    
    console.log(callOpenInterest)
    console.log(putOpenInterest)
    console.log(strike)
    return (
        <>
        <Container>
            <Bar
                data={{
                    labels: strike,
                    datasets: [
                        {
                            label: 'Call',
                            data: callOpenInterest,
                            backgroundColor: ['rgba(39, 255, 0, 0.8)']
                        },
                        {
                            label: 'Put',
                            data: putOpenInterest,
                            backgroundColor: ['rgba(255, 33, 0, 0.6)']
                        }
                    ]
                }}
                width={'800px'}
                height={'500px'}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    }
                }}
            />
        </Container>
        </>
    )
}

export default BarChart