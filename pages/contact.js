import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import pic2 from '../public/images/pic2.jpg';

function contact() {
    return (
        <Layout>
            <h1>เกี่ยวกับเรา</h1>
            <img src="/images/pic1.jpg" className="img-res" />
            <br/>
            <Image src={pic2} style={{height: '500px'}} />
        </Layout>
    )
}

export default contact;
