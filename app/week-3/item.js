
export default function Item (props) {
  return (
    <div>
      <h1 className="text-xl font-bold text-left">{props.name}</h1>
      <p className="text-sm text-left">Buy {props.quantity} in {props.category}</p>
    </div>
      
  );
}


