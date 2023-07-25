import React from "react";
function Products(props){
    const ProductStyle = {
        backgroundColor: '#636e72',
        padding: '10px',
        border: '1px solid #fafafa',
        borderRadius: '8px',
        height: '200px',
        width: '200px',
    }
    const ButtonStyle = {
        backgroundColor: 'skyblue',
        height: '35px',
        padding: '8px 10px',
        borderRadius: '5px'
    }
    const {name, price} = props.product;
    return(
        <div style={ProductStyle}>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <button style={ButtonStyle}>Buy Now</button>
        </div>
    );
}


export default Products;