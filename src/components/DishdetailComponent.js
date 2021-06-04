import { useState, useEffect } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {

    const [dish, setDish] = useState(props.dish);
    useEffect(() => {
        setDish(props.dish)
        console.log(dish);
        // console.log('Dish Details Component did mount');
    });
    let commentList = dish ? dish.comments.map((c) => {
        return (
            <div>

                <p> {c.comment}</p>
                <p> --{c.author}, {c.date}</p>

            </div>
        );
    }) : null;

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    {dish &&
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle > <h5> {dish.name} </h5></CardTitle>
                                <CardText>
                                    {dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    }
                </div>
                {dish &&

                    <div className="col-12 col-md-5 m-1">
                        <h4> Comments </h4>
                        {commentList}
                    </div>
                }
            </div>
        </div>
    );
}

export default DishDetail;
