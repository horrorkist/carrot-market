import Link from "next/link";

interface FloatingButton {
  href: string;
  children: React.ReactNode;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed z-50 p-4 text-white bg-orange-400 rounded-full bottom-24 right-5">
        {children}
      </a>
    </Link>
  );
}
