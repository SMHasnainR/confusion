import { useState, useEffect } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const DishDetail = (props) => {

    const [dish, setDish] = useState(props.dish);
    const [comments, setComments] = useState(props.comments);

    let commentList = comments.map((c) => {
        return (
            <div>

                <p> {c.comment}</p>
                <p> --{c.author}, {c.date}</p>

            </div>
        );
    });

    return (
        <div className='container'>
            <div className="row mt-2">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to={'/home'}>Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem ><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
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
