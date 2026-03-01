<script>
  import Line from './line.svelte';
  let { foundationName, tagline } = $props();
</script>

<div class="block w-[500px] pt-[8vh] md:w-[90%] md:pt-12 md:mx-auto max-[840px]:pt-12 max-[840px]:w-[60%] max-[840px]:pl-5 max-[840px]:mx-0">
  <Line />
  <div class="text-white text-[60px] md:text-[50px]">{foundationName}</div>
  <div class="text-white text-[35px] max-[840px]:text-[25px]">{tagline}</div>
</div>
