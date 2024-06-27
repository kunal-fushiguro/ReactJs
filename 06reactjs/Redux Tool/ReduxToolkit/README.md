# Redux Toolkit and React-Redux Setup Guide

This guide provides a step-by-step approach to set up Redux Toolkit and React-Redux in a React application.

### Installation

First, install Redux Toolkit and React-Redux:

    npm install @reduxjs/toolkit react-redux

### Create the Redux Store

Create a Redux store using configureStore from Redux Toolkit.

    // redux/store.js
    import { configureStore } from '@reduxjs/toolkit';

    const store = configureStore({
      reducer: {},
    });

    export default store;

### Wrap the App Component with Provider

Wrap your App component with the Provider and pass the store as a prop.

    // index.js or App.js (depending on your project structure)
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import store from './redux/store';
    import App from './App';

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );

### Create Slices (Features) with Redux Toolkit

Create a slice for managing product states.

    // redux/slices/product.js
    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      value: [],
    };

    export const product = createSlice({
      name: 'product',
      initialState: initialState,
      reducers: {
        addFn: (state, action) => {
          state.value.push(action.payload);
        },
        rmFn: (state, action) => {
          state.value = state.value.filter((item) => item.id !== action.payload);
        },
      },
    });

    export const { addFn, rmFn } = product.actions;
    export default product.reducer;

### Import Slice Reducer in Store

Update the store to include the product slice reducer.

    // redux/store.js
    import { configureStore } from '@reduxjs/toolkit';
    import productReducer from './slices/product';

    const store = configureStore({
      reducer: {
        product: productReducer,
      },
    });

    export default store;

### Use useDispatch and useSelector

Use useDispatch to Change State

    // components/ProductComponent.js
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addFn, rmFn } from '../redux/slices/product';

    const ProductComponent = () => {
      const [isAdded, setIsAdded] = useState(false);
      const dispatch = useDispatch();

      const handleAddCart = (product) => {
        if (!isAdded) {
          dispatch(addFn(product));
        } else {
          dispatch(rmFn(product.id));
        }
        setIsAdded((prev) => !prev);
      };

      return (
        <div>
          <button onClick={() => handleAddCart({ id: 1, name: 'Product 1' })}>
            {isAdded ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      );
    };

    export default ProductComponent;

Use useSelector to Get State

    // components/ProductList.js
    import React from 'react';
    import { useSelector } from 'react-redux';

    const ProductList = () => {
      const products = useSelector((state) => state.product.value);

      return (
        <div>
          <h2>Product List</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default ProductList;
