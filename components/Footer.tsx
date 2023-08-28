import { JSX } from "preact";

export function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <footer className="absolute bottom-6 w-full text-center">
      <a
        href="https://github.com/aiinkiestism"
        target="_blank"
        rel="noopener"
      >
        <p className="text-white">© Hashmimic</p>
      </a>
    </footer>
  );
}
