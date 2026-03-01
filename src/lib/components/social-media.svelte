<script>
  import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  function iconViewBox(icon) {
    return `0 0 ${icon.icon[0]} ${icon.icon[1]}`;
  }

  function iconPath(icon) {
    const path = icon.icon[4];
    return Array.isArray(path) ? path.join(' ') : path;
  }

  const links = [
    {
      icon: faFacebookF,
      href: 'https://www.facebook.com/borneo.football.international/',
      label: 'Facebook'
    },
    {
      icon: faInstagram,
      href: 'https://www.instagram.com/borneo_football/',
      label: 'Instagram'
    },
    {
      icon: faXTwitter,
      href: 'https://twitter.com/Borneo_Football',
      label: 'Twitter/X'
    },
    {
      icon: faYoutube,
      href: 'https://www.youtube.com/channel/UCfQs-tSFgUEmmF-E3E4dwYg',
      label: 'YouTube'
    },
    {
      icon: faEnvelope,
      href: 'mailto:borneo.football@gmail.com?subject=',
      label: 'Email'
    }
  ];
</script>

<div class="flex items-center justify-center gap-4">
  {#each links as { icon, href, label }}
    <a
      {href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      aria-label={label}
      class="text-white/50 hover:text-white transition-colors duration-200"
    >
      <svg viewBox={iconViewBox(icon)} class="w-5 h-5" aria-hidden="true">
        <path d={iconPath(icon)} fill="currentColor" />
      </svg>
    </a>
  {/each}
</div>
