<script>
  let { primary = false, gold = false, override = '0px' } = $props();
</script>

<hr
  class="mt-5 mb-5 border-0 border-t-[3px] w-[60px] {primary ? 'border-white' : gold ? 'border-[var(--color-gold)]' : 'border-[var(--color-red)]'} {override === 'auto' ? 'mx-auto' : ''}"
  style="{override !== 'auto' ? `margin-left: ${override}` : ''}"
/>
