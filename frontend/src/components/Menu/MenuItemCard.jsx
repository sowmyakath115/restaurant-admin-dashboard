export default function MenuItemCard({ item, onToggle }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h4>{item.name}</h4>
      <p>{item.category}</p>
      <p>₹{item.price}</p>
      <button onClick={() => onToggle(item._id)}>
        {item.isAvailable ? "Disable" : "Enable"}
      </button>
    </div>
  );
}
