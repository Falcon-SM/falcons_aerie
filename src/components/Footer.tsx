import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <h1 className="font-shippori text-xl font-bold">
        <Link href="/">Falcon's Aerie</Link>
      </h1>
      <nav className="space-x-4 font-sans">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}