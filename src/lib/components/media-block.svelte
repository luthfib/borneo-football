<script>
  /** Full-bleed image block with optional gradient overlay and centered content slot */
  let { imageUrl, gradient = '0deg, rgba(var(--color-blue-dark-rgb), 0.5), rgba(var(--color-blue-dark-rgb), 0.3)', height = '80vh', minHeight = '350px', children } = $props();
</script>

<div
  class="text-white relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style="height: {height}; min-height: {minHeight}; background-image: linear-gradient({gradient}), url('{imageUrl}');"
>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="text-center w-[45%] max-[1200px]:w-[70%] max-[767px]:w-[80%]">
      {@render children()}
    </div>
  </div>
</div>
