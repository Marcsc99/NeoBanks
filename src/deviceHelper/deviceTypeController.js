import { persistReducer, persistStore } from "redux-persist"
import { combineReducers } from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import storage from "redux-persist/lib/storage"
import thunkMiddleware from "redux-thunk"
import { configureStore } from '@reduxjs/toolkit'

export const types = {
    pc: 0,
    tablet: 1,
    mobile: 2
}

export const deviceTypes = {
    PC: "PC",
    TABLET: "TABLET",
    MOBILE: "MOBILE"
}

//Action
export const deviceActions = {
    pcType: () => { return {type: deviceTypes.PC} },
    tabletType: () => { return {type: deviceTypes.TABLET} },
    mobileType: () => { return {type: deviceTypes.MOBILE} }
}

//Reducer
const initialState = types.pc

export const deviceType = (state = initialState, action) => {
  switch (action.type) {
      case deviceTypes.PC:
          return types.pc
      case deviceTypes.TABLET:
          return types.tablet
      case deviceTypes.MOBILE:
          return types.mobile
      default:
          return state
  }
}
const appReducer = combineReducers({
    deviceType
})

//Persist

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
}

//Store

const pReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
        reducer: pReducer,
        middleware: [thunkMiddleware]
    })

export const persistor = persistStore(store)
