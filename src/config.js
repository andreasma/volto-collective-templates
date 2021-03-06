/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

 import { TlCenterView } from './components';
 // All your imports required for the config here BEFORE this line
 import '@plone/volto/config';
import TlProjectView from 'components/Views/TlProject';
 
 
 export default function applyConfig(config) {
   config.views = {
     ...config.views,
 
     contentTypesViews: {
 
       ...config.views.contentTypesViews,
 
       tlcenter: TlCenterView,
       tlproject: TlProjectView,
 
     },
 
   };
   return config;
 }
 
