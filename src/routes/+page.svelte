<script>
  import HeroLayout from '$lib/components/hero-layout.svelte';
  import CallToAction from '$lib/components/call-to-action.svelte';
  import SectionHeading from '$lib/components/section-heading.svelte';
  import AboutSection from '$lib/components/about-section.svelte';
  import Stats from '$lib/components/stats.svelte';
  import CardHolder from '$lib/components/card-holder.svelte';
  import TrainingCenters from '$lib/components/training-centers.svelte';
  import ImageBackground from '$lib/components/image-background.svelte';
  import SponsorDiv from '$lib/components/sponsor-div.svelte';
  import DonateCarousel from '$lib/components/donate-carousel.svelte';
  import AnnualReport from '$lib/components/annual-report.svelte';
  import Testimonial from '$lib/components/testimonial.svelte';
  import Footer from '$lib/components/footer.svelte';

  const workCards = [
    {
      heading: 'FOOTBALL',
      src: '/images/Football.svg',
      content:
        "We hold weekly training sessions and players test their skills in official tournaments. We also organize regular football clinics and Summer camps where we match off against players from around Indonesia and overseas. Our 'Happy Feet' program supports players from low income families with shoes, uniforms, socks and jerseys."
    },
    {
      heading: 'HEALTH AND NUTRITION',
      src: '/images/Health.svg',
      content:
        'Central Kalimantan has one of the highest stunting rates in Indonesia, and we found many of our young players were underweight and below average height. Although stunting cannot be reversed, nonetheless through sports, nutritional supplements and health assessment and education, the BFIA has initiated a program to support the good health of our players.'
    },
    {
      heading: 'EDUCATION',
      src: '/images/Education.svg',
      content:
        'In Central Kalimantan, nearly 1 in 3 children aged 7-15 drop out of school mainly due to economic pressures. We support our players with educational materials and school fee subsidies. Sponsorship is also provided for English and computer classes, vocational courses and conservation activities working together with our partners.'
    }
  ];

  const donateCards = [
    {
      heading: 'SUPPORTER',
      content:
        'Every gift, no matter how large or small, can help our boys and girls reach their personal goals'
    },
    {
      heading: 'COACH',
      content:
        "A gift of USD 195 supports our Child Development Fund and one child's participation in all our programs. You can sponsor as many children as you like."
    },
    {
      heading: 'GOALKEEPER',
      content:
        "We welcome individuals and organizations willing to join us and support our main programs. If you are interested in making a major gift towards this goal please contact us for more information. We are pleased to offer official recognition to individuals, companies and NGO's."
    }
  ];
</script>

<main>
  <HeroLayout />
  <Stats />

  <SectionHeading navID="About" heading="ABOUT" />

  <AboutSection />
  <CallToAction />

  <SectionHeading navID="OurWork" heading="OUR WORK">
    {#snippet bottom()}
      <CardHolder cards={workCards} variant="content" transparent compact />
    {/snippet}
    The minimum wage for people in Central Kalimantan is well under $230 a month. Parents find it
    hard just to send their children to school - let alone provide them with extracurricular
    activities. Our players can take part in not only a wide range of football activities but also
    health and educational programs.
  </SectionHeading>

  <SectionHeading navID="TrainingCenters" heading="OUR TRAINING CENTERS" dark>
    We run programs across six training centers in Central Kalimantan, with our main academy in Palangkaraya.
  </SectionHeading>
  <TrainingCenters />

  <SectionHeading navID="GetInvolved" heading="GET INVOLVED" showContactButton>
    We are always looking for talented people from Indonesia and abroad to support, not only our
    football training but our education, health &amp; nutrition programs, social media, and
    fundraising goals. We also welcome local and international groups to our innovative summer camps
    and football clinics.
  </SectionHeading>

  <DonateCarousel cards={donateCards} />

  <Testimonial quote='"WHENEVER I PLAY FOOTBALL, ALL MY PROBLEMS JUST DISAPPEAR."' attribution="Wiwid" />

  <SectionHeading navID="OurPartners" heading="OUR PARTNERS" centered>
    Together we can start something bigger
  </SectionHeading>

  <SponsorDiv />
  <AnnualReport />
  <Footer />
</main>
