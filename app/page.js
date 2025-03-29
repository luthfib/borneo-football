"use client";

import { useEffect } from "react";
import CardHolder from "../components/CardHolder";
import CardHolderAction from "../components/CardHolderAction";
import Container from "../components/AnnualReport";
import DonateLayout from "../components/DonateLayout";
import Fonts from "../common/Font";
import Footer from "../components/Footer";
import ImageBackground from "../components/ImageBackground";
import Layout from "../components/Layout.js";
import ReactGA from "react-ga";
import SectionHeading from "../components/SectionHeading";
import SocialMedia from "../components/SocialMedia";
import SponsorDiv from "../components/SponsorDiv";
import VideoSection from "../components/VideoSection";

export default function Home() {
  useEffect(() => {
    Fonts();
    ReactGA.initialize("UA-117085773-1");
    ReactGA.pageview(document.location.pathname);
  }, []);

  return (
    <div>
      <Layout></Layout>
      <DonateLayout />
      <SectionHeading navID="About" heading="ABOUT">
        Since 2015, the Borneo Football International Foundation (BFIF) has been
        actively working in Central Kalimantan , Indonesian Borneo, as a Sports
        for Development organization (S4D), achieving positive outcomes in the
        areas of Education, Health, Social Inclusion, Child Protection, and
        Empowerment.
        <br /> <br />
        BFIF's mission is to improve the quality of life of Kalimantan's
        underprivileged children through sports. Using football as a tool for
        social change assists their physical, mental, and social development
        through three complementary programs – Football Practice, Education, and
        Health, promoting gender equality, empowering women, motivating young
        people to pursue formal education, and having better job opportunities.
        The BFIF provides a safe environment for children to play sports and it
        promotes tolerance in diversity for a peace-building community.
        <br /> <br />
        The foundation created the Borneo Football Academy (BFIA) as the vehicle
        to implement its programs. BFIA's methods and activities show that
        through sports, vulnerable and marginalized children from different and
        often conflicting social/ethnic groups can develop important social,
        peace-building, and life skills. Their self-esteem increases, they learn
        to become team players, learn tolerance and mutual respect for the
        diversity of ethnic and religious backgrounds. Through sports and team
        activities, they acquire discipline, cooperative spirit, responsibility,
        and direction in their lives.
        <br /> <br />
        Today the BFIA counts on a team of experienced professionals in the
        areas of football, health and education, dedicated to work in the
        implementation of BFIA's programs. Borneo Football International Academy
        kicked off in 2015 with just 14 children - word quickly spread and
        today, the Academy has more than 450 players in six training centers
        including four all girls team and reaches more than 3000 students in 40
        local schools through football trainings, health and education programs.
      </SectionHeading>
      <VideoSection />
      <SectionHeading navID="OurWork" heading="OUR WORK">
        The minimum wage for people in Central Kalimantan is well under $230 a
        month. Parents find it hard just to send their children to school - let
        alone provide them with extracurricular activities. Our players can take
        part in not only a wide range of football activities but also health and
        educational programs.
      </SectionHeading>
      <CardHolder />
      <SectionHeading
        navID="GetInvolved"
        heading="GET INVOLVED"
        src="/static/images/Contact.png"
      >
        We are always looking for talented people from Indonesia and abroad to
        support, not only our football training but our education, health &
        nutrition programs, social media, and fundraising goals. We also welcome
        local and international groups to our innovative summer camps and
        football clinics.
      </SectionHeading>
      <ImageBackground />
      <SectionHeading heading="WAYS TO DONATE">
        There are many ways you can help us build for the future. So be a part
        of Borneo Football and help change a child's life.
      </SectionHeading>
      <CardHolderAction />
      <SectionHeading navID="OurPartners" heading="OUR PARTNERS">
        Together we can start something bigger
      </SectionHeading>
      <SponsorDiv />
      <Container />
      <Footer></Footer>
      <SocialMedia></SocialMedia>
    </div>
  );
}
