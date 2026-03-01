<script>
  import PaypalButton from './paypal-button.svelte';
  import { reveal } from '$lib/utils/reveal';
  let { heading = "Help change a child's life", description = 'Your support helps us provide football, education and health programs to children across Central Kalimantan.' } = $props();
</script>

<section class="bg-[var(--color-blue-dark)] text-white py-16 md:py-24">
  <div class="w-[90%] max-w-6xl mx-auto text-center">
    <h2 use:reveal={{ delay: '0.1s' }} class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{heading}</h2>
    <p use:reveal={{ delay: '0.2s' }} class="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">{description}</p>
    <div use:reveal={{ delay: '0.3s' }}>
      <PaypalButton>DONATE NOW</PaypalButton>
    </div>
  </div>
</section>
