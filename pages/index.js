import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import data from '../data';

function index() {
    return (
        <Layout>
            <h1>Welcome to website </h1>
            <div className="row">
                { data.products.map((p, index) => 
                    <div className="col-lg-3 col-sm-4 col-6" key={index}>
                        <div className="card">
                            <img src={p.picture} className="card-img-top" alt={p.name} />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <h5 className="card-title">ราคา ฿{p.price}</h5>
                                <h5 className="card-title">จำนวนในคลัง {p.stock}</h5>
                                <p className="card-text">{p.description}</p>
                                <a href={`/product/${p.slug}`} className="btn btn-primary">Detail</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default index;
