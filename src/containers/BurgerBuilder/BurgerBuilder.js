import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from '../../store/actions/index';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


import Aux from '../../hoc/Auxiliary/Auxiliary';

class BurgerBuilder extends Component{
    state = {
        purchasing: false
    }
    componentDidMount(){
        console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) =>{
                return sum + el;
        }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    // purchaseHandler(){ /*If we declare our handler function like this it will generate error as "this" keyword won't work as it is triggered through event. It won't refer to class (as per JS). Better use arrow functions*/
    //     this.setState({purchasing: true});
    // }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchased();
        this.props.history.push('/checkout');
    }

    render(){
        console.log(this.state);
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if(this.props.ings){
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngredientAdded} 
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </React.Fragment>
            );

            orderSummary = <OrderSummary ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price} />
        }   
        
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchased: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));