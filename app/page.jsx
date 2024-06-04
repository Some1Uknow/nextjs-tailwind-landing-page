import Premium from "./component/Premium";
import Testimonial from "./component/Testimonial";
import WhyChoose from "./component/WhyChoose";
import Hero from "./component/hero";
import Hero2 from "./component/Hero2";
import WhyChooseUsTwo from "./component/WhyChooseUsTwo";
import Footer from "./component/Footer";
import FAQ from "./component/FAQ";

function page() {
  return (
    <div className="px-10 py-3 font-Montserrat">
      <Hero2 />
      <Hero />
      <Premium />
      <WhyChoose />
      <WhyChooseUsTwo />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default page;
