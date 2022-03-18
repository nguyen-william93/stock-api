// import React, { useState, useEffect } from 'react';
// import { Container, Form, Button, Card } from 'react-bootstrap';
// import { optionAPI } from '../utils/API';
// import News from '../components/News';

// const Research = () => {
//     const [searchInput, setSearchInput] = useState('');
//     const [news, setNews] = useState([]);

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();
//         const symbol = searchInput.toUpperCase();
//         const url = {
//             method: 'GET',
//             url: `https://yfapi.net/ws/insights/v1/finance/insights?symbol=${symbol}`,
//             params: { modules: 'defaultKeyStatistics,assetProfile' },
//             headers: {
//                 'x-api-key': 'iPkydunA9e2Kc8Y4kYGaK1j6HsNFJfIe4qtMaubc'
//             }
//         };

//         try {
//             const data = await API(url);
//             setNews(data.finance.result.reports);
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     return (
//         <>
//             <Container className='text-light bg-dark w-75'>
//                 <h1 className='d-flex justify-content-center'>Search A Stock</h1>
//                 <Form className='d-flex justify-content-between'>
//                     <Form.Group className="w-auto" controlId="formBasicEmail">
//                         <Form.Control
//                             name='searchInput'
//                             value={searchInput}
//                             onChange={(e) => setSearchInput(e.target.value)}
//                             type="text"
//                             placeholder="Enter stock symbol" />
//                     </Form.Group>
//                     <Button variant='primary' type='submit' className='mb-3' onClick={(e) => handleSubmitForm(e)}>Submit</Button>
//                 </Form>
//             </Container>
//             <Container fluid className='d-flex flex-row justify-content-center w-75 pl-0'>
//                 <Container fluid className='d-flex justify-content-start flex-wrap pl-0 ml-0 mt-2'>
//                     {news.length
//                         ? <News news={news} />
//                         : "Search For A Stock"
//                     }
//                 </Container>
//                 <Container fluid className='d-flex flex-wrap'>
//                     <h2> Stat</h2>
//                 </Container>
//             </Container>
//         </>
//     )
// };

// export default Research;