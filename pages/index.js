import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import DonateLayout from '../components/DonateLayout'
import { Component } from 'react';
import Fonts from './Font'
import SectionHeading from '../components/SectionHeading'
import VideoSection from '../components/VideoSection'
import CardHolder from '../components/CardHolder'
import ImageBackground from '../components/ImageBackground'
import CardHolderAction from '../components/CardHolderAction'
import globalStyle from './global.css';
import SponsorDiv from '../components/SponsorDiv'
import Container from '../components/AnnualReport'
import Footer from '../components/Footer'
import ReactGA from 'react-ga';
import SocialMedia from '../components/SocialMedia'




class Index extends Component {
  componentDidMount() {
    Fonts()
    ReactGA.initialize('UA-117085773-1')
    ReactGA.pageview(document.location.pathname)
  }

  render() {
    return (
      <div className={globalStyle}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today there are more than 150 players, including three allgirls team. The program quickly expanded when we realized these children - who come from low- income families - needed much more."></meta>
          <script src="https://www.youtube.com/iframe_api"></script>
          <title>Borneo Football</title>
        </Head>
        <Layout>
        </Layout>
        <DonateLayout />
        <SectionHeading navID="About" heading="ABOUT">Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today, 4 years later, the Academy has 340 players including three all girls team and reaches more than 1000 students in local schools through football training, health and education programs</SectionHeading>
        <VideoSection />
        <SectionHeading navID="OurWork" heading="OUR WORK">The minimum wage for people in Central Kalimantan is well under $200 a month. Parents find it hard just to send their children to school - let alone provide them with extracurricular activities. Our players can take part in not only a wide range of football activities but also health and educational programs.</SectionHeading>
        <CardHolder />
        <SectionHeading navID="GetInvolved" heading="GET INVOLVED" src='/static/images/Contact.png'>We are always looking for talented people from Indonesia and abroad to support, not only our football training but our education, health & nutrition programs, social media, and fundraising goals. We also welcome local and international groups to our innovative summer camps and football clinics.</SectionHeading>
        <ImageBackground/>
        <SectionHeading heading="WAYS TO DONATE">There are many ways you can help us build for the future. So be a part of Borneo Football and help change a child's life.</SectionHeading>
        <CardHolderAction />
        <SectionHeading navID="OurPartners" heading="OUR PARTNERS">Together we can start something bigger</SectionHeading>
        <SponsorDiv />
        <Container />
        <Footer></Footer>
        <SocialMedia></SocialMedia>

      </div>
    )
  }
}

export default Index