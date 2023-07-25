import React from "react";
import Products from "./component.products";
import Friends from "./component.friends";
function ProductArea(){
    const FriendsList = [
        {name: 'Md Shajib', phone: '01757-259809'},
        {name: 'Md Jamil', phone: '01723-312121'},
        {name: 'Md Anik', phone: '01723-000000'},
        {name: 'Md Afridi', phone: '01723-101010'},
        {name: 'Md Rony', phone: '01723-232323'},
    ];
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
        {
            FriendsList.map(friends => <Friends Friend={friends}></Friends>)
        }
        </div>
    );
}
export default ProductArea;