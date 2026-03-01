<script>
  let { src, compact = false } = $props();
</script>

<div class="flex items-center h-[80px] md:h-[96px]">
  <enhanced:img
    alt="Brand"
    {src}
    class="object-contain {compact ? 'pr-3 h-[72px] md:h-[88px]' : 'pr-6 md:pl-12 h-[80px] md:h-[90px]'} w-auto"
  />
</div>
