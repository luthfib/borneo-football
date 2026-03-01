<script>
  let { src, height = '56px', mdHeight = '64px', width = 'auto', compact = false } = $props();
</script>

<!-- Wrap in a div with reserved height to prevent CLS -->
<div class="flex items-center" style="height: {height};">
  <enhanced:img
    alt="Brand"
    {src}
    class="object-contain {compact ? 'pr-3' : 'pr-6 md:pl-12'} hidden md:block"
    style="height: {mdHeight}; width: {width}; max-height: {compact ? '80px' : '175px'};"
  />
  <enhanced:img
    alt="Brand"
    {src}
    class="object-contain {compact ? 'pr-3' : 'pr-6 md:pl-12'} md:hidden"
    style="height: {height}; width: {width}; max-height: {compact ? '80px' : '175px'};"
  />
</div>
