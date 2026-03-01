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

  <g stroke="var(--color-red)" stroke-linecap="round" stroke-linejoin="round">
    <!-- Upper leg -->
    <line x1="26" y1="16" x2="32" y2="44" stroke-width="7" />

    <!-- Lower leg / shin angled forward -->
    <line x1="32" y1="44" x2="44" y2="53" stroke-width="7" />

    <!-- Boot: side profile with heel, flat sole, rounded toe -->
    <path
      d="M44,53
         Q40,54 39,59
         Q38,64 41,66
         L60,67
         Q66,67 67,62
         Q67,57 63,54
         L44,53 Z"
      stroke-width="3.5"
      fill="none"
    />

    <!-- Boot lace line across the top -->
    <line x1="46" y1="53" x2="62" y2="54" stroke-width="2" />

    <!-- Soccer ball -->
    <circle cx="80" cy="54" r="13" stroke-width="3.5" />
    <polygon points="80,46 85,50 83,56 77,56 75,50" stroke-width="2.5" />
    <line x1="80" y1="46" x2="80" y2="41" stroke-width="2" />
    <line x1="85" y1="50" x2="90" y2="48" stroke-width="2" />
    <line x1="83" y1="56" x2="86" y2="61" stroke-width="2" />
    <line x1="77" y1="56" x2="74" y2="61" stroke-width="2" />
    <line x1="75" y1="50" x2="70" y2="48" stroke-width="2" />
  </g>
</svg>
