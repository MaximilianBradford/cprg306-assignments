"use client";
import Item from "./item.js";
import React, { useState } from "react";



export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");
    //const [ Array, setArray] = useState(Object.values(file));

    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.category.localeCompare(b.category);
      }
    });
        return(
            <div>
                <label>Sort by:</label>
                <div className="sort-buttons border-2 p-2 m-2 rounded-lg">
                <button onClick={() => {setSortBy("name")}} className = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100 ml-2 p-3 rounded-lg">Name</button>
                <button onClick={() => {setSortBy("category")}} className = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100  ml-2 p-3 rounded-lg">Category</button>
                </div>
            <ul>
                {sortedItems.map(item => (
                    <li key={item.id} className="p-2 m-4 bg-emerald-400 max-w-sm">
                        <Item name={item.name} category={item.category} quantity={item.quantity}/> 
                    </li>
                ))}
            </ul>
          </div>      
        );
}


