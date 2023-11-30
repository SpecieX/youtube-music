import { createPlugin } from '@/utils';
import style from './style.css?inline';

export default createPlugin({
  name: 'Blur Navigation Bar',
  description: 'makes navigation bar transparent and blurry',
  restartNeeded: true,
  stylesheets: [style],
  renderer() {},
});
