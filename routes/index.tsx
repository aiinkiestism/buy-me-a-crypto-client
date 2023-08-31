// import { VANTA } from 'npm:vanta@0.5.24';
import { Header, Footer, Button } from '../components/index.ts';

// deno-lint-ignore require-await
export default async function Home() {
  // await VANTA.HALO({
  //   el: ".bg",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00
  // });

  return (
    <div className="w-full h-screen relative bg bg-gradient-to-r from-pink-400 to-purple-400">
      <Header />
      <p className="text-white font-semibold text-xl text-center mt-20 leading-8">
        buy me a crypto is a counterpart of buy me a coffee for crypto.<br />
        Go read <a href="/docs" className="hover:text-blue-400 hover:font-bold hover:text-xl">Docs</a> for further details.
      </p>
      <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 flex items-center">
        <img src="/bagle-nobg.png" alt="buy me a crypto button" class="w-10" />
        <p class="my-0 mx-0 ml-2">Buy Me a Crypto</p>
      </Button>
      <Footer />
    </div>
  );
}
