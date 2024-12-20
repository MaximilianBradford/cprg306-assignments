"use client";
import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Error", error);
        }
    }

    async function loadMealIdeas() {
        const data = await fetchMealIdeas(ingredient);
        if (data && data.meals) {
            setMeals(data.meals);
        } else {
            setMeals([]);
        }
    }

    useEffect(() => {
        if (ingredient && ingredient.trim() !== "") { // Check for valid ingredient
            loadMealIdeas();
        } else {
            setMeals([]); // Clear meals if no valid ingredient
        }
    }, [ingredient]);

    if (!ingredient || ingredient.trim() === "") {
        return <div className="text-2xl m-2">No ingredients selected</div>;
    }

    if (meals.length === 0) {
        return <div className="text-2xl m-2">No meals found using {ingredient}</div>;
    }

    return (
        <div>
            <h3 className="text-2xl m-2">Potential meals using {ingredient}</h3>
            {meals.map(meal => (
                <div key={meal.idMeal}>
                    <h3 className="p-2 m-2 bg-emerald-400 max-w-sm">{meal.strMeal}</h3>
                    {/* <img src={meal.strMealThumb} alt={meal.strMeal} /> */}
                </div>
            ))}
        </div>
    );
}
