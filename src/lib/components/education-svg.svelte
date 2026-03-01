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
  <!-- Circle Border -->
  <circle cx="50" cy="50" r="45" stroke="var(--color-red)" stroke-width="6" />

  <!-- Education Icon Content -->
  <g stroke="var(--color-red)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- Book -->
    <path d="M30 25 L65 25 L70 30 L70 75 L30 75 L25 70 L25 30 L30 25 Z" />
    <path d="M25 65 L70 65" />
    <path d="M35 35 L60 35" />
    <path d="M35 45 L55 45" />
    
    <!-- Bookmark -->
    <path d="M55 65 L55 78 L62 74 L69 78 L69 65" />
    
    <!-- Apple (In front) -->
    <path d="M65 45 Q55 45 55 55 Q55 65 65 65 Q75 65 75 55 Q75 45 65 45" fill="white" />
    <path d="M65 45 Q55 45 55 55 Q55 65 65 65 Q75 65 75 55 Q75 45 65 45" />
    <path d="M65 45 C65 40 70 42 70 44" />
  </g>
</svg>
