import "./About.css";
import ownerImg from "/Users/silviadima/Desktop/Projects/little-lemon/src/imgs/Mario and Adrian b.jpg";
function About() {
  return (
    <>
      <section className="about my-2 py-2">
        <div className="container grid">
          <div>
            <h2 className="md">Little Lemon</h2>
            <h3>London</h3>
            <p className="my-1">
              Magna etiam tempor orci eu. Neque convallis a cras semper auctor
              neque vitae tempus quam. Adipiscing bibendum est ultricies integer
              quis. Nisi quis eleifend quam adipiscing vitae proin sagittis.
              Elementum sagittis vitae et leo duis ut.
            </p>
          </div>
          <img src={ownerImg} alt="owners" />
        </div>
      </section>
    </>
  );
}

export default About;
