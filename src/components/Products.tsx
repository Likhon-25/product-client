import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type Product = {
    _id?: string;
    id?: string | number;
    name: string;
    price: string | number;
    Image?: string;
    image?: string;
    description?: string;
};

const Products = async () => {
    const res = await fetch("http://localhost:5000/products");

    if (!res.ok) {
        throw new Error("Products could not be loaded.");
    }

    const products: Product[] = await res.json();

    return (
        <section className="mx-auto max-w-5xl py-12">
            <h2 className="mb-6 text-2xl font-bold">Products</h2>

            {products.length === 0 ? (
                <p className="text-muted-foreground">No products found.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => {
                        const productId = product._id ?? product.id ?? product.name;
                        const productImage = product.Image ?? product.image;

                        return (
                            <Card key={productId} className="h-full">
                                {productImage && (
                                    <img
                                        src={productImage}
                                        alt={product.name}
                                        className="aspect-video w-full object-cover"
                                    />
                                )}
                                <CardHeader>
                                    <CardTitle>{product.name}</CardTitle>
                                    {product.description && (
                                        <CardDescription>{product.description}</CardDescription>
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold">${product.price}</p>
                                </CardContent>
                                <CardFooter>
                                    <span className="text-sm text-muted-foreground">
                                        Product
                                    </span>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Products;