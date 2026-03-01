<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { tick } from 'svelte';

  let inView = $state(false);

  const stats = [
    { value: '14', label: 'children when we started in 2015', color: 'text-white' },
    { value: '450+', label: 'players in six training centers today', color: 'text-white' },
    { value: '6', label: 'training centers', color: 'text-white' },
    { value: '3000+', label: 'students reached in 40 local schools', color: 'text-white' }
  ];

  let displayValues = $state(stats.map(() => '0'));

  function parseValue(v) {
    const match = v.match(/^(\d+)(\+?)$/);
    return match ? { num: parseInt(match[1]), suffix: match[2] } : { num: 0, suffix: '' };
  }

  function animateCount(index, target, suffix, duration = 1400) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      displayValues[index] = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function useIntersect(node, callback) {
    if (typeof IntersectionObserver === 'undefined') {
      callback(); // Fallback for environments without IntersectionObserver
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }

  function setInView() {
    if (inView) return;
    inView = true;
    stats.forEach((stat, i) => {
      const { num, suffix } = parseValue(stat.value);
      setTimeout(() => animateCount(i, num, suffix), i * 150);
    });
  }
</script>

<section
  class="bg-[var(--color-blue-dark)] py-12 md:py-16 relative overflow-hidden flex items-center"
  use:useIntersect={setInView}
>
  <div class="relative w-[90%] max-w-6xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {#each stats as stat, i}
        <div class="flex flex-col items-center text-center">
          <div class="h-[60px] sm:h-[72px] md:h-[80px] flex items-center justify-center">
            <span
              class="{stat.color} font-extrabold text-4xl sm:text-5xl md:text-6xl tabular-nums tracking-tight transition-opacity duration-500"
              style="opacity: {inView ? 1 : 0};"
            >
              {displayValues[i]}
            </span>
          </div>
          <p class="mt-2 text-[var(--color-text-muted)] text-[10px] sm:text-xs font-bold leading-snug max-w-[200px] uppercase tracking-widest">
            {stat.label}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
