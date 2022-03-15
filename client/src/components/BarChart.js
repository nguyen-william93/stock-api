import React from 'react';
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { Container, Stack } from 'react-bootstrap';

const BarChart = (props) => {
    console.log(props)
    const callOpenInterest = [];
    const strike = [];
    const putOpenInterest = [];
    const callVolume = []
    const putVolume = [];
    props.data.forEach(prop => {
        callOpenInterest.push(prop.callOpenInterest);
        putOpenInterest.push(prop.putOpenInterest);
        strike.push(`Strike: ${prop.strike}`)
        callVolume.push(prop.callVolume)
        putVolume.push(prop.putVolume)
    })

    return (
        <>
            <Container>
                <h1>Open Interest Chart</h1>
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
                    width={'auto'}
                    height={'250px'}
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
                <h1>Volume Chart</h1>
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
                    width={'auto'}
                    height={'250px'}
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