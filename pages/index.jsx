import Navbar from "../components/Fragments/navbar.jsx";
import Card from "../components/Fragments/cardProduct.jsx";
import Search from "../components/Fragments/search.jsx";

export default function Home() {
  return (
    <div className="px-20 py-10">
      <nav>
        <Navbar />
      </nav>

      <section>
        <Search/>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          <Card />
        </div>
      </section>
    </div>
  );
}
