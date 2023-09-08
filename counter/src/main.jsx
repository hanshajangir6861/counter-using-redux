import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './redux/App.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/Store.jsx'
// import './redux./App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <App/>
  </Provider>
)

