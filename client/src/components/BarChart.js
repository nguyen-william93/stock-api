import React from 'react';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { Container, Stack } from 'react-bootstrap';

const BarChart = (props) => {
    const callOpenInterest = [];
    const strike = [];
    const putOpenInterest = [];
    const callVolume = []
    const putVolume = [];
    props.data.forEach(prop => {
        callOpenInterest.push(prop.callOpenInterest);
        putOpenInterest.push(prop.putOpenInterest);
        strike.push(prop.strike)
        callVolume.push(prop.callVolume)
        putVolume.push(prop.putVolume)
    })

    const symbol = props.symbol.toUpperCase();
    const price = Math.round(props.currentPrice * 100) / 100

    return (
        <>
            <Container>
                <h2 className ='d-flex justify-content-center'>Current Price of {symbol}: {price}</h2>
                <h4 className = 'd-flex justify-content-center'>Open Interest Chart</h4>
                <Bar
                    data={{
                        labels: strike,
                        datasets: [
                            {
                                label: 'Call',
                                data: callOpenInterest,
                                backgroundColor: ['rgba(23, 122, 23, 0.8)']
                            },
                            {
                                label: 'Put',
                                data: putOpenInterest,
                                backgroundColor: ['rgba(255, 33, 0, 0.6)']
                            }
                        ]
                    }}
                    height={'200px'}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Chart.js Bar Chart'
                        }
                    }}
                />
            </Container>
            <Container>
                <h4 className='d-flex justify-content-center'>Volume Chart</h4>
                <Bar
                    data={{
                        labels: strike,
                        datasets: [
                            {
                                label: 'Call',
                                data: callVolume,
                                backgroundColor: ['rgba(23, 122, 23, 0.8)']
                            },
                            {
                                label: 'Put',
                                data: putVolume,
                                backgroundColor: ['rgba(255, 33, 0, 0.6)']
                            }
                        ]
                    }}
                    height={'200px'}
                    options={{
                        maintainAspectRatio: true,
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