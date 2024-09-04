import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function CarouselPage() {
    return (
        <div>
            <Carousel data-bs-theme="light">

                <Carousel.Item interval={500} >

                    <img
                        className="d-block w-100" style={{ height: '660px', opacity: '85%' }}
                        src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/766fb933-01b5-42aa-bc7f-365634cf211f/American%20Pancakes%20-%204.3%20landscape-9236.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption >

                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Going for</h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}>golden</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Our golden American panckes-a breakfast for champions.</p>
                        <Button className='d-flex ps-5 pe-5 pt-2 pb-2 mb-5 bg-tomato' style={{ border: 'none', fontSize: '20px', borderRadius: "50px", color: 'white' }}>Fry me</Button>


                    </Carousel.Caption>


                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100" style={{ height: '660px', opacity: '85%' }}
                        src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/9a42989d-078c-4a9a-81e8-fa7735e0b150/Oreo%20Cheesecake%20-%204.3%20landscape-8570.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Too hot to</h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}> bake?</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Our no bake oreo cheesecake is the vibe.</p>
                        <Button className='d-flex ps-5 pe-5 pt-2 pb-2 mb-5 bg-tomato' style={{ border: 'none', fontSize: '20px', borderRadius: "50px", color: 'white' }}>Discover more</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} >

                    <img
                        className="d-block w-100 shadow border" style={{ height: '660px', opacity: '85%' }}
                        src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/563d2bc8-2cac-4ebd-97dd-4fd99906593a/4x3_Espresso%20Chocolate%20Cake-4.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1"
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Espresso</h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}>yourself</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Our New Espresso Chocolate cake is a must</p>
                        <Button className='d-flex ps-5 pe-5 pt-2 pb-2 mb-5 bg-tomato' style={{ border: 'none', fontSize: '20px', borderRadius: "50px", color: 'white' }}>Find my Recipe</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} >
                    <img
                        className="d-block w-100" style={{ height: '660px', opacity: '85%' }}
                        src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/c0f18de1-42d3-4cb7-9f99-3d56956acd31/Easy%20Scones%20-%204.3%20landscape-4924.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className='d-flex' style={{ color: 'white', fontSize: '70px' }}>Summer time </h1>
                        <h1 className='d-flex mt-3' style={{ color: 'white', fontSize: '70px' }}> cones</h1>
                        <p className='d-flex mb-5 mt-5 ' style={{ color: 'white', fontSize: '20px' }} >Scone. Jam. Cream. The summer dreamteam.</p>
                        <Button className='d-flex ps-5 pe-5 pt-2 pb-2 mb-5 bg-tomato' style={{ border: 'none', fontSize: '20px', borderRadius: "50px", color: 'white' }}>Find the recipe</Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></div>
    )
}

export default CarouselPage



