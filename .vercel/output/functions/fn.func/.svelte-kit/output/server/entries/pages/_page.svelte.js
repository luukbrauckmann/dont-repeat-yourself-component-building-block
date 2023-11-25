import { c as create_ssr_component, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../chunks/ssr.js";
const Row_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "tr.svelte-1ur53vw{display:flex;flex:1 1 0px;flex-flow:row wrap;align-items:center;transition:all 0.2s ease-in-out;cursor:pointer;border:1px solid transparent;border-bottom-color:#d3d3d3}tr.svelte-1ur53vw:first-child{border-top-right-radius:var(--border-radius);border-top-left-radius:var(--border-radius)}tr.svelte-1ur53vw:last-child{border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}tr.svelte-1ur53vw:hover{border-color:#d3d3d3;background:#f4f5fa}td.svelte-1ur53vw{padding:0.5em}td.svelte-1ur53vw:nth-child(2){flex:1}td[colspan='6'].svelte-1ur53vw{flex-basis:100%}.player-name.svelte-1ur53vw{white-space:nowrap}.jersey-number.svelte-1ur53vw,[class^='statistic-'].svelte-1ur53vw{--size:2.125em;display:inline-block;vertical-align:middle;border:1px solid black;border-radius:calc(var(--border-radius) - 0.5em);padding:0.5em;width:var(--size);height:var(--size);line-height:1;text-align:center}[class^='statistic-'].svelte-1ur53vw{--color:white;border-color:var(--color);background:var(--color);color:white}.statistic-goals.svelte-1ur53vw{--color:#18d02b}.statistic-assists.svelte-1ur53vw{--color:#2974e4}.statistic-blocks.svelte-1ur53vw{--color:#ed4444}.statistic-turnovers.svelte-1ur53vw{--color:#ffc738}[class^='statistic-'].svelte-1ur53vw:empty{--color:#f4f5fa}",
  map: null
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { player } = $$props;
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css$2);
  return `<tr class="svelte-1ur53vw"><td class="svelte-1ur53vw"><span class="jersey-number svelte-1ur53vw">${escape(player.jersey_number)}</span></td> <td class="player-name svelte-1ur53vw">${escape(player.name)}</td> <td class="svelte-1ur53vw"><span class="statistic-goals svelte-1ur53vw">${escape(player.goals)}</span></td> <td class="svelte-1ur53vw"><span class="statistic-assists svelte-1ur53vw">${escape(player.assists)}</span></td> <td class="svelte-1ur53vw"><span class="statistic-blocks svelte-1ur53vw">${escape(player.blocks)}</span></td> <td class="svelte-1ur53vw"><span class="statistic-turnovers svelte-1ur53vw">${escape(player.turnovers)}</span></td> ${``} </tr>`;
});
const List_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "table.svelte-15vc58w{--border-radius:1em;border-radius:var(--border-radius);border-collapse:collapse;background:white;width:100%}thead.svelte-15vc58w{clip:rect(0 0 0 0);position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden;white-space:nowrap}tbody.svelte-15vc58w{display:flex;flex-flow:column nowrap;justify-content:space-between;height:100%}",
  map: null
};
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let reversedClass;
  let { players = [] } = $$props;
  let { reversed = false } = $$props;
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  $$result.css.add(css$1);
  reversedClass = reversed ? "reversed" : "";
  return `<table class="${escape(null_to_empty(reversedClass), true) + " svelte-15vc58w"}"><thead class="svelte-15vc58w" data-svelte-h="svelte-s3hook"><tr><th>Number</th> <th>Name</th> <th>Goals</th> <th>Assists</th> <th>Blocks</th> <th>Turnovers</th></tr></thead> <tbody class="svelte-15vc58w">${each(players, (player) => {
    return `${validate_component(Row, "Row").$$render($$result, { player }, {}, {})}`;
  })}</tbody> </table>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '$lib/styles/global.css';main.svelte-152s5v2{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:3rem;padding:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const players = Array.from({ length: 20 }, (_, index) => ({
    jersey_number: index + 1,
    name: "Luuk Brauckmann",
    goals: 1,
    assists: 2,
    blocks: 3,
    turnovers: 4
  }));
  $$result.css.add(css);
  return `<main class="svelte-152s5v2">${validate_component(List, "List").$$render($$result, { players }, {}, {})} ${validate_component(List, "List").$$render($$result, { players, reversed: true }, {}, {})} </main>`;
});
export {
  Page as default
};
