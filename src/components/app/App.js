import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import "../../assets/styles/style.css"
import Dashboard from "../dashboard";
import { persistor, store } from '../../deviceHelper/deviceTypeController'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
