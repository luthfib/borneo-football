<script>
  import Line from "./line.svelte";
  import { reveal } from "$lib/utils/reveal";
  /** @type {{ variant?: 'content' | 'action', heading: string, content: string, src?: string, action?: any, icon?: any, compact?: boolean }} */
  let {
    variant = "content",
    heading,
    content,
    src = "",
    action,
    icon,
    compact = false,
  } = $props();
</script>

<div
  use:reveal={{ y: "30px" }}
  class="w-full border border-neutral-200 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md bg-white"
  style="border-radius: var(--radius-button)"
>
  {#if variant === "action"}
    <div class="bg-[var(--color-blue-dark)] {compact ? 'p-4' : 'p-6'}">
      <h2
        class="text-[var(--color-red)] font-medium {compact
          ? 'text-lg'
          : 'text-xl sm:text-2xl'} text-center"
      >
        {heading}
      </h2>
    </div>
    <div class="p-8 flex-1 flex flex-col">
      <p
        class="text-[var(--color-blue-dark)] text-base sm:text-lg leading-relaxed font-normal flex-1"
      >
        {content}
      </p>
    </div>
    {#if action}
      <div class="p-8 pt-0 flex justify-center">
        {@render action()}
      </div>
    {/if}
  {:else}
    <div
      class="{compact
        ? 'p-6 md:p-7'
        : 'p-8 md:p-10'} flex-1 flex flex-col"
    >
      <div
        class="text-[var(--color-red)] font-bold {compact
          ? 'text-lg md:text-xl'
          : 'text-xl sm:text-2xl'} tracking-tight mb-2 uppercase"
      >
        {heading}
      </div>
      <Line override="0px" />

      {#if icon}
        <div
          class="flex items-center justify-center {compact
            ? 'my-5 h-[100px]'
            : 'my-8 h-[140px]'}"
        >
          {@render icon()}
        </div>
      {:else if src}
        <div
          class="flex items-center justify-center {compact
            ? 'my-5 h-[100px]'
            : 'my-8 h-[140px]'}"
        >
          <img {src} alt={heading} class="h-full object-contain" />
        </div>
      {/if}

      <div
        class="{compact
          ? 'text-sm sm:text-base'
          : 'text-base sm:text-lg'} leading-relaxed font-normal text-[var(--color-blue-dark)] flex-1"
      >
        {content}
      </div>
    </div>
  {/if}
</div>
