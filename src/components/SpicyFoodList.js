import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisineType, setCuisineType] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods([...foods, newFood])

    console.log(newFood);
  }

  const selectCuisine = foods.filter((food) => {
    if (cuisineType === "All") {
      return true;
    } else {
      return food.cuisine === cuisineType;
    }
  })

  function handleFilterChange(e) {
    setCuisineType(e.target.value)
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {...food, heatLevel: food.heatLevel +1,
        }
      } else {
        return food
        }
    }) 
    setFoods(newFoodArray)
  }

  const foodList = selectCuisine.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)} on>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
