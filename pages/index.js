import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
// import Global from './global.css'
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

class Index extends Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <div className={globalStyle}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <script src="https://www.youtube.com/iframe_api"></script>
        </Head>
        <Layout>
        </Layout>
        <DonateLayout />
        <SectionHeading navID="About" heading="ABOUT">Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today there are more than 150 players, including three allgirls team. The program quickly expanded when we realized these children - who come from low- income families - needed much more.</SectionHeading>
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
      </div>
    )
  }
}

export default Index