<script>
  /** Video embed with poster image and play button; toggles to iframe on click */
  let { embedUrl, posterImageUrl, title = 'Video', rounded = true, class: className = '' } = $props();
  let displayVideo = $state(false);

  // Helper to ensure autoplay when user clicks play
  function getEmbedUrl(url) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1`;
  }
</script>

<div
  class="relative w-full overflow-hidden bg-neutral-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-neutral-800 {rounded ? 'rounded-2xl border border-neutral-200/80' : ''} {className}"
>
  <div class="relative aspect-video w-full overflow-hidden">
    {#if !displayVideo}
      <enhanced:img src={posterImageUrl} alt={title} class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-[rgba(var(--color-blue-dark-rgb),0.4)] to-[rgba(var(--color-blue-dark-rgb),0.25)]"></div>
    {/if}

    {#if displayVideo}
      <iframe
        src={getEmbedUrl(embedUrl)}
        class="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title={title}
        loading="lazy"
      ></iframe>
    {:else}
      <button
        onclick={() => (displayVideo = true)}
        aria-label="Play video"
        class="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:ring-offset-2 {rounded ? 'rounded-2xl' : ''}"
      >
        <span class="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-lg transition transform hover:scale-110 hover:bg-white">
          <svg class="ml-1 h-8 w-8 text-[var(--color-red)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    {/if}
  </div>
</div>
