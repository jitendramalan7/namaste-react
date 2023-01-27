# Chapter - 08 Let's get Classy

### Q.1 How do you create Nested Routes react-router-dom cofiguration?
**Solution:**
By calling ```{ Outlet } from 'react-router-dom'``` in the parent component of the nested component.
For making nested routes, you need to provide path and element properties in the children of the children as relative path like below:
```jsx
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/About",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    },
])
```
Now, you can access the routes on /about/profile => you will get Profile component rendering in the outlet of About component.

### Q.2 Read abt createHashRouter, createMemoryRouter from React Router docs?
**Solution:**

**`createHashRouter:`** This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". Note: Using hash URLs is not recommended.

**`createMemoryRouter:`** Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
```jsx
const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/events/123"],
    initialIndex: 1,
  });
```
Type Definition:
```jsx
function createMemoryRouter(
  routes: RouteObject[],
  opts?: {
    basename?: string;
    initialEntries?: InitialEntry[];
    initialIndex?: number;
    window?: Window;
  }
): RemixRouter;
```

### Q.3 What is the order of life cycle method calls in Class Based Components?
**Solution:**
It follows the below order:

### **`When only single component:`**
### `------------ Render Phase ------------`
1. Constructor
2. Render
### `------------ Commit Phase ------------`
3. ComponentDidMount
4. Re-render if any state change
5. ComponentDidUpdate
6. Re-render if any state change
7. ComponentWillUnmount
### **`When Parent Child component are present:`**
### `------------ Render Phase ------------`
1. Parent constructor
2. Parent render
3. Child constructor
4. Child render
### `------------ Commit Phase ------------`
5. Child componentDidMount
6. Parent componentDidMount
### **`When Multiple Child component are present:`**
### `------------ Render Phase ------------`
1. Parent constructor
2. Parent render
3. Child constructor 1
4. Child render 1
5. Child constructor 2
6. Child render 2
### `------------ Commit Phase ------------`
7. Child componentDidMount 1
8. Child componentDidMount 2
9. Parent componentDidMount

Because above react want to finish the render phase for all the children so after child render 1 it will show child constructor 2/

### **`When Parent Child component are present where child having api call as well:`**
### `------------ Render Phase ------------`
1. Parent constructor
2. Parent render
3. Child constructor
4. Child render
### `------------ Commit Phase ------------`
5. Parent componentDidMount
6. Child componentDidMount
7. Child re-renders

why this happens because child have an api call and it needs to fetch the data and update DOM, where fetching is asynchronous
### Q.4 Why do we use componentDidMount?
**Solution:**
`componentDidMount` get called after first the render in the react lifecycle and hence it becomes perfect place to call or fetch data from an API.
### Q.5 Why do we use componentWillUnmount? Show with example.
**Solution:**
`componentWillUnmount` gets called just before the component getting unmounted or removed from the DOM. 

`For Example -`  we move from `About` link to `Home` or `Contact`. It can be useful for clearing up the data similar to how we used to clear the setInterval in the Profile component.
### Q.6 (Research) Why do we use super(props) in constructor?
**Solution:**
`Super():` It is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class. Props: It is a special keyword that is used in react stands for properties. Used for passing data from one component to another.
### Q.7 (Research) Why can't we have the callback function of useEffect async?
**Solution:**
`React’s useEffect` hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

Instead, you should use either immediately invoked functions or named function in such scenarios IIF
```jsx
useEffect(() => {
  (async () => {
    const users = await fetchUsers();
    setUsers(users);
  })();
    return () => {
        // this now gets called when the component unmounts
    };
}, []);
```
Named function:
```jsx
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```