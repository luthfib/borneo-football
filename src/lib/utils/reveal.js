export function reveal(node, { threshold = 0.1, duration = '0.8s', delay = '0s', y = '20px' } = {}) {
  node.style.opacity = '0';
  node.style.transform = `translateY(${y})`;
  node.style.transition = `opacity ${duration} ease-out ${delay}, transform ${duration} ease-out ${delay}`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
