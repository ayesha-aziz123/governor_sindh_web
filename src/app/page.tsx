import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import ImagesCaurosel from "./components/ImagesCaurosel";
import Course from "./components/Course";
import AdvanceCourse from "./components/AdvanceCourse";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Hero2 />
      <ImagesCaurosel/>
      <Course />
      <AdvanceCourse/>
      <Footer />
    </>
  );
}
