import { removeAccents } from './removeAccents'

export const slug = (title: string): string => {
  return removeAccents(title)
    .toLowerCase() // Convertir en minuscules
    .replace(/[^\w\s-]/g, '') // Supprimer les caractères non alphanumériques, non espace et non tiret
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/^-+/g, '') // Supprimer les tirets en début de chaîne
    .replace(/-+$/g, '')
}
