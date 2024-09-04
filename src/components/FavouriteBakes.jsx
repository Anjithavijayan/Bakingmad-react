import React from 'react'
import './FavouriteBake.css';

function FavouriteBakes() {
    return (
        <>
            <div>
                <h3 className='textStyle ms-5 mt-5'>Top Favourite Bakes</h3>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ height: "300px" }}>
                <div className='me-3' >
                    <img src="data:image/svg+xml,%3Csvg width='79' height='180' viewBox='0 0 79 180' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M45.778 2.20898H76.667V178H43.5178V53.4395H1.83023V28.5776C33.9749 28.5776 45.778 20.2904 45.778 2.20898ZM42.0178 54.9395H0.330231V27.0776H1.83023C17.8445 27.0776 28.4714 24.9995 35.0664 20.8999C41.4916 16.9059 44.278 10.8658 44.278 2.20898V0.708984H78.167V179.5H42.0178V54.9395Z' fill='%23ED6F81'/%3E%3C/svg%3E%0A" height={'130px'} alt="" />
                    <img className='fav_bake' src="https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/6ca72e66-b54e-479c-bfa8-320617d7fd62/4x3_Vanilla%20Buttercream-3.jpg?w=384&q=85&auto=format&lossless=1" width={'250px'} alt="" />
                </div>

                <div className='me-3' >
                    <img src="data:image/svg+xml,%3Csvg width='120' height='183' viewBox='0 0 120 183' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.9636 58.6929H0.0745773V57.1929C0.0745773 28.8536 20.2252 0.44429 58.5811 0.44429C76.4664 0.44429 90.9271 5.56522 102.057 16.1776C113.135 26.7399 118.846 39.4305 118.846 54.4305C118.846 65.8581 116.144 75.6258 110.667 84.1819C105.201 92.721 97.028 99.9624 86.2237 106.445L52.5896 126.776C46.5144 130.621 42.4998 134.072 39.9972 137.605C37.5262 141.094 36.4749 144.739 36.4749 149.106V150.118H119.348V182.5H0.325707V153.125C0.325707 141.451 2.96195 131.736 8.70438 123.041C14.4265 114.377 23.1641 106.832 35.188 99.3641L67.5719 79.2812C67.5739 79.2799 67.576 79.2786 67.5781 79.2773C77.5551 72.9484 82.4452 65.0893 82.4452 55.6861C82.4452 49.4145 80.1467 44.0505 76.0221 40.2454C71.89 36.4335 65.8097 34.0822 58.0788 34.0822C43.8296 34.0822 33.9636 44.7213 33.9636 57.1929V58.6929ZM68.3752 80.548L35.9794 100.638C12.122 115.455 1.82571 130.272 1.82571 153.125V181H117.848V151.618H34.9749V149.106C34.9749 139.815 39.4952 133.285 51.8006 125.5L85.452 105.159C106.798 92.3511 117.346 76.781 117.346 54.4305C117.346 39.8649 111.821 27.5596 101.022 17.2632C90.2235 6.9669 76.1602 1.94429 58.5811 1.94429C21.8401 1.94429 2.28959 28.5775 1.59382 55.6929C1.581 56.1928 1.57458 56.6928 1.57458 57.1929H32.4636C32.4636 43.883 43.011 32.5822 58.0788 32.5822C74.1511 32.5822 83.9452 42.3762 83.9452 55.6861C83.9452 65.7313 78.6715 74.0186 68.3752 80.548Z' fill='%23ED6F81'/%3E%3C/svg%3E%0A" height={'130px'} alt="" />
                    <img className='fav_bake' src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/430b2d82-5eba-41c6-8c76-61cdf34b90a2/Untitled%20design%20%2848%29.png?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" width={'250px'} alt="" />
                </div>
                <div className='me-3'>
                    <img src="data:image/svg+xml,%3Csvg width='122' height='183' viewBox='0 0 122 183' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.330231 124.265H34.1922L34.219 125.738C34.4534 138.631 44.4816 148.122 59.0879 148.122C67.1762 148.122 73.7518 145.532 78.2957 141.164C82.835 136.8 85.4633 130.552 85.4633 123.003C85.4633 115.857 82.7908 109.666 78.1455 105.256C73.4974 100.843 66.7877 98.1339 58.5856 98.1339H33.7305V70.1258L72.2537 33.3423H3.84605V0.708984H116.59V31.9842L77.0488 69.5358C89.4551 71.5818 100.011 77.2021 108.422 86.8433C117.479 96.6837 121.864 108.603 121.864 122.751C121.864 154.431 98.879 182.514 59.339 182.514C20.4775 182.514 0.330231 153.347 0.330231 125.765V124.265ZM107.305 87.8443C98.7664 78.0502 87.9678 72.5254 75.1602 70.7675V69.2607L115.09 31.3401V2.20898H5.34605V31.8423H74.1557V33.6002L35.2305 70.7675V96.6339H58.5856C75.6625 96.6339 86.9633 107.935 86.9633 123.003C86.9633 138.824 75.9136 149.622 59.0879 149.622C43.7689 149.622 32.9704 139.577 32.7192 125.765H1.83023C1.83023 126.264 1.837 126.765 1.85053 127.265C2.56487 153.681 22.1233 181.014 59.339 181.014C98.013 181.014 120.364 153.64 120.364 122.751C120.364 108.939 116.094 97.3873 107.305 87.8443Z' fill='%23ED6F81'/%3E%3C/svg%3E%0A" height={'130px'} alt="" />
                    <img className='fav_bake' src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/8c0fd350-a2eb-43e1-b304-5566176b1a83/Easy%20Scones%20-%204-Photoroom.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" width={'250px'} alt="" />
                </div>
                <div className='me-3'>
                    <img src="data:image/svg+xml,%3Csvg width='133' height='180' viewBox='0 0 133 180' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M37.9794 111.702V113.208H78.1602V75.7901H111.058V113.208H130.646V142.591H111.058V178H78.1602V142.591H1.56554V115.217L49.2802 2.20898H83.6851L37.9794 111.702ZM76.6602 144.091H0.0655365V114.914L48.2854 0.708984H85.9366L39.602 111.708H76.6602V74.2901H112.558V111.708H132.146V144.091H112.558V179.5H76.6602V144.091Z' fill='%23ED6F81'/%3E%3C/svg%3E%0A" height={'130px'} alt="" />
                    <img className='fav_bake' src="https://assets-eu-01.kc-usercontent.com:443/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/7d886b86-835b-433d-bbbe-41e0c1b11467/Millies%20Cookies%20-%204.2%20landscape-799.jpg?w=3840&amp;q=85&amp;auto=format&amp;lossless=1" width={'250px'} height={'190px'} alt="" />
                </div>


            </div>

            <div className='d-flex ms-5' style={{ height: '50px' }}>
                <div className=" d-flex justify-content-center align-items-center" style={{ width: "400px", height: '20px', fontSize: "19px" }}> Buttercream icing recipe</div>
                <div className=" d-flex justify-content-center align-items-center" style={{ width: "400px", height: '20px', fontSize: "19px" }}>Pizza Dough</div>
                <div className=" d-flex justify-content-center align-items-center" style={{ width: "400px", height: '20px', fontSize: "19px" }}>Easy Scones Recipe</div>
                <div className=" d-flex justify-content-center align-items-center" style={{ width: "400px", height: '20px', fontSize: "19px" }}>Copycat Chocolate Chip Millie's Cookies</div>
            </div>


        </>

    )
}

export default FavouriteBakes


