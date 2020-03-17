import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import "./Burger.css";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            });
        })
        .reduce((arr,el) =>{
            return arr.concat(el); 
        },[]);

    
    // console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add ingredients</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <p>testdsfa</p> */}
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
}

export default burger;