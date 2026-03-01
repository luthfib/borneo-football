<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import PaypalButton from './paypal-button.svelte';

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  // Teleports node to document.body so it escapes any stacking context (e.g. backdrop-filter on header)
  function portal(node) {
    document.body.appendChild(node);
    return {
      destroy() {
        if (node.parentNode === document.body) document.body.removeChild(node);
      }
    };
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Small delay to allow transition to finish before restoring scroll
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => { document.body.style.overflow = ''; };
  });

  onMount(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });
</script>

<div class="md:hidden">
  <button
    class="cursor-pointer p-2 text-white hover:bg-white/10"
    style="border-radius: var(--radius-button)"
    onclick={toggleMenu}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
  >
    <span class="navicon" class:open={isOpen}></span>
  </button>
</div>

{#if isOpen}
  <div use:portal class="relative z-[9999]">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-black/60 z-40"
      transition:fade={{ duration: 250 }}
      onclick={closeMenu}
      aria-hidden="true"
    ></div>

    <!-- Drawer panel -->
    <nav
      class="fixed top-0 right-0 h-full w-72 bg-[var(--color-blue-dark)] z-50 flex flex-col shadow-2xl"
      transition:fly={{ x: 288, duration: 300, easing: quintOut }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <!-- Header row -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-slate-700/60">
        <span class="text-[var(--color-text-muted)] font-semibold text-xs tracking-widest uppercase">Menu</span>
        <button
          class="text-[var(--color-text-muted)] hover:text-white p-1.5 hover:bg-white/10 rounded cursor-pointer transition-colors"
          onclick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Nav links -->
      <div class="flex-1 py-2 overflow-y-auto">
        <a href="/" onclick={closeMenu} class="flex items-center px-6 py-4 text-white/85 no-underline text-base font-medium hover:bg-white/10 hover:text-white transition-colors border-b border-slate-800">HOME</a>
        <a href="#About" onclick={closeMenu} class="flex items-center px-6 py-4 text-white/85 no-underline text-base font-medium hover:bg-white/10 hover:text-white transition-colors border-b border-slate-800">ABOUT US</a>
        <a href="#OurWork" onclick={closeMenu} class="flex items-center px-6 py-4 text-white/85 no-underline text-base font-medium hover:bg-white/10 hover:text-white transition-colors border-b border-slate-800">OUR WORK</a>
        <a href="#GetInvolved" onclick={closeMenu} class="flex items-center px-6 py-4 text-white/85 no-underline text-base font-medium hover:bg-white/10 hover:text-white transition-colors border-b border-slate-800">GET INVOLVED</a>
        <a href="#OurPartners" onclick={closeMenu} class="flex items-center px-6 py-4 text-white/85 no-underline text-base font-medium hover:bg-white/10 hover:text-white transition-colors">PARTNER</a>
      </div>

      <!-- Donate -->
      <div class="px-6 py-6 border-t border-slate-700/60">
        <PaypalButton class="w-full">DONATE</PaypalButton>
      </div>
    </nav>
  </div>
{/if}

<style>
  .navicon {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 22px;
  }
  .navicon::before,
  .navicon::after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .navicon::before { top: 6px; }
  .navicon::after { top: -6px; }
  .navicon.open { background: transparent; }
  .navicon.open::before { transform: rotate(-45deg); top: 0; }
  .navicon.open::after { transform: rotate(45deg); top: 0; }
</style>
