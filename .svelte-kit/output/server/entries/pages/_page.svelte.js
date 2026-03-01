import { a1 as attr, a2 as attr_class, a3 as attr_style, a4 as stringify, a5 as clsx, e as escape_html, a6 as ensure_array_like } from "../../chunks/index.js";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Logo($$renderer, $$props) {
  let { src, height, compact = false } = $$props;
  $$renderer.push(`<img alt="Brand"${attr("src", src)}${attr("height", height)}${attr_class(`object-contain ${stringify(compact ? "pr-3 w-auto" : "pr-6 w-[150px] md:pl-12")}`)}${attr_style(`height: ${stringify(height)}; max-height: ${stringify(compact ? "80px" : "175px")};`)}/>`);
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "primary",
      href = "",
      type = "button",
      class: className = "",
      disabled = false,
      download = void 0,
      target = void 0,
      rel = void 0,
      onclick = void 0,
      children
    } = $$props;
    const baseClasses = "inline-flex items-center justify-center gap-1.5 py-2.5 px-5 font-medium text-sm cursor-pointer transition-colors duration-150 ease-in-out shadow-sm min-w-[min-content] no-underline";
    const variantClasses = {
      primary: "border-none bg-[rgba(223,0,18,1)] text-white hover:bg-[rgba(195,0,15,1)]",
      secondary: "border-none bg-[rgb(226,241,255)] text-[rgba(223,0,18,1)] hover:bg-[rgb(200,225,245)]",
      outline: "border-2 border-white/90 bg-transparent text-white hover:bg-white/10",
      white: "border-2 border-[rgb(0,20,50)] bg-white text-[rgb(0,20,50)] hover:bg-slate-50"
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", href)}${attr("download", download)}${attr("target", target)}${attr("rel", rel)}${attr_class(classes)} style="border-radius: var(--radius-button);"${attr("disabled", disabled, true)}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attr("type", type)}${attr_class(classes)} style="border-radius: var(--radius-button);"${attr("disabled", disabled, true)}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Paypal_button($$renderer, $$props) {
  let {
    blue = false,
    fullWidth = false,
    padding = "",
    padding_left = "",
    children
  } = $$props;
  let form;
  $$renderer.push(`<div${attr_class(clsx(fullWidth ? "block" : "inline-block"))}${attr_style(`padding: ${stringify(padding)}; padding-left: ${stringify(padding_left)}`)}><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="hidden"><input type="hidden" name="cmd" value="_s-xclick"/> <input type="hidden" name="hosted_button_id" value="5PPY7MEKD8LMQ"/></form> `);
  Button($$renderer, {
    variant: blue ? "secondary" : "primary",
    type: "button",
    class: fullWidth ? "w-full" : "",
    onclick: () => form.submit(),
    children: ($$renderer2) => {
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    }
  });
  $$renderer.push(`<!----></div>`);
}
function Burger_menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isOpen = false;
    $$renderer2.push(`<div class="md:hidden"><button class="cursor-pointer p-2 text-white hover:bg-white/10" style="border-radius: var(--radius-button)" aria-label="Toggle navigation menu"${attr("aria-expanded", isOpen)}><span${attr_class("navicon svelte-592aoj", void 0, { "open": isOpen })}></span></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Header($$renderer) {
  $$renderer.push(`<header class="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4 relative md:absolute md:top-0 md:left-0 md:z-10 bg-slate-900/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"><a href="/" class="flex-shrink-0">`);
  Logo($$renderer, { src: "/images/Logo.png", height: "72px", compact: true });
  $$renderer.push(`<!----></a> <nav class="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2"><a href="/" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/5">HOME</a> <a href="#About" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/5">ABOUT US</a> <a href="#OurWork" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/5">OUR WORK</a> <a href="#GetInvolved" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/5">GET INVOLVED</a> <a href="#OurPartners" class="whitespace-nowrap py-3 px-3 text-white/95 no-underline text-sm font-medium hover:text-white rounded-[var(--radius-button)] hover:bg-white/5">PARTNER</a></nav> <div class="flex items-center gap-3">`);
  Burger_menu($$renderer);
  $$renderer.push(`<!----> <div class="hidden md:block">`);
  Paypal_button($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->DONATE`);
    }
  });
  $$renderer.push(`<!----></div></div></header>`);
}
function Hero_layout($$renderer) {
  $$renderer.push(`<div class="flex flex-col relative">`);
  Header($$renderer);
  $$renderer.push(`<!----> <section class="min-h-[70vh] md:min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat" style="background-image: linear-gradient(0deg, rgba(0, 20, 50, 0.45), rgba(0, 20, 50, 0.35)), url('/images/Cover.jpg');"><div class="w-full max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 text-left"><h1 class="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-3xl">THE POWER<br/>OF FOOTBALL.</h1> <p class="text-white/95 text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl font-medium">Inspiring the next generation through football, education and health in Central Kalimantan.</p> <div class="flex flex-wrap gap-4 mt-8">`);
  Paypal_button($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->DONATE NOW`);
    }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    href: "#OurWork",
    variant: "outline",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->VIEW OUR WORK`);
    }
  });
  $$renderer.push(`<!----></div></div></section></div>`);
}
function Call_to_action($$renderer, $$props) {
  let {
    heading = "Help change a child's life",
    description = "Your support helps us provide football, education and health programs to children across Central Kalimantan."
  } = $$props;
  $$renderer.push(`<section class="bg-slate-900 text-white py-12 px-6"><div class="max-w-4xl mx-auto text-center"><h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">${escape_html(heading)}</h2> <p class="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">${escape_html(description)}</p> <div>`);
  Paypal_button($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->DONATE NOW`);
    }
  });
  $$renderer.push(`<!----></div></div></section>`);
}
function Line($$renderer, $$props) {
  let { primary = false, override = "0px" } = $$props;
  $$renderer.push(`<hr${attr_class(`mt-5 mb-5 border-0 border-t-[3px] w-[60px] ${stringify(primary ? "border-white" : "border-[rgba(223,0,18,1)]")} ${stringify(override === "auto" ? "mx-auto" : "")}`)}${attr_style(override !== "auto" ? `margin-left: ${override}` : "")}/>`);
}
function Section_heading($$renderer, $$props) {
  let {
    navID = "",
    heading,
    tag,
    showContactButton = false,
    centered = false,
    dark = false,
    children
  } = $$props;
  $$renderer.push(`<div${attr_class(`flex items-center justify-center ${stringify(dark ? "bg-slate-900" : "bg-white")}`)}${attr("id", navID || void 0)}><div${attr_class(`w-[80%] max-w-4xl ${stringify(children ? "pb-9" : "pb-4")} pt-10 ${stringify(centered ? "text-center" : "")}`)}>`);
  if (tag) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<span${attr_class(`inline-block px-4 py-1.5 rounded-full ${stringify(dark ? "bg-slate-700 text-white/70" : "bg-slate-100 text-slate-600")} text-sm font-medium mb-4`)}>${escape_html(tag)}</span>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (centered) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="flex justify-center w-full">`);
    Line($$renderer, {});
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
    Line($$renderer, {});
  }
  $$renderer.push(`<!--]--> <h2 class="text-[rgba(223,0,18,1)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-3">${escape_html(heading)}</h2> `);
  if (children) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p${attr_class(`${stringify(dark ? "text-white/70" : "text-slate-600")} text-lg sm:text-xl md:text-2xl font-medium leading-relaxed`)}>`);
    children($$renderer);
    $$renderer.push(`<!----></p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> `);
  if (showContactButton) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="mt-6">`);
    Button($$renderer, {
      href: "mailto:borneo.football@gmail.com?subject=",
      variant: "primary",
      children: ($$renderer2) => {
        $$renderer2.push(`<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke-width="2"></circle><path stroke-width="2" stroke-linecap="round" d="M2 12h20M12 3c-2.5 3.5-2.5 10.5 0 14M12 3c2.5 3.5 2.5 10.5 0 14"></path><circle cx="17" cy="16.5" r="2" stroke-width="1.5"></circle><path stroke-width="1.5" stroke-linecap="round" d="M17 14v1.5"></path></svg> CONTACT`);
      }
    });
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Video_with_poster($$renderer, $$props) {
  let {
    posterImageUrl,
    rounded = true,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(`relative w-full overflow-hidden bg-neutral-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-neutral-800 ${stringify(rounded ? "rounded-2xl border border-neutral-200/80" : "")} ${stringify(className)}`)}><div class="relative aspect-video w-full bg-cover bg-center"${attr_style(`background-image: linear-gradient(0deg, rgba(0, 20, 50, 0.4), rgba(0, 20, 50, 0.25)), url('${stringify(posterImageUrl)}');`)}>`);
  {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<button aria-label="Play video"${attr_class(`absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[rgba(223,0,18,1)] focus:ring-offset-2 ${stringify(rounded ? "rounded-2xl" : "")}`)}><span class="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-lg transition transform hover:scale-110 hover:bg-white"><svg class="ml-1 h-8 w-8 text-[rgba(223,0,18,1)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span></button>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function About_section($$renderer) {
  const aboutParagraphs = [
    "Since 2015, the Borneo Football International Foundation (BFIF) has been actively working in Central Kalimantan, Indonesian Borneo, as a Sports for Development organization (S4D), achieving positive outcomes in the areas of Education, Health, Social Inclusion, Child Protection, and Empowerment.",
    "BFIF's mission is to improve the quality of life of Kalimantan's underprivileged children through sports. Using football as a tool for social change assists their physical, mental, and social development through three complementary programs – Football Practice, Education, and Health, promoting gender equality, empowering women, motivating young people to pursue formal education, and having better job opportunities. The BFIF provides a safe environment for children to play sports and it promotes tolerance in diversity for a peace-building community.",
    "The foundation created the Borneo Football Academy (BFIA) as the vehicle to implement its programs. BFIA's methods and activities show that through sports, vulnerable and marginalized children from different and often conflicting social/ethnic groups can develop important social, peace-building, and life skills. Their self-esteem increases, they learn to become team players, learn tolerance and mutual respect for the diversity of ethnic and religious backgrounds. Through sports and team activities, they acquire discipline, cooperative spirit, responsibility, and direction in their lives.",
    "Today the BFIA counts on a team of experienced professionals in the areas of football, health and education, dedicated to work in the implementation of BFIA's programs. Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today, the Academy has more than 450 players in six training centers including four all girls team and reaches more than 3000 students in 40 local schools through football trainings, health and education programs."
  ];
  let open = false;
  $$renderer.push(`<section class="bg-white py-12 md:py-16"><div class="w-[90%] max-w-6xl mx-auto"><div class="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14"><div class="flex-1 min-w-0 flex flex-col justify-center order-2 lg:order-1"><p class="text-slate-700 text-lg sm:text-xl leading-relaxed font-semibold">At BFIF, we build confident players, strong teamwork, and lifelong discipline through football, education and health programs—and a shared passion for the game.</p> <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mt-5">${escape_html(aboutParagraphs[0])}</p> <div class="mt-6">`);
  Button($$renderer, {
    variant: "white",
    onclick: () => open = true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->READ MORE`);
    }
  });
  $$renderer.push(`<!----></div></div> <div class="flex-1 min-w-0 lg:min-w-[420px] flex items-center justify-center order-1 lg:order-2"><div class="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">`);
  Video_with_poster($$renderer, {
    posterImageUrl: "/images/VideoCover.png",
    rounded: false
  });
  $$renderer.push(`<!----></div></div></div></div></section> `);
  if (open) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="About BFIF"><div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> <div class="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col bg-[rgb(0,20,50)] rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-8 py-6 border-b border-white/10"><h2 class="text-2xl font-bold text-white tracking-tight">About BFIF</h2> <button aria-label="Close" class="flex items-center justify-center w-9 h-9 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="overflow-y-auto px-8 py-6 space-y-5"><p class="text-white text-base sm:text-lg leading-relaxed font-semibold">At BFIF, we build confident players, strong teamwork, and lifelong discipline through football, education and health programs—and a shared passion for the game.</p> <!--[-->`);
    const each_array = ensure_array_like(aboutParagraphs);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer.push(`<p class="text-white/70 text-base leading-relaxed">${escape_html(paragraph)}</p>`);
    }
    $$renderer.push(`<!--]--></div></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function Stats($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="bg-slate-900 py-12 md:py-16 relative overflow-hidden"><div class="relative w-[90%] max-w-5xl mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function Football_svg($$renderer, $$props) {
  let { size = 56, class: className = "" } = $$props;
  $$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" fill="none"${attr_class(clsx(className))} xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" stroke="rgb(223, 0, 18)" stroke-width="6"></circle><g stroke="rgb(223, 0, 18)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 30 L40 50 L55 75 L30 75 Q20 75 20 65 L25 45 L30 30 Z"></path><path d="M40 50 L25 45"></path><path d="M45 60 L32 58"></path><path d="M50 70 L35 68"></path><circle cx="70" cy="55" r="14"></circle><path d="M40 20 L35 40"></path><path d="M65 20 L45 50"></path></g></svg>`);
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "content",
      heading,
      content,
      src = "",
      action,
      animate = "",
      icon
    } = $$props;
    $$renderer2.push(`<div${attr_class(`w-full border border-neutral-200 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md ${stringify(variant === "action" ? "bg-white" : "bg-brand-blue")}`, "svelte-1u0xoi6")} style="border-radius: var(--radius-button)">`);
    if (variant === "action") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-brand-blue p-6 svelte-1u0xoi6"><h2 class="text-[rgba(223,0,18,1)] font-medium text-xl sm:text-2xl text-center svelte-1u0xoi6">${escape_html(heading)}</h2></div> <div class="p-8 flex-1 flex flex-col svelte-1u0xoi6"><p class="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal flex-1 svelte-1u0xoi6">${escape_html(content)}</p></div> `);
      if (action) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="p-8 pt-0 flex justify-center svelte-1u0xoi6">`);
        action($$renderer2);
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="p-8 md:p-10 flex-1 flex flex-col svelte-1u0xoi6"><div class="text-[rgba(223,0,18,1)] font-bold text-xl sm:text-2xl tracking-tight mb-2 uppercase svelte-1u0xoi6">${escape_html(heading)}</div> `);
      Line($$renderer2, { override: "0px" });
      $$renderer2.push(`<!----> `);
      if (icon) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex items-center justify-center my-8 h-[120px] svelte-1u0xoi6">`);
        icon($$renderer2);
        $$renderer2.push(`<!----></div>`);
      } else if (src) {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<div class="flex items-center justify-center my-8 h-[120px] svelte-1u0xoi6"><img${attr("src", src)}${attr("alt", heading)} class="h-full object-contain svelte-1u0xoi6"/></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="text-base sm:text-lg leading-relaxed font-normal text-slate-700 flex-1 svelte-1u0xoi6">${escape_html(content)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Card_holder($$renderer, $$props) {
  let { cards, variant = "content" } = $$props;
  $$renderer.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-4 md:px-8"><!--[-->`);
  const each_array = ensure_array_like(cards);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let card = each_array[$$index];
    if (variant === "action") {
      $$renderer.push("<!--[-->");
      {
        let action = function($$renderer2) {
          Paypal_button($$renderer2, {
            padding: "0",
            fullWidth: true,
            children: ($$renderer3) => {
              $$renderer3.push(`<!---->DONATE`);
            }
          });
        };
        Card($$renderer, {
          variant: "action",
          heading: card.heading,
          content: card.content,
          action
        });
      }
    } else {
      $$renderer.push("<!--[!-->");
      Card($$renderer, {
        variant: "content",
        heading: card.heading,
        content: card.content,
        src: card.src ?? "",
        animate: card.animate ?? "",
        icon: card.icon
      });
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function Training_centers($$renderer, $$props) {
  let { mapImageSrc = "/images/training-centers-map.png" } = $$props;
  const centers = [
    { name: "Tumbang Kaman", primary: false },
    { name: "Dahian Tunggal", primary: false },
    { name: "Kasongan", primary: false },
    { name: "Rungan Sari", primary: false },
    { name: "Habaring Hurung", primary: false },
    { name: "Palangkaraya", primary: true }
  ];
  $$renderer.push(`<section class="bg-slate-900 py-12 md:py-16"><div class="w-[90%] max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"><div class="order-2 lg:order-1"><p class="text-white/75 text-lg font-medium leading-relaxed mb-8">BFIA runs programs across six training centers in Central Kalimantan. Our main academy is in Palangkaraya, with additional centers bringing football, education and health to communities across the region.</p> <ul class="space-y-4"><!--[-->`);
  const each_array = ensure_array_like(centers);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let center = each_array[i];
    $$renderer.push(`<li class="flex items-center gap-3"><span${attr_class(`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${stringify(center.primary ? "bg-amber-400 text-slate-900" : "bg-[rgba(223,0,18,1)] text-white")}`)} aria-hidden="true"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg></span> <span class="text-white font-medium text-lg">${escape_html(center.name)}</span> `);
    if (center.primary) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<span class="text-sm text-white/50 font-normal">(Main academy)</span>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="order-1 lg:order-2 flex justify-center"><div class="w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-sm aspect-[4/3] flex items-center justify-center">`);
  {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<img${attr("src", mapImageSrc)} alt="Map of Borneo showing BFIA training center locations: Tumbang Kaman, Dahian Tunggal, Kasongan, Rungan Sari, Habaring Hurung, Palangkaraya" class="w-full h-full object-contain" onerror="this.__e=event"/>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></section>`);
}
function Media_block($$renderer, $$props) {
  let {
    imageUrl,
    gradient = "0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.3)",
    height = "80vh",
    minHeight = "350px",
    children
  } = $$props;
  $$renderer.push(`<div class="text-white relative bg-cover bg-center bg-no-repeat flex items-center justify-center"${attr_style(`height: ${stringify(height)}; min-height: ${stringify(minHeight)}; background-image: linear-gradient(${stringify(gradient)}), url('${stringify(imageUrl)}');`)}><div class="absolute inset-0 flex items-center justify-center"><div class="text-center w-[45%] max-[1200px]:w-[70%] max-[767px]:w-[80%]">`);
  children($$renderer);
  $$renderer.push(`<!----></div></div></div>`);
}
function Image_background($$renderer) {
  Media_block($$renderer, {
    imageUrl: "/images/GirlsCoverPhoto.jpg",
    gradient: "0deg, rgba(0, 20, 50, 0.5), rgba(0, 20, 50, 0.3)",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex justify-center w-full">`);
      Line($$renderer2, { primary: true, override: "auto" });
      $$renderer2.push(`<!----></div> <h2 class="font-extralight text-2xl sm:text-3xl max-[767px]:text-xl leading-relaxed mt-4">Most of the people involved in BFI love football and love the children we serve. They are
    inspired by a wish to give back to the community.</h2>`);
    }
  });
}
function Sponsor_div($$renderer) {
  const sponsors = [
    {
      href: "https://www.susiladharma.org",
      src: "/images/SDIA.jpg",
      alt: "SDIA"
    },
    {
      href: "http://beginforgood.com",
      src: "/images/BeginForGood.jpg",
      alt: "Begin For Good"
    },
    {
      href: "http://australianvolunteers.com",
      src: "/images/AustralianVolunteers.png",
      alt: "Australian Volunteers"
    },
    {
      href: "https://en.unesco.org",
      src: "/images/UNESCO.jpg",
      alt: "UNESCO"
    },
    {
      href: "https://yumindonesia.org",
      src: "/images/YUM.png",
      alt: "YUM"
    },
    { href: null, src: "/images/KUB.png", alt: "KUB" },
    {
      href: "https://dharmacare.org.au/",
      src: "/images/DharmaCare.jpg",
      alt: "Dharma Care"
    }
  ];
  $$renderer.push(`<div class="bg-white overflow-hidden py-8" style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);"><div class="sponsor-track svelte-1kba5r4"><!--[-->`);
  const each_array = ensure_array_like([...sponsors, ...sponsors]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { href, src, alt } = each_array[$$index];
    if (href) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<a${attr("href", href)} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center flex-shrink-0 px-10"><img${attr("src", src)}${attr("alt", alt)} class="h-[90px] w-auto object-contain grayscale-[20%] opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"/></a>`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`<div class="flex items-center justify-center flex-shrink-0 px-10"><img${attr("src", src)}${attr("alt", alt)} class="h-[90px] w-auto object-contain grayscale-[20%] opacity-85"/></div>`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Annual_report($$renderer) {
  $$renderer.push(`<section class="bg-slate-900 py-16 md:py-20" id="LearnMore"><div class="w-[90%] max-w-6xl mx-auto"><div class="flex flex-col md:flex-row items-start gap-10 md:gap-16"><div class="flex-shrink-0 w-fit order-2 md:order-1"><img src="/images/BrochureCover.jpg" alt="BFIA brochure cover" class="w-48 md:w-56 rounded-lg shadow-2xl"/></div> <div class="flex-1 min-w-0 order-1 md:order-2">`);
  Line($$renderer, { primary: true });
  $$renderer.push(`<!----> <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">There's more to explore</h2> <p class="text-white/70 text-lg sm:text-xl leading-relaxed font-medium">Find out more about our programs and how you, your company, or organization can sponsor BFIA. Download our brochure to learn more.</p> <div class="mt-8">`);
  Button($$renderer, {
    href: "/pdfs/BFIBROCHUREWEB.pdf",
    download: "BFIBrochure.pdf",
    target: "_blank",
    variant: "white",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->DOWNLOAD BROCHURE`);
    }
  });
  $$renderer.push(`<!----></div></div></div></div></section>`);
}
function Social_media($$renderer) {
  function iconViewBox(icon) {
    return `0 0 ${icon.icon[0]} ${icon.icon[1]}`;
  }
  function iconPath(icon) {
    const path = icon.icon[4];
    return Array.isArray(path) ? path.join(" ") : path;
  }
  const links = [
    {
      icon: faFacebookF,
      href: "https://www.facebook.com/borneo.football.international/",
      label: "Facebook"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/borneo_football/",
      label: "Instagram"
    },
    {
      icon: faXTwitter,
      href: "https://twitter.com/Borneo_Football",
      label: "Twitter/X"
    },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/channel/UCfQs-tSFgUEmmF-E3E4dwYg",
      label: "YouTube"
    },
    {
      icon: faEnvelope,
      href: "mailto:borneo.football@gmail.com?subject=",
      label: "Email"
    }
  ];
  $$renderer.push(`<div class="flex items-center justify-center gap-4"><!--[-->`);
  const each_array = ensure_array_like(links);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { icon, href, label } = each_array[$$index];
    $$renderer.push(`<a${attr("href", href)}${attr("target", href.startsWith("mailto") ? void 0 : "_blank")}${attr("rel", href.startsWith("mailto") ? void 0 : "noopener noreferrer")}${attr("aria-label", label)} class="text-white/50 hover:text-white transition-colors duration-200"><svg${attr("viewBox", iconViewBox(icon))} class="w-5 h-5" aria-hidden="true"><path${attr("d", iconPath(icon))} fill="currentColor"></path></svg></a>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function Footer($$renderer) {
  $$renderer.push(`<div class="bg-[rgb(0,20,50)] text-white py-6"><div class="flex items-center mx-auto w-[90%] max-[840px]:flex-wrap"><img src="/images/Logo.png" alt="Borneo Football" height="75" class="pr-6"/> <p class="text-sm sm:text-base">The Power of Football <br/> Inspiring the Next Generation</p></div> <div class="mt-4 border-t border-white/20 pt-4 w-[90%] mx-auto">`);
  Social_media($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
function Health_svg($$renderer, $$props) {
  let { size = 56, class: className = "" } = $$props;
  $$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" fill="none"${attr_class(clsx(className))} xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" stroke="rgb(223, 0, 18)" stroke-width="6"></circle><g stroke="rgb(223, 0, 18)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="30" r="6"></circle><path d="M42 40 L50 45 L58 40 L65 30 L70 35 L58 52 L65 75 L58 75 L50 55 L42 75 L35 75 L42 52 L30 35 L35 30 L42 40 Z" fill="none" stroke-width="3"></path><path d="M75 35 L75 75" stroke-width="3"></path><path d="M75 42 Q82 40 82 45 Q82 50 75 48"></path><path d="M75 42 Q68 40 68 45 Q68 50 75 48"></path><path d="M75 52 Q82 50 82 55 Q82 60 75 58"></path><path d="M75 52 Q68 50 68 55 Q68 60 75 58"></path><path d="M75 62 Q82 60 82 65 Q82 70 75 68"></path><path d="M75 62 Q68 60 68 65 Q68 70 75 68"></path><path d="M22 42 C18 42 18 36 22 34 C22 30 28 30 30 34 C34 30 38 36 34 42 L22 42 Z"></path><path d="M28 42 L28 46 L24 46 L24 42"></path><circle cx="28" cy="58" r="7"></circle><path d="M28 51 L28 48 Q32 48 32 51"></path><path d="M20 68 Q20 78 30 78 L20 68 Z"></path><path d="M22 72 L26 73"></path></g></svg>`);
}
function Education_svg($$renderer, $$props) {
  let { size = 56, class: className = "" } = $$props;
  $$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" fill="none"${attr_class(clsx(className))} xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" stroke="rgb(223, 0, 18)" stroke-width="6"></circle><g stroke="rgb(223, 0, 18)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 25 L65 25 L70 30 L70 75 L30 75 L25 70 L25 30 L30 25 Z"></path><path d="M25 65 L70 65"></path><path d="M35 35 L60 35"></path><path d="M35 45 L55 45"></path><path d="M55 65 L55 78 L62 74 L69 78 L69 65"></path><path d="M65 45 Q55 45 55 55 Q55 65 65 65 Q75 65 75 55 Q75 45 65 45" fill="white"></path><path d="M65 45 Q55 45 55 55 Q55 65 65 65 Q75 65 75 55 Q75 45 65 45"></path><path d="M65 45 C65 40 70 42 70 44"></path></g></svg>`);
}
function FootballSnippet($$renderer) {
  Football_svg($$renderer, { size: 100 });
}
function HealthSnippet($$renderer) {
  Health_svg($$renderer, { size: 100 });
}
function EducationSnippet($$renderer) {
  Education_svg($$renderer, { size: 100 });
}
function _page($$renderer) {
  const workCards = [
    {
      heading: "FOOTBALL",
      icon: FootballSnippet,
      animate: "football",
      content: "We hold weekly training sessions and players test their skills in official tournaments. We also organize regular football clinics and Summer camps where we match off against players from around Indonesia and overseas. Our 'Happy Feet' program supports players from low income families with shoes, uniforms, socks and jerseys."
    },
    {
      heading: "HEALTH AND NUTRITION",
      icon: HealthSnippet,
      content: "Central Kalimantan has one of the highest stunting rates in Indonesia, and we found many of our young players were underweight and below average height. Although stunting cannot be reversed, nonetheless through sports, nutritional supplements and health assessment and education, the BFIA has initiated a program to support the good health of our players."
    },
    {
      heading: "EDUCATION",
      icon: EducationSnippet,
      content: "In Central Kalimantan, nearly 1 in 3 children aged 7-15 drop out of school mainly due to economic pressures. We support our players with educational materials and school fee subsidies. Sponsorship is also provided for English and computer classes, vocational courses and conservation activities working together with our partners."
    }
  ];
  const donateCards = [
    {
      heading: "SUPPORTER",
      content: "Every gift, no matter how large or small, can help our boys and girls reach their personal goals"
    },
    {
      heading: "COACH",
      content: "A gift of USD 195 supports our Child Development Fund and one child's participation in all our programs. You can sponsor as many children as you like."
    },
    {
      heading: "GOALKEEPER",
      content: "We welcome individuals and organizations willing to join us and support our main programs. If you are interested in making a major gift towards this goal please contact us for more information. We are pleased to offer official recognition to individuals, companies and NGO's."
    }
  ];
  $$renderer.push(`<div>`);
  Hero_layout($$renderer);
  $$renderer.push(`<!----> `);
  Stats($$renderer);
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, { navID: "About", heading: "ABOUT" });
  $$renderer.push(`<!----> `);
  About_section($$renderer);
  $$renderer.push(`<!----> `);
  Call_to_action($$renderer, {});
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, {
    navID: "OurWork",
    heading: "OUR WORK",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->The minimum wage for people in Central Kalimantan is well under $230 a month. Parents find it
    hard just to send their children to school - let alone provide them with extracurricular
    activities. Our players can take part in not only a wide range of football activities but also
    health and educational programs.`);
    }
  });
  $$renderer.push(`<!----> `);
  Card_holder($$renderer, { cards: workCards, variant: "content" });
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, {
    navID: "TrainingCenters",
    heading: "OUR TRAINING CENTERS",
    dark: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->We run programs across six training centers in Central Kalimantan, with our main academy in Palangkaraya.`);
    }
  });
  $$renderer.push(`<!----> `);
  Training_centers($$renderer, {});
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, {
    navID: "GetInvolved",
    heading: "GET INVOLVED",
    showContactButton: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->We are always looking for talented people from Indonesia and abroad to support, not only our
    football training but our education, health &amp; nutrition programs, social media, and
    fundraising goals. We also welcome local and international groups to our innovative summer camps
    and football clinics.`);
    }
  });
  $$renderer.push(`<!----> `);
  Image_background($$renderer);
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, {
    navID: "WaysToDonate",
    heading: "WAYS TO DONATE",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->There are many ways you can help us build for the future. So be a part of Borneo Football and
    help change a child's life.`);
    }
  });
  $$renderer.push(`<!----> `);
  Card_holder($$renderer, { cards: donateCards, variant: "action" });
  $$renderer.push(`<!----> `);
  Section_heading($$renderer, {
    navID: "OurPartners",
    heading: "OUR PARTNERS",
    centered: true,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Together we can start something bigger`);
    }
  });
  $$renderer.push(`<!----> `);
  Sponsor_div($$renderer);
  $$renderer.push(`<!----> `);
  Annual_report($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
