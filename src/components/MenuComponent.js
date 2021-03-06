// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

  const [dishes, setDishes] = useState(props.dishes);

  const RenderMenuItem = ({ dish, onClick }) => {
    return (
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle> <h5> {dish.name} </h5></CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  }

  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onDishClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-2">
        <Breadcrumb>
          <BreadcrumbItem> <Link to={'/home'}>Home</Link> </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;
