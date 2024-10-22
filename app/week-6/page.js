//import ItemList from "./item-list.js";


import ItemList from "./item-list.js";

export default function Page() {
    return (
      <main className = "bg-green-700">
        <h2 className ="text-3xl font-bold m-2 border- ">Shopping List</h2>
        <ItemList />
      </main>
    );
  }