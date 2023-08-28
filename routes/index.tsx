import { Header, Footer, Button } from '../components/index.ts';

export default function Home() {
  return (
    <div className="bg-[#1E293B] w-full h-screen relative">
      <Header />
      <p className="text-white font-semibold text-xl text-center mt-20 leading-8">
        buy me a crypto is a counterpart of buy me a coffee for crypto.<br />
        Go read <a href="/docs" className="hover:text-blue-400 hover:font-bold hover:text-xl">Docs</a> for further details.
      </p>
      <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4">
        Buy Me a Crypto
      </Button>
      <Footer />
    </div>
  );
}
