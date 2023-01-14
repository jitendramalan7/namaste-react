# Chapter 3 - Assignment - Laying The Foundation

### Q1: What is JSX?
**Solution:** It is just a fancy way to write HTML inside JS, but is not HTML.
JSX is not mandatory in React, but with the help of JSX it is easy to develop react applications.
JSX element is just syntactic sugar for calling ```React.createElement(component,
props, ...children)```. So, anything you can do with JSX can also be done with just plain JavaScript.
### Q2: Superpowers of JSX?
**Solution:** It is like a html like syntex. JSX can easily convert HTML tags to react elements.

JSX increases the code readibility, and make it developer friendly.

JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.

JSX provides us the power to insert react elements into react components with the help of {}. JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
With the help of jsx we can use components inside component, which is also known as component composition.

### Q3: Role of `type` attribute in script tag? What options can I use there?
**Solution:** The type attribute of the `<script>` element indicates the type of script represented by the element: a classic script, a JavaScript module, an import map, or a data block. The options we can use there is :- module, importmap.

### Q4 `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
**Solution:** 
**`{TitleComponent}`:** It is a react element.
**`{<TitleComponent/>}`:** It is a react component. If a component does not have any child then we
can write component as self closing tag.
**`{<TitleComponent></TitleComponent>}`:** It is a react component with opening and closing tag. If a component have any child then we can write component like this.