import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-blue-500 font-bold text-2xl border px-4 py-1"
    >
      <span className="text-pink-500">Kid</span>
      Store
    </Link>
  );
}
