import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Header, Footer } from '../components/index.ts';

export default function Home() {
  const count = useSignal(3);
  return (
    <div className="bg-[#1E293B] w-full h-screen">
      <Header />
      <p>button</p>
      <Footer />
    </div>
  );
}
