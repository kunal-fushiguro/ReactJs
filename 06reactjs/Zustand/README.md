# Zustand Example

This example demonstrates how to create a simple store using Zustand, a small, fast state-management library for React.

## Installation

First, install Zustand using npm:

```bash
npm i zustand

```

## Creating the Store

Create a simple store using the create function from Zustand and export it:

    import { create } from "zustand";

    const cart = (set) => ({
      cart: [],
      addFn: (item) =>
        set((state) => ({
          cart: [item, ...state.cart],
        })),
      rmFn: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    });

    const useCart = create(cart);

    export default useCart;

## Using the Store

Use useCart to get the state:

    const product = useCart((state) => ({
      cart: state.cart,
      addFunction: state.addFn,
      removeFn: state.rmFn,
    }));

## Changing the State

To change the state, use the following functions:

    function Add(val) {
      product.addFunction(val);
      setbtn((prev) => !prev);
    }

    <button
      onClick={() => {
        Add(value);
      }}
    >
      Add Item
    </button>

    function Remove(val) {
      product.removeFn(val.id);
      setbtn((prev) => !prev);
    }

    <button
      onClick={() => {
        Remove(value);
      }}
    >
      Remove Item
    </button>

## Getting the Changed State

To get the updated state, import useCart and use it as follows:

    import useCart from "../store/cart";

    const product = useCart((state) => ({ cart: state.cart }));

    <div className="flex w-[30%] justify-evenly text-xl">
      <span>Total Item's : {product.cart.length} </span>
      <span>
        Total Item's Price : $
        {product.cart.reduce((total, item) => total + item.price, 0)}
      </span>
    </div>
