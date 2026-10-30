import Link from "next/link";
import EditProduct from "./EditProducts";

type Product = {
    _id?: string;
    id?: string | number;
    name: string;
    price: string | number;
    Image?: string;
    image?: string;
};

type ProductsCardProps = {
    product: Product;
};

const ProductsCard = ({ product }: ProductsCardProps) => {
    return (
        <>
            <img
                src={product.Image ?? product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-auto pt-4 text-xl font-bold text-indigo-600">${product.price}</p>
                <div className="flex gap-4 justify-center ">

                <Link className="border border-2 rounded-lg p-1" href={`/products/${product._id ?? product.id}`}>
                    View Details
                </Link>

                <EditProduct />
                </div>
            </div>
        </>
    );
};

export default ProductsCard;
