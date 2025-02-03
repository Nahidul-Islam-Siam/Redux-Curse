

import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.js'


import Counter from './Counter.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
<Counter/>
  </Provider>,
)
