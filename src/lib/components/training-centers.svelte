<script>
  import { reveal } from "$lib/utils/reveal";
  import mapImg from '$lib/assets/images/training-centers-map.png?enhanced';

  const centers = [
    { name: "Tumbang Kaman", primary: false },
    { name: "Dahian Tunggal", primary: false },
    { name: "Kasongan", primary: false },
    { name: "Rungan Sari", primary: false },
    { name: "Habaring Hurung", primary: false },
    { name: "Palangkaraya", primary: true },
  ];
</script>

<section class="bg-[var(--color-blue-dark)] py-16 md:py-24">
  <div class="w-[90%] max-w-6xl mx-auto">
    <p
      use:reveal={{ delay: "0.1s" }}
      class="text-[var(--color-text-muted)] text-lg font-medium leading-relaxed mb-8"
    >
      BFIA runs programs across six training centers in Central Kalimantan. Our
      main academy is in Palangkaraya, with additional centers bringing
      football, education and health to communities across the region.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <ul class="space-y-4">
        {#each centers as center, i}
          <li
            use:reveal={{ delay: `${0.2 + i * 0.1}s`, y: "10px" }}
            class="flex items-center gap-3"
          >
            <span
              class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center {center.primary
                ? 'bg-amber-400 text-slate-900'
                : 'bg-[var(--color-red)] text-white'}"
              aria-hidden="true"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </span>
            <span class="text-white font-medium text-lg">{center.name}</span>
            {#if center.primary}
              <span class="text-sm text-white/50 font-normal"
                >(Main academy)</span
              >
            {/if}
          </li>
        {/each}
      </ul>
      <div use:reveal={{ delay: "0.4s" }}>
        <div class="w-full rounded-2xl overflow-hidden">
          <enhanced:img
            src={mapImg}
            alt="Map of Borneo showing BFIA training center locations: Tumbang Kaman, Dahian Tunggal, Kasongan, Rungan Sari, Habaring Hurung, Palangkaraya"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>
