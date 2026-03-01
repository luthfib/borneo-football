<script>
  /** Single shared button: one size, style variants. Always renders <button>, uses onclick for navigation. */
  let {
    variant = 'primary',
    href = '',
    type = 'button',
    class: className = '',
    disabled = false,
    download = undefined,
    target = undefined,
    onclick = undefined,
    children
  } = $props();

  const baseClasses =
    'inline-flex items-center justify-center gap-1.5 font-semibold text-sm cursor-pointer transition-colors duration-150 ease-in-out shadow-sm min-w-[min-content] no-underline whitespace-nowrap uppercase tracking-wide';

  const variantClasses = {
    primary:
      'border-none bg-[var(--color-red)] text-white hover:bg-[var(--color-red-hover)]',
    secondary:
      'border-none bg-[var(--color-blue-dark)] text-[var(--color-red)] hover:bg-[var(--color-blue-dark)]',
    outline:
      'border-2 border-white/90 bg-transparent text-white hover:bg-white/10',
    white:
      'border-2 border-[var(--color-blue-dark)] bg-white text-[var(--color-blue-dark)] hover:bg-slate-50',
    'white-plain':
      'border-none bg-white text-[var(--color-blue-dark)] hover:bg-slate-50 shadow-md',
    dark:
      'border-none bg-[var(--color-blue-dark)] text-white hover:bg-[rgb(0,30,70)]'
  };
  
  const classes = $derived(`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim());

  function handleClick(e) {
    if (onclick) onclick(e);
    if (!href) return;
    if (download) {
      const a = document.createElement('a');
      a.href = href;
      a.download = download;
      if (target) a.target = target;
      a.click();
    } else if (target === '_blank') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  }
</script>

<button
  {type}
  class={classes}
  style="border-radius: var(--radius-button); padding: var(--button-py) var(--button-px); font-size: var(--button-font-size);"
  {disabled}
  onclick={handleClick}
>
  {@render children()}
</button>
