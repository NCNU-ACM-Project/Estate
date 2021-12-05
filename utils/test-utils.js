import * as React from 'react'
import { render } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux';
import { store } from '../src/store';

// not sure how, but use 2 more promose will cause error, just replace the global Promise
// ref https://github.com/callstack/react-native-testing-library/issues/379#issuecomment-762597260
import Promise from "promise-polyfill";
global.Promise = Promise;

const AllTheProviders = ({children}) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return ( 
    <Provider store={store}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}