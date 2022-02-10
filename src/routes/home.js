import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main-home">
      <section className="content-home">
        <h1 className="home-heading">
          So, you want to travel to<span className="space">Space</span>
        </h1>
        <p className="paragraph home-paragraph">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="explore-wrapper">
        <Link to="/destination" className="explore">
          Explore
        </Link>
      </div>
    </main>
  );
};

export default Home;
