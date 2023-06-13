import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Mission from "@/components/mission/mission";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Mission />
    </>
  );
}
