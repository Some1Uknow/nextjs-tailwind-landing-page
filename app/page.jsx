import Premium from "./component/Premium";
import Testimonial from "./component/Testimonial";
import WhyChoose from "./component/WhyChoose";
import Hero from "./component/hero";
import Hero2 from "./component/hero2";
import WhyChooseUsTwo from "./component/WhyChooseUsTwo";
import FAQ from "./component/FAQ";
function page() {
  return (
    <div className="px-10 py-3">
      <Hero2 />
      <Hero />
      <Premium />
      <WhyChoose />
      <WhyChooseUsTwo />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default page;
