import Link from "next/link";

interface Props {
  links: Array<{ name: string; link?: string }>;
}

export default function BreadCrumb({ links }: Props) {
  return (
    <div className="my-4 bg-gray-100 rounded-lg px-4 w-full py-2 border">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.name} className="">
            {link.link ? (
              <Link href={link.link}>
                <span className="hover:text-red-500 hover:underline">
                  {link.name}
                </span>
                <span className="ml-3">&gt;</span>{" "}
              </Link>
            ) : (
              link.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
