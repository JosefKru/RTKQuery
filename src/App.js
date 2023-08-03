// App.js

import React from 'react'
import WeatherForecast from './components/WeatherForecast'
import { Provider } from 'react-redux'
import { store } from './services/store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <header className='app-header'>Прогноз погоды</header>
        <div className='weather-container'>
          <WeatherForecast city='Moscow' />
        </div>
      </div>
    </Provider>
  )
}

export default App
