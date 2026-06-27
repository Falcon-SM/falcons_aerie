import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 border-t flex justify-between items-center">
      <h1 className="font-shippori text-xl font-bold">
        <Link href="/">Falcon&apos;s Aerie</Link>
      </h1>
      <nav className="space-x-4 font-sans">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </footer>
  );
}