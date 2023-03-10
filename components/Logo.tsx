import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-blue-500 font-bold text-2xl border px-4 py-1 hover:bg-gray-900"
    >
      <span className="text-pink-500">Best</span>
      Store
    </Link>
  );
}
