import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const Intro = dynamic(() => import("../components/intro/intro"));
const About = dynamic(() => import("../components/about/about"));
const Mission = dynamic(() => import("../components/mission/mission"));
const Form = dynamic(() => import("../components/forms/form"));
const ProductSwiper = dynamic(
  () => import("../components/productswiper/product_swiper")
);
const Products = dynamic(() => import("../components/products/products"));
const Companies = dynamic(() => import("../components/companies/companies"));
const News = dynamic(() => import("../components/news/news"));
const Contacts = dynamic(() => import("../components/contactus/contacts"));
export const metadata = {
  title: "Avantec",
  description: "Avantec",
};

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Mission />
      <Form />
      <ProductSwiper />
      <Products />
      <Companies />
      <News />
      <Contacts />
    </>
  );
}
