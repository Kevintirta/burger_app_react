import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'
// const 

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

]

const BuildControls = (props) => {
    // const transformed_ingredient = Object.keys(props.ingredient)
    // .map(igKey => {
    //     return <BuildControl label = {igKey} />
    // });

    // console.log(props.ingredient);
    // console.log(props.ingredient.length);
    // console.log(transformed_ingredient)

    return (
        <div className="BuildControls">
            <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => {
                    return <BuildControl
                        label={ctrl.label}
                        key={ctrl.label}
                        type={ctrl.type}
                        added={() => props.IngredientAdded(ctrl.type)}
                        removed={() => props.IngredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                })
            }
            <button disabled={! props.purchaseable} onClick={props.ordered} className="OrderButton">ORDER</button>
        </div>
    )
};

export default BuildControls;