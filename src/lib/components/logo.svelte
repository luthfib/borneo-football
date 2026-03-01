<script>
  let { src, height, compact = false } = $props();
</script>

<img
  alt="Brand"
  {src}
  {height}
  class="object-contain {compact ? 'pr-3 w-auto' : 'pr-6 w-[150px] md:pl-12'}"
  style="height: {height}; max-height: {compact ? '80px' : '175px'};"
/>
