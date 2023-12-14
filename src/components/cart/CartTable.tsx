import { CartItem } from "@/types";

interface CartTableProps {
  purchase: CartItem[];
}

const CartTable: React.FC<CartTableProps> = ({ purchase }: CartTableProps) => {
  const fixNumber = (n: number) => {
    return n.toFixed(2);
  };

  const getTotal = () => {
    let totalPrice = 0;
    purchase.forEach(({ price }) => {
      totalPrice += price;
    });
    return fixNumber(totalPrice);
  };

  return (
    <table className="table max-w-xl">
      <thead>
        <tr className="bg-base-200">
          <th>Book Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {purchase.map(({ id, author, price, quantity, title }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{author}</td>
            <td>{quantity}</td>
            <td>{fixNumber(price)}</td>
          </tr>
        ))}
        {!purchase.length && (
          <tr>
            <td colSpan={4} className="text-center text-gray-400">
              No items
            </td>
          </tr>
        )}
        <tr className="bg-base-200 font-semibold">
          <td colSpan={3} className="text-center">
            Total
          </td>
          <td data-cy="cart-table-total-price">
            { getTotal() } $
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
