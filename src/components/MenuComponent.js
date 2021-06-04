// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { useState, useEffect } from 'react';
const Menu = (props) => {

  const [dishes, setDishes] = useState(props.dishes);

  const menu = dishes.map((dish) => {
              return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick= {() => props.onDishClick(dish)} >
                    <CardImg width="100%"  src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                      <CardTitle> <h5> {dish.name} </h5></CardTitle>
                    </CardImgOverlay>
                    {/* <Media body className="ml-5">
                      <p>{dish.description}</p>
                    </Media> */}
                  </Card>
                </div>
              );
          });
        
  return (
      <div className="container">
        <div className="row">              
          {menu}
        </div>
      </div>
  );
}

export default Menu;
