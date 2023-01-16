# Chapter 04 - Assignment - Talk is cheap, show me the code

### Q1: Is JSX mandatory for React?
**Solution:** No, it is not mandatory to use JSX in react. JSX itself using React.createElement behind the scene. We are using JSX in React for better code readiblity and code clean and with the help of JSX our code becomes developer friendly.

### Q2: Is ES6 mandatory for React?
**Solution:** No, ES6 is not mandatory for React. We can easily code in react without ES6 and without any issue. However, ES6 have some features like : let and const keywords, Arrow Functions, Multi-line Strings, Default Parameters, Template Literals, Destructuring etc, which makes our code easy to write and easy to review.

### Q3: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
**Solution:** 
**`{TitleComponent} :`** It is a react element.
**`{<TitleComponent/>} :`** It is a react component. If a component does not have any child then we
can write component as self closing tag.
**`{<TitleComponent></TitleComponent>} :`** It is a react component with opening and closing tag. If a component have any child then we can write component like this.

### Q4: How can I write comments in JSX?
**Solution:** Using // or using "Command" + "/"

### Q5: What is `<React.Fragment></React.Fragment>` and `<></>` ?
**Solution:** It is just a component which is exported by a React. It's like any empty tag. Because if we have multiple elements then it should have only one parent. So, either, we use to wrap inside an div tag, but that div tag is not required for us. Therefore, we can wrap our code in an empty tag to get rid of that unnecessary div tag.

### Q6: What is Virtual DOM?
**Solution:** Virtual DOM is not just  a concept of React. This virtaul DOM is a software Engineering concept. React also has something known as virtual DOM.


The Virtual DOM is nothing but the virtual representation of the DOM. Every time with
every change, the virtual DOM gets updated instead of the real DOM.
Like, real DOM, virtual DOM is also represented as a tree structure. Each element is a node in this tree. When a new item is added to the application UI, a node is added to the tree as well. If the state of any of these elements changes, a new virtual DOM tree is created. The virtual DOM computes the best possible way or we can say the minimal operations on the real DOM to make changes to the real DOM. Thus, it makes efficient and better performance by reducing the cost and operations of re-rendering the whole real DOM.

### Q. Why do we need virtual DOM?
**Solution:** We need to virtual DOM something call as Reconsiliation in React.

### Q. Why React is fact?
**Solution:** 


### Q.7 What is Reconciliation?
**Solution:** Reconciliation is a process where the virtual DOM is synced with actual DOM by
reactDOM. React uses Diffing algorithm for performing reconciliation. Reconciliation is the algorithm for diffing two DOM trees.
The algorithm react uses to diff one tree with another to determine which parts needs to be changed.
**`Diff algorithm:`** It is used ot find out the difference between the trees. So once it found out the difference then it only re-renders the specific portion of our app, which is found by diff algorithm.

### Q.8 Ques 8: What is React Fiber?
**Solution:** Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. The idea behind developing Fiber is to achieve these goals:
- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

For achieving this we need to breakdown things in unit of work. That's what a fiber is unit of work. When a function executed a new stack frame gets added in call stack so lets say if rendering is happening then browser if render till that stack frame gets completed and hence we cannot do anything there. there are new browsers which have requestIdleCallback schedules a low priority and requestAnimationFrame which have high priority and needs to be called in next animation frame So we need to break down things so that if possible we can hold the rendering stack frame and perform the more important task, but if we depend on call stack, it will keep doing work until the stack is empty.
Fiber is the reimplementation of call stack, specialized for React components. A single fiber can be considered as a virtual stack frame.
for more details: https://github.com/acdlite/react-fiber-architecture

### Q.9 Why we need keys in React? When do we need keys in React?
**Solution:** Keys help React identify which items have changed, are added, or are removed.To give a
unique identity to every element inside the array, a key is required.
A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.

### Q.10 Can we use index as keys in React?
**Solution:** Yes, we can use index as keys, but it is not recommended to use index as keys because if arrays element gets reordered, so the indexes, and it becomes difficult for react to compare with the old tree and hence react ends up comparing each child element and that key will not be of much use.

### Q.11 What is props in React?
**Solution:** Props are the properties of react components which is used to passed data from
parent component to child component.
Props are arguments passed into React components.
Props data is read-only, which means that data coming from the parent should not be changed by child components.

### Q.12 What is a Config Driven UI ?
**Solution:** Controlling UI from backend data coming from API is basically known as config driven ui where we gets config details from backend apis which decides what ui to displays. e.g., If swiggy is providing offers in city1 but not in city2 the carousel for offers should come only for city 1 and these information ui will get from backend in config form.