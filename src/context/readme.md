# Purpose of folder

This folder stores all the context related files that will be used to maintain a global state by the help of hooks like useContext and useReducer.

## appContext.js

This initializes the state of the context that will be used to build the context using React.createContext()

## globalState.js

This is where the reducers and additional functions (like action creators in redux) are defined and exported as one single component which can then be used as a Provider to pass Context to any child components

## reducers.js

All the changes done in the context are handled by the reducer logic defined in this file.
