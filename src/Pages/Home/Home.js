import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../Shared/Footer";
import Appointment from "../Appointment/Appointment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
