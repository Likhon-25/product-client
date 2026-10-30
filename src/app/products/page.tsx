import ProductsCard from "@/components/ProductsCard";

export const instant = false;

type Product = {
    _id?: string;
    id?: string | number;
    name: string;
    price: string | number;
    Image?: string;
    image?: string;
};

export default async function ProductsPage() {
    const res = await fetch("http://localhost:5000/products", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Products could not be loaded.");
    }

    const products: Product[] = await res.json();

    return (
        <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div
                        key={product._id ?? product.id ?? product.name}
                        className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <ProductsCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
