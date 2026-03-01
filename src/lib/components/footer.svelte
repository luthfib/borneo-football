<script>
  import SocialMedia from './social-media.svelte';
  import { reveal } from '$lib/utils/reveal';
  import logoImg from '$lib/assets/images/Logo.png?enhanced';
  import Logo from './logo.svelte';
</script>

<div class="bg-[var(--color-blue-dark)] text-white py-6">
  <div use:reveal={{ delay: '0.1s' }} class="flex items-center mx-auto w-[90%] max-[840px]:flex-wrap">
    <Logo src={logoImg} height="55px" mdHeight="55px" compact />
    <p class="text-sm sm:text-base">The Power of Football <br /> Inspiring the Next Generation</p>
  </div>
  <div use:reveal={{ delay: '0.3s' }} class="mt-4 border-t border-white/20 pt-4 w-[90%] mx-auto">
    <SocialMedia />
  </div>
</div>
