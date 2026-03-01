<script>
  let { src, compact = false } = $props();
</script>

<div class="flex items-center h-[80px] md:h-[96px]">
  <enhanced:img
    alt="Brand"
    {src}
    class="object-contain {compact ? 'pr-3 h-[60px] md:h-[72px]' : 'pr-6 md:pl-12 h-[75px] md:h-[85px]'} w-auto"
  />
</div>
