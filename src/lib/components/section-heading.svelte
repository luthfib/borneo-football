<script>
  import Line from "./line.svelte";
  import Button from "./button.svelte";
  import { reveal } from "$lib/utils/reveal";
  let {
    navID = "",
    heading,
    tag,
    showContactButton = false,
    centered = false,
    dark = false,
    children,
    bottom,
  } = $props();
</script>

<div
  class="flex items-center justify-center {dark
    ? 'bg-[var(--color-blue-dark)]'
    : 'bg-white'}"
  id={navID || undefined}
>
  <div class="w-[90%] max-w-6xl pt-16 md:pt-24 {bottom ? 'pb-16 md:pb-24' : 'pb-8'} {centered ? 'text-center' : ''}">
    {#if tag}
      <span
        use:reveal={{ delay: "0.1s" }}
        class="inline-block px-4 py-1.5 rounded-full {dark ? 'bg-slate-700 text-[var(--color-text-muted)]' : 'bg-slate-100 text-[var(--color-blue-dark)]'} text-sm font-medium mb-4">
        {tag}
      </span>
    {/if}
    {#if centered}
      <div class="flex justify-center w-full">
        <Line />
      </div>
    {:else}
      <Line />
    {/if}
    <h2
      use:reveal={{ delay: "0.2s" }}
      class="text-[var(--color-red)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-3"
    >
      {heading}
    </h2>
    {#if children}
      <p
        use:reveal={{ delay: "0.3s" }}
        class="{dark
          ? 'text-[var(--color-text-muted)]'
          : 'text-[var(--color-blue-dark)]'} text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-4xl {centered
          ? 'mx-auto'
          : ''}"
      >
        {@render children()}
      </p>
    {/if}
    {#if showContactButton}
      <div use:reveal={{ delay: "0.4s" }} class="mt-6">
        <Button
          href="mailto:borneo.football@gmail.com?subject="
          variant="primary"
        >
          <svg
            class="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" stroke-width="2" />
            <path
              stroke-width="2"
              stroke-linecap="round"
              d="M2 12h20M12 3c-2.5 3.5-2.5 10.5 0 14M12 3c2.5 3.5 2.5 10.5 0 14"
            />
            <circle cx="17" cy="16.5" r="2" stroke-width="1.5" />
            <path stroke-width="1.5" stroke-linecap="round" d="M17 14v1.5" />
          </svg>
          CONTACT
        </Button>
      </div>
    {/if}

    {#if bottom}
      <div class="mt-12">
        {@render bottom()}
      </div>
    {/if}
  </div>
</div>
