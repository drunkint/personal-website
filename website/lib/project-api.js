import { join } from 'path'
import { PROJECTS } from './constants';

export function getAllProjects(fields = []) {
  return PROJECTS.slice().map((project) => getCleanedProject(project, fields)).reverse();

}

export function getCleanedProject(project, fields = []) {
  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (typeof project[field] !== 'undefined') {
      items[field] = project[field]
    }
  })

  return items
}


export function getProjectBySlug(slug, fields = []) {
  if (!fields.find(word => word === 'slug')) {
    fields.concat(['slug']);
  }
  const target = getAllProjects(fields).filter((proj) => proj.slug === slug);
  return target[0];
}
