<script>
  const sponsors = [
    { href: 'https://www.susiladharma.org', src: '/images/SDIA.jpg', alt: 'SDIA' },
    { href: 'http://beginforgood.com', src: '/images/BeginForGood.jpg', alt: 'Begin For Good' },
    { href: 'http://australianvolunteers.com', src: '/images/AustralianVolunteers.png', alt: 'Australian Volunteers' },
    { href: 'https://en.unesco.org', src: '/images/UNESCO.jpg', alt: 'UNESCO' },
    { href: 'https://yumindonesia.org', src: '/images/YUM.png', alt: 'YUM' },
    { href: null, src: '/images/KUB.png', alt: 'KUB' },
    { href: 'https://dharmacare.org.au/', src: '/images/DharmaCare.jpg', alt: 'Dharma Care' },
  ];
</script>

<div
  class="bg-white overflow-hidden py-16 md:py-24"
  style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"
>
  <div class="sponsor-track">
    {#each [...sponsors, ...sponsors] as { href, src, alt }}
      {#if href}
        <a {href} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center flex-shrink-0 px-10">
          <img {src} {alt} class="h-[90px] w-auto object-contain grayscale-[20%] opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
        </a>
      {:else}
        <div class="flex items-center justify-center flex-shrink-0 px-10">
          <img {src} {alt} class="h-[90px] w-auto object-contain grayscale-[20%] opacity-85" />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .sponsor-track {
    display: flex;
    align-items: center;
    width: max-content;
    animation: sponsor-scroll 28s linear infinite;
  }
  .sponsor-track:hover {
    animation-play-state: paused;
  }
  @keyframes sponsor-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>
