<script>
  import Logo from "./logo.svelte";
  import PaypalButton from "./paypal-button.svelte";
  import BurgerMenu from "./burger-menu.svelte";
</script>

<header
  class="w-full py-3 md:py-4 relative md:absolute md:top-0 md:left-0 md:z-10 bg-[var(--color-blue-dark)]/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
>
  <div
    class="w-[90%] max-w-6xl mx-auto flex items-center justify-between relative"
  >
    <a href="/" class="shrink-0">
      <Logo src="/images/Logo.png" height="96px" compact />
    </a>
    <nav
      class="hidden md:flex items-center gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2"
    >
      <a
        href="/"
        class="whitespace-nowrap text-white/95 no-underline text-sm lg:text-base font-semibold hover:text-brand-gold transition-colors duration-150"
        >HOME</a
      >
      <a
        href="#About"
        class="whitespace-nowrap text-white/95 no-underline text-sm lg:text-base font-semibold hover:text-brand-gold transition-colors duration-150"
        >ABOUT US</a
      >
      <a
        href="#OurWork"
        class="whitespace-nowrap text-white/95 no-underline text-sm lg:text-base font-semibold hover:text-brand-gold transition-colors duration-150"
        >OUR WORK</a
      >
      <a
        href="#GetInvolved"
        class="whitespace-nowrap text-white/95 no-underline text-sm lg:text-base font-semibold hover:text-brand-gold transition-colors duration-150"
        >GET INVOLVED</a
      >
      <a
        href="#OurPartners"
        class="whitespace-nowrap text-white/95 no-underline text-sm lg:text-base font-semibold hover:text-brand-gold transition-colors duration-150"
        >PARTNER</a
      >
    </nav>
    <div class="flex items-center gap-3">
      <BurgerMenu />
      <div class="hidden md:block">
        <PaypalButton>DONATE</PaypalButton>
      </div>
    </div>
  </div>
</header>
