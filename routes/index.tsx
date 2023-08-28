import { Header, Footer, Button } from '../components/index.ts';

export default function Home() {
  return (
    <div className="bg-[#1E293B] w-full h-screen relative">
      <Header />
      <p className="text-white font-semibold text-xl text-center mt-20 leading-8">
        buy me a crypto is a counterpart of buy me a coffee for crypto.<br />
        Go read <a href="/docs" className="hover:text-blue-400 hover:font-bold hover:text-xl">Docs</a> for further details.
      </p>
      <Button className="
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 text-white 
        bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none 
        focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105"
      >
        Buy Me a Crypto
      </Button>
      <Footer />
    </div>
  );
}
