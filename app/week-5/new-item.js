"use client";
import React, { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        else{
            setQuantity(20);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            setQuantity(1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, category, quantity};
        console.log(`Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity}`);
        alert(`Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity}`);
        setQuantity(1)
        setName("");
        setCategory("Produce");
    };


    return (
        <div class = "flex flex-row gap-4 m-4 p-2 bg-green-700">
            <form onSubmit={handleSubmit} className="flex flex-col m-2" >
                <div className=" p-2">
                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Name" className="w-full rounded-md p-3" />
                </div>
                <div class = "flex justify-evenly  m-2 " >
                    <div class = "flex flex-row gap-4 m-2 p-2 bg-green-600 rounded-md ">
                        <p className="text-l flex-1 p-3 bg-emerald-400 rounded-md">{quantity}</p>
                        <div class = "justify-between">
                            <button type = "button" onClick={increment} disabled={quantity == 20}  className = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100 ml-2 p-3 rounded-lg">+</button>
                            <button type = "button" onClick={decrement} disabled={quantity == 1} className = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100  ml-2 p-3 rounded-lg">-</button>
                        </div>
                    </div>
                    <select name="category" value={category}  onChange={(e) => setCategory(e.target.value)} className=" border-2 p-2 m-2 rounded-lg  ">
                        <option value disabled>Category</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Pantry">Pantry</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                        <option value="unidentifiable">REDACTED</option>
                    </select>
                </div>
                <button type="submit" className="gap-4 m-2 p-2 bg-green-600 rounded-md">Add Item</button>
            </form>
        </div>
    );
}