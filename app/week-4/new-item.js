"use client";
import React, { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div class = "flex flex-row gap-4 m-4 p-2 bg-green-700">
            <p className="text-l flex-1 p-3 bg-emerald-400 rounded-md">{quantity}</p>
            <div class = "justify-between">
                <button onClick={increment} disabled={quantity == 20} class = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100 ml-2 p-3 rounded-lg">+</button>
                <button onClick={decrement} disabled={quantity == 1} class = "flex-1 bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-100  ml-2 p-3 rounded-lg">-</button>
            </div>
            
        </div>
    );
}