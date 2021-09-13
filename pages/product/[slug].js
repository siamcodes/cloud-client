import React from 'react';
import Layout from '../../components/Layout';
import data from '../../data';

const Product = ({product, query}) => {
    return(
      <Layout>
            <h1>Product</h1>
            {data.products.map((p, index) =>
                <div key={index}>
                    {p.name}
                </div>
            )}
      </Layout>
    )
}

/* Product.getInitialProps = ({ query }) => {
    return singleProduct(query.slug).then(data => {
        if(data.error){
            console.log(data.error);
        }else{
            return { product: data.product, query}
        }
    })
}; */

export default Product;