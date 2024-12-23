import CardPizza from '../components/CardPizza'
import Header from '../components/Header';

import { useEffect, useState } from 'react';

const Home = () => {
  // console.log(pizzas);

  const [pizzasAPI, setPizzas] = useState([])



useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')

    .then( (res) => res.json() )
    .then( (data) => {  
       setPizzas(data)
       console.log(data);
  })
}, [])
  

  return (
    <div>
      <Header></Header>

      <div className="container jc-center">
          <div className="row jc-center-card">
            {pizzasAPI.map((pizza) => {
              return (
                <CardPizza 
                key={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                imagen={pizza.img}
                />
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Home;