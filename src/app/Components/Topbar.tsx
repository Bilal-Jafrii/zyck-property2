import Link from "next/link";

export default function TopBar() {
  return (
    <footer className="bg-green-500 h-8 flex flex-col md:flex-row w-full items-center justify-between gap-4 p-4 md:p-6">
      <Link href="/" className="" prefetch={true}>
        <span>
          <img src={"/logo.2.png"} alt="Logo" width={90} height={5} />
        </span>
      </Link>
      <div className="flex w-full max-w-xs items-center justify-end gap-4">
        <Link
          href="#"
          className="h-10 w-10 items-center rounded-full border border-gray-200 dark:border-gray-200 shadow-sm hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={true}
        >
          <span className="sr-only">Twitter</span>
          <TwitterIcon />
        </Link>
        <Link
          href="#"
          className="h-10 w-10 items-center rounded-full border border-gray-200 dark:border-gray-200 shadow-sm hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={true}
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon />
        </Link>
        <Link
          href="#"
          className="h-10 w-10 items-center rounded-full border border-gray-200 dark:border-gray-200 shadow-sm hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={true}
        >
          <span className="sr-only">YouTube</span>
          <PlayIcon />
        </Link>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg
      className="w-5 h-5 fill-current text-gray-200 dark:text-gray-50"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="w-5 h-5 fill-current text-gray-200 dark:text-gray-50"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="w-5 h-5 fill-current text-gray-200 dark:text-gray-50"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
