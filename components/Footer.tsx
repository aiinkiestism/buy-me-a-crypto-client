import { JSX } from "preact";

export function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <footer className="absolute bottom-6 w-full text-center">
      <a
        href="https://github.com/aiinkiestism"
        target="_blank"
        rel="noopener"
      >
        <p className="text-white hover:text-blue-400 hover:font-bold hover:text-emerald-100">© Hashmimic</p>
      </a>
    </footer>
  );
}
