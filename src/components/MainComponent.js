import '../App.css';

// Importing Packages
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Importing Components
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

// Importing Data
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function Main() {

    const [dishes, setdishDetails] = useState(DISHES);
    const [comments, setComments] = useState(COMMENTS);
    const [leaders, setLeaders] = useState(PROMOTIONS);
    const [promotions, setPromotions] = useState(LEADERS);

    const onDishClick = (dish) => {
        setdishDetails(dish)
    };

    const HomePage = () => { return (<Home 
        dish = {dishes.filter( (dish) => dish.featured)[0]}
        promotion = {promotions.filter( (promotion) => promotion.featured)[0]}
        leader = {leaders.filter( (leader) => leader.featured)[0]}
    />) }

    const DishWithId = ( {match} ) => {
        return (
            <DishDetail dish = {dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10) )[0]  }
            comments = {comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId,10) )  }
             />
        );
    };

    return (

        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/menu' component={() => <Menu dishes={DISHES} onDishClick={onDishClick}  /> } />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Redirect to='/home' />
            </Switch>
            <Footer />

        </div>
    );
}

export default Main;
