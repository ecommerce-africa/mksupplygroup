import { addIcon } from '@iconify/react';

// Icons are registered locally so the site never depends on the Iconify API at runtime.
// Use them as <Icon icon="mk:store" />. To add more, copy the SVG body from https://icon-sets.iconify.design.
const stroke = (paths) =>
  `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</g>`;

const icons = {
  check: stroke('<path d="M20 6 9 17l-5-5"/>'),
  menu: stroke('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: stroke('<path d="M6 6l12 12M18 6 6 18"/>'),
  store: stroke('<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V9z"/><path d="M5 13v7h14v-7"/><path d="M10 20v-4h4v4"/>'),
  utensils: stroke('<path d="M4 3v7a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V3"/><path d="M6.5 12v9"/><path d="M18 21V3c-2.5 0-4 2.5-4 6v4h4"/>'),
  globe: stroke('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>'),
  whatsapp: stroke('<path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2L9 9.5z"/>'),
};

Object.entries(icons).forEach(([name, body]) => {
  addIcon(`mk:${name}`, { body, width: 24, height: 24 });
});
