import MenuItemCard from "./MenuItemCard";

export default function MenuList({ items, loading, onToggle }) {
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {items.map((item) => (
        <MenuItemCard key={item._id} item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}
