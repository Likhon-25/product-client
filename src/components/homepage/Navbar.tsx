import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Product Store
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-indigo-600">
            Products
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
