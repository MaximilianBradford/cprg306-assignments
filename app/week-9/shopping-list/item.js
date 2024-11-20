import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div onClick={onSelect}>
      <h1 className="text-xl font-bold text-left">{name}</h1>
      <p className="text-sm text-left">Buy {quantity} in {category}</p>
    </div>
  );
}
