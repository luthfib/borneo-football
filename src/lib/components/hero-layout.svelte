<script>
  import Header from './header.svelte';
  import PaypalButton from './paypal-button.svelte';
  import Button from './button.svelte';
  import { reveal } from '$lib/utils/reveal';
  import coverImg from '$lib/assets/images/Cover.jpg?enhanced';
</script>

<div class="flex flex-col relative">
  <Header />
  <!-- Shifted text even more up by increasing pb-24 to pb-32 -->
  <section class="min-h-[90vh] md:min-h-[85vh] flex items-end md:items-center relative overflow-hidden bg-[var(--color-blue-dark)]">
    <enhanced:img 
      src={coverImg} 
      alt="Borneo Football children" 
      class="absolute inset-0 w-full h-full object-cover" 
      fetchpriority="high"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-[rgba(var(--color-blue-dark-rgb),0.5)] to-[rgba(var(--color-blue-dark-rgb),0.4)]"></div>
    
    <div class="relative w-full max-w-6xl mx-auto px-6 md:px-10 pb-32 pt-32 md:py-24 text-left z-1">
      <h1 use:reveal={{ delay: '0.1s' }} class="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-3xl">
        THE POWER<br />OF FOOTBALL.
      </h1>
      <p use:reveal={{ delay: '0.3s' }} class="text-white/95 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl font-medium">
        Inspiring the next generation through football, education and health in Central Kalimantan.
      </p>
      <div use:reveal={{ delay: '0.5s' }} class="flex flex-wrap gap-4 mt-8">
        <PaypalButton>DONATE NOW</PaypalButton>
        <Button href="#OurWork" variant="outline">VIEW OUR WORK</Button>
      </div>
    </div>
  </section>
</div>
