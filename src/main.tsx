import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import {Toaster} from "react-hot-toast"
import App from './App'
import './index.css'
import store from "./app/store";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position={'top-right'} reverseOrder={false}/>
      <App />
    </Provider>
  </React.StrictMode>,
)
