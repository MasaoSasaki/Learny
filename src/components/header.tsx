import Link from "next/link";
import type { VFC } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const items: {
  href: string;
  label: string;
}[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workbook", label: "WorkBook" },
  // { href: "/workbook/create", label: "Create" },
  // { href: "/workbook/edit", label: "Edit" },
  { href: "/mypage", label: "MyPage" },
];

export const Header: VFC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="p-4">
      <h1>Laerny</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4">{label}</a>
            </Link>
          );
        })}
      </nav>
      {/* Pin to top right corner  */}
      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button
          className="js-change-theme focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          🌙
        </button>
      </div>
    </header>
  );
};
