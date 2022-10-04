import { RACE_KEY } from './consts';

export function getAssetPath(path: string, theme: RACE_KEY | 'any' = 'any'): string {
  return `${ASSETS_PATH}${theme}/${path}`;
}

export function getAssetUrl(path: string, theme: RACE_KEY | 'any'): string {
  return `url(${getAssetPath(path, theme)})`;
}

