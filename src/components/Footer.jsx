import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className=" d-flex align-items-center" style={{ height: '150px', color: "white", backgroundColor: "#267373" }}>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className=''>
                            <h4 class="">Follow Baking Mad</h4>
                        </div>
                        <div>
                            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-youtube ms-3 fs-2"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-instagram ms-3 fs-2"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook ms-3 fs-2"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-pinterest ms-3 fs-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: '300px' }} className='d-flex justify-content-center align-items-center flex-column mt-5'>

                <div className='d-flex justify-content-evenly w-100 mt-5'>
                    <div>
                        <h4 style={{ color: "Tomato" }}>
                            Recipes
                        </h4>
                        <div className='d-flex flex-column' >

                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Bread & Dough
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Cake Recipes
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Confectionery
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Cookies & Biscuits
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Cupcakes & Muffins
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Desserts
                            </Link>
                            <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                                Ice Cream & Lollies
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4 style={{ color: "Tomato" }}>Discover</h4>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Retro Bakes
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Family Baking
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Afternoon Tea
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Celebration Cakes
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Bread Machines
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Cheesecakes
                        </Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4 style={{ color: "Tomato" }}>Diet & Lifestyle</h4>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Gluten Free
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Dairy Free
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Nut Free
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Egg Free
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Vegan
                        </Link>
                        <Link to='' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Vegetarian
                        </Link>

                    </div>
                    <div className='d-flex flex-column'>
                        <h4 style={{ color: "Tomato" }}>About us</h4>
                        <Link to='/OurStory' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Our story
                        </Link>
                        <Link to='/ContactUs' target="" style={{ textDecoration: 'none', color: 'grey' }}>
                            Contact us
                        </Link>

                    </div>


                </div>
                <div className='w-100'>
                    <hr />
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='mt-4 mb-4'>
                        <img src='https://assets-eu-01.kc-usercontent.com/7cab15cb-2cb0-017c-906e-4b5275c3eb5c/10129fc7-a31d-46db-ba3e-f89a95fa1df1/baking-mad-logo-colour.png?w=640&q=80&lossless=true&auto=format' width='100px' height='65px' alt='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
                        <Link to='' target="" className=' ms-5 me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Terms & Conditions
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Privacy Policy
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Cookie Policy
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Modern Slavery Act
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Environment Policy
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey' }}>
                            Responsible Sourcing Policy
                        </Link>
                        <Link to='' target="" className='me-5' style={{ textDecoration: 'none', color: 'grey', hover: 'tomato' }}>
                            Nutrition and Health Policy
                        </Link>

                    </div>

                </div>

            </div >

        </>
    )
}

export default Footer