<script>
  import Card from "./card.svelte";
  import PaypalButton from "./paypal-button.svelte";
  /** @type {{ cards: { heading: string, content: string, src?: string, icon?: any }[], variant?: string, transparent?: boolean, compact?: boolean }} */
  let {
    cards,
    variant = "content",
    transparent = false,
    compact = false,
  } = $props();
</script>

<div class={transparent ? "" : "w-full py-4"}>
  <div
    class="{transparent
      ? ''
      : 'w-[90%] max-w-6xl mx-auto'} grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {#each cards as card}
      {#if variant === "action"}
        <Card
          variant="action"
          heading={card.heading}
          content={card.content}
          {compact}
        >
          {#snippet action()}
            <PaypalButton class="w-full">DONATE</PaypalButton>
          {/snippet}
        </Card>
      {:else}
        <Card
          variant="content"
          heading={card.heading}
          content={card.content}
          src={card.src ?? ""}
          icon={card.icon}
          {compact}
        />
      {/if}
    {/each}
  </div>
</div>
