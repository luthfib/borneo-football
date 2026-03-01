<script>
  import Button from './button.svelte';
  let { class: className = '', variant = 'primary', children } = $props();
</script>

<Button
  href="https://www.paypal.com/paypalme/borneofootball"
  target="_blank"
  rel="noopener noreferrer"
  {variant}
  class={className}
>
  {@render children()}
</Button>
