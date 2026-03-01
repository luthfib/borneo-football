<script>
  let { quote, attribution } = $props();
</script>

<section class="bg-[rgb(0,20,50)] py-16 md:py-24">
  <div class="w-[90%] max-w-3xl mx-auto text-center">
    <svg class="w-12 h-12 text-[rgba(223,0,18,1)] mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
    </svg>
    <blockquote class="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight">
      {quote}
    </blockquote>
    <p class="mt-6 text-[rgba(223,0,18,1)] font-semibold text-lg tracking-wide uppercase">
      — {attribution}
    </p>
  </div>
</section>
