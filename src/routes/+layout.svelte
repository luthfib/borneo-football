<script>
  import '../app.css';
  const { children } = $props();
</script>

<svelte:head>
  <title>Borneo Football</title>
  <meta
    name="description"
    content="Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today there are more than 150 players, including three allgirls team. The program quickly expanded when we realized these children - who come from low-income families - needed much more."
  />
</svelte:head>

{@render children()}
