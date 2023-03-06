import "./About.css";
import ownerImg from "../../assets/imgs/Mario and Adrian b.jpg";
function About() {
  return (
    <>
      <section className="about my-2 py-2">
        <div className="container grid">
          <div>
            <h2 className="lg">About Us</h2>
            <h3>Little Lemon</h3>
            <p className="my-1">
              Based in Chicago, Illinois, Little Lemon is a family owned
              Mediterranean restaurant, focused on traditional recipes served
              with a modern twist. The chefs draw inspiration from Italian,
              Greek, and Turkish culture and have a menu of 12-15 items that
              they rotate seasonally. The restaurant has a rustic and relaxed
              atmosphere with moderate prices, making it a popular place for a
              meal any time of the day. Little Lemon is owned by two Italian
              brothers, Mario and Adrian, who moved to the United States to
              pursue their shared dream of owning a restaurant. To craft the
              menu, Mario relies on family recipes and his experience as a chef
              in Italy. Adrian does all the marketing for the restaurant and led
              the effort to expand the menu beyond classic Italian to
              incorporate additional cuisines from the mediterranean region.
            </p>
          </div>
          <img src={ownerImg} alt="owners" />
        </div>
      </section>
    </>
  );
}

export default About;
