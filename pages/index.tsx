import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Projects />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      {/* <News /> */}
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
