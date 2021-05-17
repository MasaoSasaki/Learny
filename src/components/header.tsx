import Link from "next/link";
import type { VFC } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const items: {
  href: string;
  label: string;
}[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "使い方" },
  { href: "/workbooks", label: "問題集を編集する" },
  { href: "/mypage", label: "設定変更" },
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
              <a className="inline-block p-2">{label}</a>
            </Link>
          );
        })}
      </nav>
      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button
          className="js-change-theme focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <MoonIcon className="w-10 h-10 text-yellow-200"></MoonIcon>
          <SunIcon className="w-10 h-10 text-yellow-500"></SunIcon>
        </button>
      </div>
    </header>
  );
};
