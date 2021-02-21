import React from 'react';
import PizzaImage from '../../assets/pizza.jpg';
import classes from './PizzaImage.module.css';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} class={classes.PizzaImage} />
    </div>
);

export default pizzaImage;