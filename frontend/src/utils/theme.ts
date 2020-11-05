// app
import config from '@/config';
import {Screens} from '@/types/theme';

export const getCurrentScreen = (): Screens|null => {
  const currentWidth = window.innerWidth;
  const breakpoints = config.theme.breakpoints;
  const screens = config.theme.screens;

  for (const keyPoint in breakpoints) {
    if (!Object.prototype.hasOwnProperty.call(breakpoints, keyPoint)) continue;

    const point = breakpoints[keyPoint];
    if (currentWidth > point.start && currentWidth < point.end) {
      for (const keyScreen in screens) {
        if (!Object.prototype.hasOwnProperty.call(screens, keyScreen)) continue;

        const screen = screens[keyScreen];
        if (screen.includes(Number(keyPoint))) {
          return Screens[keyScreen];
        }
      }
    }
  }

  return null;
};
