<script>
  import SocialMedia from './social-media.svelte';
  import { reveal } from '$lib/utils/reveal';
</script>

<div class="bg-[var(--color-blue-dark)] text-white py-6">
  <div use:reveal={{ delay: '0.1s' }} class="flex items-center mx-auto w-[90%] max-w-6xl max-[840px]:flex-wrap">
    <img src="/images/Logo.png" alt="Borneo Football" class="h-[65px] md:h-[55px] w-auto pr-6 object-contain" />
    <p class="text-sm sm:text-base">The Power of Football <br /> Inspiring the Next Generation</p>
  </div>
  <div use:reveal={{ delay: '0.3s' }} class="mt-4 border-t border-white/20 pt-4 w-[90%] max-w-6xl mx-auto">
    <SocialMedia />
  </div>
</div>
