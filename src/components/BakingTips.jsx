import React from 'react'
import './BakingTips.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BakingTips() {
  return (
    <>
    <div>
                <h3 className='d-flex ms-5 mt-5 mb-5 '>Baking Tips & Tricks</h3>
            </div>

            <div className='d-flex justify-content-center mb-5'>

                <div className='' >

                    <Card className='ba_img' style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/de99f058-7c01-4b82-8653-7a694f5365f6/Jam_Header.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                        <Link  style={{ textDecoration: 'none' ,color:'black'}} >
                        <Card.Body>
                            <Card.Title className=' d-flex justify-content-center'>How to Make Jams & Preserves</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>

                <div className='ms-5'>
                    <Card className='ba_img' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/0ea94e97-66ff-4b9c-9894-9b181f3fc507/Rainbow%20Cupcakes%20FULL%20RES-3.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                        <Link  style={{ textDecoration: 'none' ,color:'black'}} >
                        <Card.Body>
                            <Card.Title className=' d-flex justify-content-center'>How to freeze cupcakes</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className='ms-5'>
                    <Card className='ba_img' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/4c47d423-941c-4358-ba54-ff2a792f9c07/Allinsons-Pizza-Dough-1-1-Baking-Mad-4.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                        <Link  style={{ textDecoration: 'none' ,color:'black'}} >
                        <Card.Body>
                            <Card.Title className=' d-flex justify-content-center'>How to Freeze Pizza Dough</Card.Title>
                        </Card.Body>
                        
                        </Link>
                    </Card>
                </div>
                <div className='ms-5'>
                    <Card className='ba_img' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/f94cdc41-6689-4be6-88cf-528bcf38d17c/Baking-Cooling-Racks.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" height='200px' />
                        <Link  style={{ textDecoration: 'none' ,color:'black'}}>
                        <Card.Body>
                            <Card.Title className=' d-flex justify-content-center'>Top 10 Baking Essentials</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>
            </div>

    </>
  )
}

export default BakingTips

