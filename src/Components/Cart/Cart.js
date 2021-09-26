import React from 'react';
import cartStyle from './Cart.css';

const Cart = (props) => {
    const{cart}=props;    
    let cost=0;
    for(const teacher of cart){
        cost=cost+teacher.Cost;     
    }
    return (
        <div className='cart-div' style={cartStyle}>
            <h2 className="cart-head">Added Awesome Teachers</h2>
            <hr />
            <h3>Total Teachers: {props.cart.length} </h3>
            <h3>Total Cost: {cost}$</h3>
            <h2 className="new">New Added Teachers</h2>
            <hr />
            {
                cart.map(names=>
                <div className="small-container">
                    <img className='mini-img' src={names.picture} alt=""/>
                    <h3 className="newTeacher">{names.name}-Added. </h3>
                </div> )
            }
        </div>
    );
};

export default Cart;