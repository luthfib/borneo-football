<script>
  import Line from './line.svelte';
  import MediaBlock from './media-block.svelte';
  import { reveal } from '$lib/utils/reveal';
</script>

<MediaBlock imageUrl="/images/GirlsCoverPhoto.jpg" gradient="0deg, rgba(var(--color-blue-dark-rgb), 0.5), rgba(var(--color-blue-dark-rgb), 0.3)">
  <div use:reveal={{ delay: '0.1s' }} class="flex justify-center w-full">
    <Line primary override="auto" />
  </div>
  <h2 use:reveal={{ delay: '0.2s' }} class="font-extralight text-2xl sm:text-3xl max-[767px]:text-xl leading-relaxed mt-4">
    Most of the people involved in BFI love football and love the children we serve. They are
    inspired by a wish to give back to the community.
  </h2>
</MediaBlock>
