import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { getMenu, searchMenu, toggleAvailability } from "../services/api";
import MenuList from "../components/Menu/MenuList";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const { data, loading, setData } = useFetch(
    debouncedSearch ? searchMenu : getMenu,
    debouncedSearch ? { q: debouncedSearch } : {}
  );

  const handleToggle = async (id) => {
    const prev = [...data];
    setData(
      data.map((item) =>
        item._id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    );
    try {
      await toggleAvailability(id);
    } catch {
      setData(prev);
      alert("Update failed");
    }
  };

  return (
    <>
      <h2>Menu Management</h2>
      <input
        placeholder="Search menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MenuList items={data} loading={loading} onToggle={handleToggle} />
    </>
  );
}
