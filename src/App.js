import "./App.css";
import Footer from "./Footer";

import Navbar from "./Navbar";
import About from "./About";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import { StyleSheet, View } from "react-native";

function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Navbar />
        </View>
        <View style={styles.hero}>
          <HeroSection />
        </View>
        <View style={styles.highlights}>
          <Highlights />
        </View>
        <View style={styles.testimonials}>
          <Testimonials />
        </View>
        <View style={styles.about}>
          <About />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  navbar: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    position: "relative",
    justifyContent: "space-between",
  },
  hero: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#495E57",
    flexWrap: "wrap",
  },
  highlights: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  testimonials: {
    flex: 1,
    backgroundColor: "white",
  },
  about: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    position: "relative",
    justifyContent: "space-between",
  },
  footer: {
    // display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",

    // alignContent: "flex-start",
  },
});

export default App;
