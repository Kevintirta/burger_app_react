import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:0.7,
    bacon:0.6
}

class BurgerBuilder extends Component{
    
    state = {
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing:false
    }


    updated_purchaseable = (updated_ingredient) =>{
        const sum = Object.keys(updated_ingredient)
        .map(igkey => {
            // console.log(updated_ingredient[igkey]);
            return updated_ingredient[igkey];
        })
        .reduce((sum,el) =>{
            // console.log("sum:",sum)
            return sum+el;
        },0)
        // console.log(sum);
        this.setState({purchaseable: sum > 0})
    }
    
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredient
        }
        updatedIngredients[type] = updatedCount;
        
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredient:updatedIngredients});
        this.updated_purchaseable(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const old_count = this.state.ingredient[type];
        if(old_count >0){
            const updated_count = old_count-1;
            const updated_ingredient = {...this.state.ingredient};
            updated_ingredient[type] = updated_count;
            this.setState({ingredient:updated_ingredient});

            const priceReduction = INGREDIENT_PRICES[type];
            const updated_price = this.state.totalPrice - priceReduction;
            this.setState({totalPrice:updated_price});
            this.updated_purchaseable(updated_ingredient); 
        }
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }
 
    purchasedCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
        alert("You continue !")
    }

    render(){

        const DisabledInfo = {
            ...this.state.ingredient
        }

        for (let type in DisabledInfo){
            DisabledInfo[type] = DisabledInfo[type] <= 0
            // console.log(DisabledInfo)
        }
        return(
            <Aux>            
                <Modal show={this.state.purchasing} modalClosed = {this.purchasedCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredient}
                    purchaseCanceled = {this.purchasedCancelHandler} 
                    purchaseContinued = {this.purchaseContinueHandler}
                    price = {this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredient = {this.state.ingredient}/>
                <BuildControls 
                    IngredientAdded = {this.addIngredientHandler}
                    IngredientRemoved = {this.removeIngredientHandler} 
                    disabled = {DisabledInfo}
                    price={this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    ordered = {this.purchaseHandler}/>
                {/* <div>Build Controls</div> */}
            </Aux>
        );
    }
}

export default BurgerBuilder;