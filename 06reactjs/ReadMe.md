# State Management

State management in React refers to the way in which data, or "state", is managed within a React application.

### Key Concepts You Should Know

<b>State</b> : A built-in object in class components or a hook in functional components that allows components to manage and react to changes over time.
</br>
</br>
<b>Props</b> : props are read-only attributes passed from parent to child components, used to pass data and event handlers down the component tree.
</br>
</br>
<b>Context</b> : A way to pass data through the component tree without having to pass props down manually at every level.
</br>
</br>
<b>Reducers</b> : Functions that take the current state and an action as arguments and return a new state.
</br>

### Component State Management

Handling state within individual components using hooks like useState (functional components) or this.state (class components).
</br>
<b>Problem</b> : How to handle state locally within a single component ?
</br>
<b>Solution</b> : Hooks like "useState" allow state to be declared and managed within functional components.

### Shared State Across Components

Managing state that needs to be accessed and updated by multiple components.
</br>
<b>Problem</b> : Passing state and functions through multiple layers of components (prop drilling) can become cumbersome(Difficult to read and handle) ?
</br>
<b>Solution</b> : Context API provides a way to share state globally across the component tree without the need for prop drilling.

### Global State Management

Managing state that needs to be shared and synchronized across the entire application.
</br>
<b>Problem</b> : Complex applications require a centralized way to manage state to avoid inconsistent state and hard-to-track bugs ?
</br>
<b>Solution</b> : State management libraries like Redux, MobX, or Zustand provide a global store and patterns for managing state in a predictable manner.
