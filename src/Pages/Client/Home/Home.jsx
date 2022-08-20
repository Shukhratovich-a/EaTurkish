import Hero from "../../../Components/Hero/Hero";
import Popular from "../../../Components/Popular/Popular";
import MainProducts from "../../../Components/MainProducts/MainProducts";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Popular />
      <MainProducts />
    </main>
  );
};

export default Home;
