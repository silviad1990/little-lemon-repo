import Showcase from "./containers/Showcase/Showcase";
import Specials from "./containers/Specials/Specials";
import About from "./containers/About/About";

function Main() {
  return (
    <div className="main">
      <Showcase />
      <Specials />
      <About />
    </div>
  );
}
export default Main;
