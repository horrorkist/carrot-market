import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "@libs/client/utils";

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  hasTabBar,
  canGoBack,
  children,
}: LayoutProps) {
  const router = useRouter();
  const { pathname } = router;
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          "fixed top-0 z-50 flex items-center w-full max-w-lg py-2 text-lg font-medium text-gray-800 bg-white border-b",
          canGoBack ? "" : "justify-center"
        )}
      >
        {title ? <span>{title}</span> : null}
        {canGoBack ? (
          <button className="px-2" onClick={onClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
      </div>
      <div className="pt-16">{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 z-50 grid w-full max-w-lg grid-cols-5 py-3 text-gray-800 bg-white border-t">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/" ? "text-orange-400" : ""
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span className="text-sm font-semibold">홈</span>
            </a>
          </Link>
          <Link href="/community">
            <a
              className={cls(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/community" ? "text-orange-400" : ""
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">동네생활</span>
            </a>
          </Link>
          <Link href="/products/chats">
            <a
              className={cls(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/products/chats" ? "text-orange-400" : ""
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">채팅</span>
            </a>
          </Link>
          <Link href="/streams">
            <a
              className={cls(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/streams" ? "text-orange-400" : ""
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">라이브</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center justify-center space-y-1",
                pathname === "/profile" ? "text-orange-400" : ""
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">나의 당근</span>
            </a>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
