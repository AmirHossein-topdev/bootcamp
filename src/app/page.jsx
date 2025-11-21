import Accordions from "./components/Accordions";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Payment from "./components/Payment";
import Texts from "./components/Texts";

export default function Home() {
  return (
    <section className=" text-black">
      <Hero />
      <Texts />
      <Payment />
    </section>
  );
}
