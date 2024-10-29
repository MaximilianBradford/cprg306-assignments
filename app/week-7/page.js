"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json" with { type: "json" };
import NewItem from "../week-7/new-item";

export default function Page() {
  const [array, setArray] = useState(Object.values(itemsData));

  

  const handleAddItem = (item) => { 
    const newItem = { ...item, id: Math.random().toString(36).substr(2, 9) }; // Ensure unique ID
    setArray([...array, newItem]);
  };

  return (
    <main className="bg-green-700">
      <div className=" flex-row justify-between">
        <h2 className="text-3xl font-bold m-2 border-">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={array} />
      </div>
      
    </main>
  );
}