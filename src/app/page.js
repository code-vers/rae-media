import Banner from "@/component/Banner";
import Brands from "@/component/Brands";
import BrandTestimonials from "@/component/BrandTestimonials";
import Contact from "@/component/Contact";
import Creators from "@/component/Creators";
import CreatorTestimonials from "@/component/CreatorTestomonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <Creators />
      <BrandTestimonials />
      <CreatorTestimonials/>

      <Contact />
    </div>
  );
}
