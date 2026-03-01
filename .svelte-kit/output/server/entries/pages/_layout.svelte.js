import { h as head } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  const { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Borneo Football</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today there are more than 150 players, including three allgirls team. The program quickly expanded when we realized these children - who come from low-income families - needed much more."/>`);
  });
  children($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
