import { RACE_KEY } from './consts';

export function getAssetPath(theme: RACE_KEY, path: string): string {
  return `${ASSETS_PATH}${theme}/${path}`;
}

export function getAssetUrl(theme: RACE_KEY, path: string): string {
  return `url(${getAssetPath(theme, path)})`;
}

