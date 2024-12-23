import { Card, Button, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Pizza = () => 
{
    const [pizza, setPizza] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas/p001')

        .then( (res) => res.json() )
        .then( (data) => {  
            setPizza(data)
            console.log(data);
            })
    }, [])

  return (
    <div className='d-flex justify-content-center pt-4 pb-2'>
        <Card className='pizza-tamannio-cards'>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name}/>

            <Card.Body className="p-0">

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>
                        <Card.Title className='text-start'>Pizza {pizza.name}</Card.Title>
                    </ListGroup.Item>

                    <Card.Text className="d-flex flex-column text-center">
                                <strong>Precio:</strong> <b className='display-6'> ${pizza.price} </b>
                                <br />
                                <strong>🍕 Ingredientes:</strong> 

                                <ul>
                                        {pizza.ingredients && pizza.ingredients.length > 0 ? (
                                        pizza.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                                        ) : (
                                            <li>Sin ingredientes disponibles</li>
                                        )}

                                </ul>
                                <p className='p-2'>{pizza.desc}</p>
                        </Card.Text>


                    <ListGroup.Item className='text-center'>
                        <div className="d-flex justify-content-between pt-4 pb-2">
                        <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                        </div>
                    </ListGroup.Item>

                </ListGroup>
            </Card.Body>
        </Card>
    </div>
    );
};


export default Pizza;