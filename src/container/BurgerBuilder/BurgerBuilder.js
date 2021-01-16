import React, { Component } from "react";

import aux from "../../hoc/hocaux";
import Burger from '../../components/Burger/Burger';
import BuildControlls from '../../components/Burger/BuildControlls/BuildControlls';
const INGREDIENT_PRICES = {
  salad: 10,
  cheese: 15,
  meat: 25,
  bacon:20,
}


class BurgerBuilder extends Component {


  constructor(props){
    super(props);
    this.state={
      ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
      },
      totalPrice: 10
    }
  }

  addIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
    ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
  }

  render() {
    return (
      <aux>
        <div>
           <Burger ingredients={this.state.ingredients}></Burger>
        </div>
        <div>
            <BuildControlls />
        </div>
      </aux>
    );
  }
}

export default BurgerBuilder;
