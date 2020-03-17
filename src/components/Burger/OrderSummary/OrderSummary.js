import React from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey=>{
    return <li><span>{igkey}</span>:{props.ingredients[igkey]}</li>
    });

    
    return(
        <Aux>
            <h1>Your Order</h1>
            <p> delicious burger with the following ingredient</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price : {props.price}</p>
            <p>You sure want to close?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;