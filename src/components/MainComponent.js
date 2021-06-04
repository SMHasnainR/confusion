import { useState, useEffect } from 'react';
import '../App.css';
// Importing Components
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes';

function Main() {

    const [dishDetails, setdishDetails] = useState(null);
    const onDishClick = (dish) => {
        setdishDetails(dish)
    };


    return (
        <div>

            <Header />
            <Menu dishes={DISHES} onDishClick={onDishClick} />
            <DishDetail dish={dishDetails} />
            <Footer />
                
        </div>
    );
}

export default Main;
