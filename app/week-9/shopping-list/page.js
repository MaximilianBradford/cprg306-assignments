"use client";
import { useUserAuth } from "../_utils/auth-context";
import React, { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json" with { type: "json" };
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Page() {
  const {user} = useUserAuth();
  const [array, setArray] = useState(Object.values(itemsData));
  const [selectedItemname, setSelectedItemname] = useState("");
  
  if (user == null) {
    return (
      <main className="bg-green-700">
        <div className="flex -row justify-center">
          <p> Invalid Login Credentials, please return to login page</p>
          <Link href="\week-9">Login Page</Link>
        </div>
      </main>
    );
  } else {
    const handleAddItem = (item) => { 
      const newItem = { ...item, id: Math.random().toString(36).substr(2, 9) }; // Ensure unique ID
      setArray([...array, newItem]);
    };
  
    const handleSelectItem = (name) => {
      if (!name) return;
      name = name.split(',')[0];
      name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
      name = name.trim();
      setSelectedItemname(name);
  };
  
    return (
      <main className="bg-green-700">
        <div className = "flex" >
          <div className="flex-row justify-between">
            <h2 className="text-3xl font-bold m-2 border-">Shopping List</h2>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={array} onItemSelect={handleSelectItem}/>
          </div>
          <div>
            <h2 className="text-3xl font-bold m-2">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemname} />
          </div>
        </div>
        
        
      </main>
    );
  }
  
}