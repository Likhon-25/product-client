import AddProductForm from "@/components/AddProductForm";
import Products from "@/components/Products";
export const instant = false;

export default function Home() {
  return (
    <div>
      <AddProductForm />
      <Products />
    </div>
  );
}
