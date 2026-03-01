<script>
  import Button from './button.svelte';
  import Line from './line.svelte';
  import { reveal } from '$lib/utils/reveal';
  import brochureImg from '$lib/assets/images/BrochureCover.jpg?enhanced';
</script>

<section class="bg-[var(--color-blue-dark)] py-16 md:py-20" id="LearnMore">
  <div class="w-[90%] max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-start gap-10 md:gap-16">
      <div use:reveal={{ delay: '0.3s', y: '30px' }} class="flex-shrink-0 w-fit order-2 md:order-1">
        <enhanced:img
          src={brochureImg}
          alt="BFIA brochure cover"
          class="w-48 md:w-56 rounded-lg shadow-2xl"
        />
      </div>
      <div class="flex-1 min-w-0 order-1 md:order-2">
        <Line primary />
        <h2 use:reveal={{ delay: '0.1s' }} class="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">
          There's more to explore
        </h2>
        <p use:reveal={{ delay: '0.2s' }} class="text-[var(--color-text-muted)] text-lg sm:text-xl leading-relaxed font-medium">
          Find out more about our programs and how you, your company, or organization can sponsor BFIA. Download our brochure to learn more.
        </p>
        <div use:reveal={{ delay: '0.4s' }} class="mt-8">
          <Button href="/pdfs/BFIBROCHUREWEB.pdf" download="BFIBrochure.pdf" target="_blank" variant="white">
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
