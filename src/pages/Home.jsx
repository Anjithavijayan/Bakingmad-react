import React from 'react'
import './Home.css'
import TrendingReceipes from '../components/TrendingReceipes';
import BakingTips from '../components/BakingTips';
import CarouselPage from '../CarouselPage';
import CoffeeBakes from '../components/CoffeeBakes';
import FavouriteBakes from '../components/FavouriteBakes';





function Home() {
    return (
        <>
            <CarouselPage />
            <FavouriteBakes/>
            <CoffeeBakes/>
            <div className='main' style={{ width: '100%', height: '400px',marginTop:'60px' }}>
                <div className='first bg-primary' style={{ width: '50%', height: '400px' }}>
                    <div className='m-5 align-items-center' style={{ width: '80%', height: '300px' }}>
                        <h3 style={{ color: 'white', fontSize: '30px' }}>Fill your inbox with yummyness.</h3>
                        <p className='mt-5' style={{ color: 'white' }}>Sign up for a generous serving of mouthwatering recipes,
                            giveaways and tips straight from our kitchen to yours.</p>
                        <div className=''>
                            <input className='ps-3' style={{ width: '100%',height:"35px" ,borderRadius: "5px", border: 'none' }} type="Email" placeholder='Enter Email Id' />
                        </div>
                    </div>
                </div>
                <div className='second'>
                    <img style={{ height: '400px',borderRadius:'0px' }} src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/6bd0d3ee-5e39-453a-bdcb-bd4400c188bc/Cookie%2C%20Oreo%20%26%20Brownie%20Layered%20Cake-_landscape%203.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" alt="" />
                </div>
            </div>
            <TrendingReceipes />
            <BakingTips />


        </>

    )
}

export default Home



