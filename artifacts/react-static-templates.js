

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js'), universalOptions)
      t_1.template = '/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js'
      

// Template Map
export default {
  '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404': t_0,
'/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js': t_1
}
// Not Found Template
export const notFoundTemplate = "/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404"

