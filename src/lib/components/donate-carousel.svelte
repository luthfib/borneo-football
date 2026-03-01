<script>
  import PaypalButton from "./paypal-button.svelte";
  import Line from "./line.svelte";

  let { cards } = $props();
</script>

<section class="relative overflow-hidden bg-white py-16 md:py-24">
  <div
    class="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px]"
  ></div>
  <div
    class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[rgba(0,20,50,0.06)] blur-[120px]"
  ></div>

  <div class="relative z-10 w-[90%] max-w-6xl mx-auto">
    <div class="text-center mb-14">
      <Line override="auto" />
      <h2
        class="text-brand-red text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4"
      >
        WAYS TO DONATE
      </h2>
    </div>

    <div
      class="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,20,50,0.2)] bg-white border border-slate-200"
    >
      <!-- 3 tiers -->
      <div class="grid grid-cols-1 md:grid-cols-3">
        {#each cards as card, i}
          <div
            class="relative px-8 py-10 {i < cards.length - 1
              ? 'border-b md:border-b-0 md:border-r border-slate-200'
              : ''}"
          >
            <!-- Step number -->
            <p
              class="text-brand-red font-bold text-xs tracking-[0.2em] uppercase mb-4"
            >
              0{i + 1}
            </p>
            <!-- Heading -->
            <h3
              class="text-brand-red font-bold text-xl tracking-tight uppercase mb-3"
            >
              {card.heading}
            </h3>
            <!-- Red accent line -->
            <div class="w-8 h-[3px] bg-(--color-red) mb-5 rounded-full"></div>
            <!-- Body -->
            <p class="text-(--color-blue-dark) text-sm leading-relaxed">
              {card.content}
            </p>
          </div>
        {/each}
      </div>

      <!-- Donate CTA -->
      <div
        class="flex flex-col items-center gap-4 border-t border-slate-200 px-8 py-7"
      >
        <PaypalButton>DONATE NOW</PaypalButton>
      </div>
    </div>
  </div>
</section>
