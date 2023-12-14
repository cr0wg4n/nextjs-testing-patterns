'use client'
import { useCart } from "@/store/cart";
import CartTable from "@/components/cart/CartTable";

export default function Cart() {
  const { purchase } = useCart((state) => ({
    purchase: state.purchase()
  }))
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-8 my-40">
        <div className="text-xl text-center font-semibold">
          Purchase Sumary
        </div>
        <CartTable purchase={purchase}/>
      </div>
    </main>
  );
}
