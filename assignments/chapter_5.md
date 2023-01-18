### Q.1 Difference between named export, default export and as export?
**Solution:** 
**Named Export:** When we have to export multiple values from a file then we can do named export where each export will have a name and can be used with the same name in different files. 

For importing named export we have to use below syntax:
```
import { xyz } from '.xyz'
```

`NOTE: DO NOT IMPORT WITHOUT USING CURLY BRACES`

**Default export:** When we have to export single value from a file we can do default export. Same name will be used for importing. Here, we don't need to use `{}`
```
import xyz from '.xyz'
```
**star as export(* as export):** This is also similar to named export but here we can rename the imported data. Also, we can use all the exports using the object.
```
import * as abc from '.xyz'
```
now we can use abc.xyz instead of xyz

### Q.2 What is the importance of config.js or constant.js file?
**Solution:** By introducing such files we achieve modularity and clean code. In such files, we can have our data from a separate file keeping the component clean. 

Generally, we keep hardcoded data here.

### Q.3 What are React hooks?
**Solution:** At the end, React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: e.g.,

### Q.4 Why do we use useState hook?
**Solution:** `useState` is a Hook that lets you add React state to function components, similar to class component. It is used to manage states and returns a stateful value and an updater function to update it.
`useState()` hook is used to create state variables.