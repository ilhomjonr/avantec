import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Mission from "@/components/mission/mission";
import Form from "@/components/forms/form";
import Products from "@/components/products/products";
import News from "@/components/news/news";
import Companies from "@/components/companies/companies";
import ProductSwiper from "@/components/productswiper/product_swiper";
import Contacts from "../components/contactus/contacts";

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
