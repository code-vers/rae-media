import Banner from "@/component/Banner";
import Brands from "@/component/Brands";
import BrandTestimonials from "@/component/BrandTestimonials";
import Creators from "@/component/Creators";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <Creators />
      <BrandTestimonials />
    </div>
  );
}
