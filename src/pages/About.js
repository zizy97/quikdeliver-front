import * as React from "react";
import Aboutusdescription from "../components/about/Aboutus_description";
import Visioncontainer from "../containers/about/Visioncontainer";
import Footer from "../components/Footer";
import Aboutcontent from "../components/about/About_signupcontent";
import Valuecontainer from "../containers/about/Valuecontainer";
import Aboutmain from "../components/about/Aboutmain";

function About() {
  return (
    <div>
      <Aboutmain />
      <Aboutusdescription />
      <Visioncontainer />
      <Valuecontainer />
      <Aboutcontent />
      <Footer />
    </div>
  );
}
export default About;
