import React from 'react'



function ContactUs() {
    return (
        <>
            <div className='w-100' style={{ height: '300px', backgroundColor: ' #f2ece8' }}>
                <div className='ms-5 d-flex align-items-center ' style={{ height: '300px' }}>
                    <h1 className='' style={{ fontSize: '50px' }} >Contact Us</h1>
                </div>
            </div>
            <div className='ms-5'>
                <p className='mt-5'>
                    Whether you want to share your suggestions, thoughts and comments, or if you have any questions - we'd love to hear from you. </p>
                <h2 className='mb-5'>Email us</h2>
                <div className='mb-5'><p>For Baking Queries: Email us at customerservices@bakingmad.com and we will aim to respond to you within 48 hours.
                </p></div>


                <h2>Write to Us</h2>

                <div className='mt-5 mb-5'>
                    <p>If you'd prefer to put pen to paper then you can write to us at:</p>

                    <p>Baking Mad</p>

                    <p>Western House - Block B</p>

                    <p>Lynchwood Business Park</p>

                    <p>PE2 6FZ</p>
                </div>
            
            </div>

        </>

    )
}

export default ContactUs