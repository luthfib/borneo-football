<script>
  import Logo from './logo.svelte';
  import PaypalButton from './paypal-button.svelte';
  import BurgerMenu from './burger-menu.svelte';
  import logoImg from '$lib/assets/images/Logo.png?enhanced';
</script>

<header class="w-full h-[80px] md:h-[96px] flex items-center absolute top-0 left-0 z-[100] bg-transparent">
  <div class="max-w-6xl mx-auto w-full flex items-center justify-between px-4 md:px-10 relative">
    <a href="/" class="flex-shrink-0 flex items-center">
      <Logo src={logoImg} compact />
    </a>
    <nav class="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2">
      <a href="/" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/10">HOME</a>
      <a href="#About" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/10">ABOUT US</a>
      <a href="#OurWork" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/10">OUR WORK</a>
      <a href="#GetInvolved" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/10">GET INVOLVED</a>
      <a href="#OurPartners" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/10">PARTNER</a>
    </nav>
    <div class="flex items-center gap-3">
      <BurgerMenu />
      <div class="hidden md:block">
        <PaypalButton>DONATE</PaypalButton>
      </div>
    </div>
  </div>
</header>
