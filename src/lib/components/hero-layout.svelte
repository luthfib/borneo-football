<script>
  import Header from "./header.svelte";
  import PaypalButton from "./paypal-button.svelte";
  import Button from "./button.svelte";
  import { reveal } from "$lib/utils/reveal";
</script>

<div class="flex flex-col relative">
  <Header />
  <section
    class="min-h-[70vh] md:min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
    style="background-image: linear-gradient(0deg, rgba(var(--color-blue-dark-rgb), 0.45), rgba(var(--color-blue-dark-rgb), 0.35)), url('/images/Cover.jpg');"
  >
    <div
      class="w-[90%] max-w-6xl mx-auto py-16 md:py-24 text-left"
    >
      <h1
        use:reveal={{ delay: "0.1s" }}
        class="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl"
      >
        THE POWER<br />OF FOOTBALL
      </h1>
      <p
        use:reveal={{ delay: "0.3s" }}
        class="text-white/95 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl font-medium"
      >
        Inspiring the next generation through football, education and health in
        Central Kalimantan.
      </p>
      <div use:reveal={{ delay: "0.5s" }} class="flex flex-wrap gap-4 mt-8">
        <PaypalButton>DONATE NOW</PaypalButton>
        <Button href="#OurWork" variant="outline">VIEW OUR WORK</Button>
      </div>
    </div>
  </section>
</div>
