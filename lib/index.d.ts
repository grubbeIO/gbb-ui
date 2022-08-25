import React from 'react';
import * as styles from './components/shared/styles';
import { color } from './components/shared/styles';
import * as global from './components/shared/global';
export { styles, color, global };
export interface Ichildren {
    children?: React.ReactNode;
}
/**
 * GENERAL
 * ----------
 */
export * from './general/typography';
export * from './general/button';
export * from './undefined/buttonIcon';
export * from './undefined/bigButton';
/**
 * FORM
 * ----------
 */
export * from './form/input';
export * from './form/inputDate';
export * from './form/textarea';
export * from './form/select';
export * from './form/radioButton';
export * from './form/checkbox';
export * from './form/switch';
/**
 * CONTENT
 * ----------
 */
export * from './content/section';
export * from './content/table';
export * from './content/tabs';
export * from './content/header';
/**
 * FEEDBACK
 * ----------
 */
export * from './feedback/spinner';
export * from './feedback/progressbar';
export * from './feedback/scrollbar';
/**
 * LAYOUT
 * ----------
 */
export * from './layout/grid';
export * from './layout/sidebar';
/**
 * UNDEFINED
 * ----------
 */
export * from './undefined/lblLink';
export * from './undefined/card';
export * from './undefined/subheader';
export * from './undefined/lightbox';
