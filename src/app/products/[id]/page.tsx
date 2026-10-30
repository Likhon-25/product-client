export const instant = false;

const ProductDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/products/${id}`, {
        cache: "no-store",
    });

    const product = await res.json();

    return (
        <div>
            <img src={product.Image ?? product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetails;