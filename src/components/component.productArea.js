import React from "react";
import Products from "./component.products";
function ProductArea(){
    const ProductList = [
        {name: 'PhotoShop', price: '$199.00'},
        {name: 'Illustrator', price: '$49.00'},
        {name: 'AdobeReader', price: '$9.00'},
        {name: 'Canva', price: '$5.00'}
      ];
    const StileContainer = {
        maxWidth: '100%',
        padding: '20px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row'
    }
    return(
        <div style={StileContainer}>
        <Products product={ProductList[0]}></Products>
        <Products product={ProductList[1]}></Products>
        <Products product={ProductList[2]}></Products>
        </div>
    );
}
export default ProductArea;