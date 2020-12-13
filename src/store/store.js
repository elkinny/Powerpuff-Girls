import { useMemo } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

function initStore(initialState) {
  return createStore(
    (state) => state,
    initialState,
    composeWithDevTools(),
  );
}

const initializeStore = (preloadedState) => {
  let currentStore = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    currentStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return currentStore;
  if (!store) store = currentStore;

  return currentStore;
};

const useRedux = (initialState) => useMemo(() => initializeStore(initialState), [initialState]);

export { initializeStore, useRedux };
