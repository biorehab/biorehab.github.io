/**
 * The site's content lives in the .yml files next to this one.
 * Edit those by hand — no code changes needed. This module just parses them.
 *
 * The `?raw` suffix asks the bundler to inline the file's text at build time,
 * so this works both in `npm run dev` and in the production build.
 */
import yaml from 'js-yaml';

import publicationsYaml from './publications.yml?raw';
import teamYaml from './team.yml?raw';
import newsYaml from './news.yml?raw';
import projectsYaml from './projects.yml?raw';
import opensourceYaml from './opensource.yml?raw';
import focusYaml from './focus.yml?raw';

export const publications = yaml.load(publicationsYaml) ?? [];
export const team = yaml.load(teamYaml) ?? [];
export const news = yaml.load(newsYaml) ?? [];
export const projects = yaml.load(projectsYaml) ?? [];
export const opensource = yaml.load(opensourceYaml) ?? [];
export const focusAreas = yaml.load(focusYaml) ?? [];

/** Projects bucketed by their `group`, preserving the order they appear in the file. */
export function projectsByGroup() {
  const groups = new Map();
  for (const p of projects) {
    if (!groups.has(p.group)) groups.set(p.group, []);
    groups.get(p.group).push(p);
  }
  return [...groups.entries()];
}

/** Papers flagged `highlight: true` in publications.yml. */
export const featuredPublications = publications.filter((p) => p.highlight);

/** Publications bucketed by year, newest first. Undated papers group under "Recent". */
export function publicationsByYear() {
  const groups = new Map();
  for (const p of publications) {
    const key = p.year ?? 'Recent';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    if (a === 'Recent') return -1;
    if (b === 'Recent') return 1;
    return b - a;
  });
}
