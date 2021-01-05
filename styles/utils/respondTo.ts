import { css } from 'styled-components';
import { breakpoints } from '../constants/constants';

export const respondTo: any = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css.call(undefined, ...args)};
      }
    `;
    return accumulator;
  },
  {}
);
