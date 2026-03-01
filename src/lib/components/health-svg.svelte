<script>
  let { size = 56, class: className = '' } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  fill="none"
  class={className}
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Circle Border (as seen in PNG) -->
  <circle cx="50" cy="50" r="45" stroke="var(--color-red)" stroke-width="6" />

  <!-- Health & Nutrition Icon Content -->
  <g stroke="var(--color-red)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <!-- Outlined Stick Figure -->
    <circle cx="50" cy="30" r="6" />
    <path d="M42 40 L50 45 L58 40 L65 30 L70 35 L58 52 L65 75 L58 75 L50 55 L42 75 L35 75 L42 52 L30 35 L35 30 L42 40 Z" fill="none" stroke-width="3" />

    <!-- Wheat/Stalk (Right) -->
    <path d="M75 35 L75 75" stroke-width="3" />
    <path d="M75 42 Q82 40 82 45 Q82 50 75 48" />
    <path d="M75 42 Q68 40 68 45 Q68 50 75 48" />
    <path d="M75 52 Q82 50 82 55 Q82 60 75 58" />
    <path d="M75 52 Q68 50 68 55 Q68 60 75 58" />
    <path d="M75 62 Q82 60 82 65 Q82 70 75 68" />
    <path d="M75 62 Q68 60 68 65 Q68 70 75 68" />

    <!-- Broccoli (Top Left) -->
    <path d="M22 42 C18 42 18 36 22 34 C22 30 28 30 30 34 C34 30 38 36 34 42 L22 42 Z" />
    <path d="M28 42 L28 46 L24 46 L24 42" />

    <!-- Apple/Tomato (Middle Left) -->
    <circle cx="28" cy="58" r="7" />
    <path d="M28 51 L28 48 Q32 48 32 51" />

    <!-- Citrus Wedge (Bottom Left) -->
    <path d="M20 68 Q20 78 30 78 L20 68 Z" />
    <path d="M22 72 L26 73" />
  </g>
</svg>
