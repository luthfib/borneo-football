<script>
  import VideoWithPoster from './video-with-poster.svelte';
  import Button from './button.svelte';
  import { reveal } from '$lib/utils/reveal';

  const aboutParagraphs = [
    "Since 2015, the Borneo Football International Foundation (BFIF) has been actively working in Central Kalimantan, Indonesian Borneo, as a Sports for Development organization (S4D), achieving positive outcomes in the areas of Education, Health, Social Inclusion, Child Protection, and Empowerment.",
    "BFIF's mission is to improve the quality of life of Kalimantan's underprivileged children through sports. Using football as a tool for social change assists their physical, mental, and social development through three complementary programs – Football Practice, Education, and Health, promoting gender equality, empowering women, motivating young people to pursue formal education, and having better job opportunities. The BFIF provides a safe environment for children to play sports and it promotes tolerance in diversity for a peace-building community.",
    "The foundation created the Borneo Football Academy (BFIA) as the vehicle to implement its programs. BFIA's methods and activities show that through sports, vulnerable and marginalized children from different and often conflicting social/ethnic groups can develop important social, peace-building, and life skills. Their self-esteem increases, they learn to become team players, learn tolerance and mutual respect for the diversity of ethnic and religious backgrounds. Through sports and team activities, they acquire discipline, cooperative spirit, responsibility, and direction in their lives.",
    "Today the BFIA counts on a team of experienced professionals in the areas of football, health and education, dedicated to work in the implementation of BFIA's programs. Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today, the Academy has more than 450 players in six training centers including four all girls team and reaches more than 3000 students in 40 local schools through football trainings, health and education programs."
  ];

  let open = $state(false);

  function onKeydown(e) {
    if (e.key === 'Escape') open = false;
  }
</script>

<svelte:window onkeydown={onKeydown} />

<section class="bg-white pt-0 pb-16 md:pb-24">
  <div class="w-[90%] max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
      <div class="flex-1 min-w-0 flex flex-col justify-center order-2 lg:order-1">
        <p use:reveal={{ delay: '0.1s' }} class="text-[var(--color-blue-dark)] text-lg sm:text-xl leading-relaxed font-semibold">
          At BFIF, we build confident players, strong teamwork, and lifelong discipline through football, education and health programs—and a shared passion for the game.
        </p>
        <p use:reveal={{ delay: '0.2s' }} class="text-[var(--color-blue-dark)] text-base sm:text-lg leading-relaxed font-medium mt-5">
          {aboutParagraphs[0]}
        </p>
        <div use:reveal={{ delay: '0.3s' }} class="mt-6">
          <Button variant="white" onclick={() => (open = true)}>READ MORE</Button>
        </div>
      </div>
      <div use:reveal={{ delay: '0.4s' }} class="flex-1 min-w-0 lg:min-w-[420px] flex items-center justify-center order-1 lg:order-2">
        <div class="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
          <VideoWithPoster
            embedUrl="https://www.youtube.com/embed/g5FY-XQS9OU"
            posterImageUrl="/images/VideoCover.png"
            title="Borneo Football video"
            rounded={false}
          />
        </div>
      </div>
    </div>
  </div>
</section>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    role="dialog"
    aria-modal="true"
    aria-label="About BFIF"
  >
    <div
      class="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onclick={() => (open = false)}
    ></div>

    <div class="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col bg-[var(--color-blue-dark)] rounded-2xl shadow-2xl overflow-hidden">
      <div class="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h2 class="text-2xl font-bold text-white tracking-tight">About BFIF</h2>
        <button
          onclick={() => (open = false)}
          aria-label="Close"
          class="flex items-center justify-center w-9 h-9 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="overflow-y-auto px-8 py-6 space-y-5">
        <p class="text-white text-base sm:text-lg leading-relaxed font-semibold">
          At BFIF, we build confident players, strong teamwork, and lifelong discipline through football, education and health programs—and a shared passion for the game.
        </p>
        {#each aboutParagraphs as paragraph}
          <p class="text-[var(--color-text-muted)] text-base leading-relaxed">
            {paragraph}
          </p>
        {/each}
      </div>
    </div>
  </div>
{/if}
