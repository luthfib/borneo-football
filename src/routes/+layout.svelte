<script>
  import '../app.css';
  const { children } = $props();
</script>

<svelte:head>
  <title>Borneo Football - Inspiring the Next Generation</title>
  <meta
    name="description"
    content="Borneo Football International Academy (BFIA) is a Sports for Development organization in Central Kalimantan, providing football, education, and health programs to over 450 underprivileged children since 2015."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://borneofootball.org/" />
  <link rel="preload" href="/images/Cover.jpg" as="image" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://borneofootball.org/" />
  <meta property="og:title" content="Borneo Football - Inspiring the Next Generation" />
  <meta property="og:description" content="Borneo Football International Academy (BFIA) is a Sports for Development organization in Central Kalimantan, providing football, education, and health programs to over 450 underprivileged children since 2015." />
  <meta property="og:image" content="https://borneofootball.org/images/Logo.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://borneofootball.org/" />
  <meta property="twitter:title" content="Borneo Football - Inspiring the Next Generation" />
  <meta property="twitter:description" content="Borneo Football International Academy (BFIA) is a Sports for Development organization in Central Kalimantan, providing football, education, and health programs to over 450 underprivileged children since 2015." />
  <meta property="twitter:image" content="https://borneofootball.org/images/Logo.png" />
</svelte:head>

{@render children()}
