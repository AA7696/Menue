import { useState } from 'react'
import './App.css'
import Food from './component/Food'
import menueData from './data.js'
function App() {
  const [foods, setFoods] = useState(menueData);

  const breakfast = () => {
    const newFoods = menueData.filter((food) => food.category == 'breakfast');
    setFoods(newFoods);

    
  }
  
  const lunch = () => {
    const newFoods = menueData.filter((food) => food.category == 'lunch');
    setFoods(newFoods);

    
  }

  const shakes = () => {
    const newFoods = menueData.filter((food) => food.category == 'shakes');
    setFoods(newFoods);

    
  }

  const all = () => {
    setFoods(menueData);

    
  }




  return (
    <div className="app">
      <h1>Our Menue</h1>
      <div className="category">
        <button className='btn' onClick={all}>All</button>
        <button className='btn' onClick={breakfast}>Breakfast</button>
        <button className='btn' onClick={lunch}>Lunch</button>
        <button className='btn' onClick={shakes}>Shakes</button>
      </div>
      <div className="menue-items">

        {foods.map((food)=>{
          return <Food key={food.id} food={food} />
        })}





      </div>

    </div>
  )
}

export default App
