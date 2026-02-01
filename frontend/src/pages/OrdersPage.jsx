import useFetch from "../hooks/useFetch";
import { getOrders, updateOrderStatus } from "../services/api";

export default function OrdersPage() {
  const { data, loading, setData } = useFetch(getOrders);

  const changeStatus = async (id, status) => {
    await updateOrderStatus(id, status);
    setData(
      data.map((o) => (o._id === id ? { ...o, status } : o))
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Orders Dashboard</h2>
      {data.map((order) => (
        <div key={order._id}>
          <p>{order.orderNumber}</p>
          <select
            value={order.status}
            onChange={(e) => changeStatus(order._id, e.target.value)}
          >
            <option>Pending</option>
            <option>Preparing</option>
            <option>Ready</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
      ))}
    </>
  );
}
