import React from 'react'
import Card from 'react-bootstrap/Card';
import './TrendingReceipes.css'
import { Link } from 'react-router-dom';

function TrendingReceipes() {
    return (
        <>
            <div>
                <h3 className='d-flex ms-5 mt-5 mb-5 '>Trending Recipes</h3>
            </div>
            
                <div className='d-flex justify-content-center mb-5'>

                    <div className='' >

                        <Card className='receipe_img' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/b5446a9c-7bbc-4272-a303-fc1f7e3b07a0/Lemon%20Cheesecake%20FULL%20RES-8.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                            <Link style={{ textDecoration: 'none', color: 'black' }} >
                                <Card.Body>
                                    <Card.Title className=' d-flex justify-content-center'>Lemon Cheesecake</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>

                    <div className='ms-5'>
                        <Card className='receipe_img' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/b2d46c02-f856-42cb-9b95-5782b99c8253/Pistachio-Ice-Cream-SQUARE-8.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                            <Link style={{ textDecoration: 'none', color: 'black' }} >
                                <Card.Body>
                                    <Card.Title className=' d-flex justify-content-center'>pistachio ice cream</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                    <div className='ms-5'>
                        <Card className='receipe_img' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/8735fccd-7fa3-49da-9024-c8fbc13a46ba/4x3_Pistachio%20Brownies-4.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                            <Link style={{ textDecoration: 'none', color: 'black' }} >
                                <Card.Body>
                                    <Card.Title className=' d-flex justify-content-center'>Pistachio brownie</Card.Title>
                                </Card.Body>

                            </Link>
                        </Card>
                    </div>
                    <div className='ms-5'>
                        <Card className='receipe_img' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/b58bd4d3-f781-4238-b96d-6a66e3264907/Strawberry%20Cake%20Hero.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                            <Link style={{ textDecoration: 'none', color: 'black' }} >
                                <Card.Body>
                                    <Card.Title className=' d-flex justify-content-center'>Strawberry Cake</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </div>

        </>
    )
}

export default TrendingReceipes




