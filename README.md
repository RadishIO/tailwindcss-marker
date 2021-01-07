# tailwindcss-marker
Tailwind CSS plugin to style list and summary markers - [Download Link](https://www.npmjs.com/package/@radishio/tailwindcss-marker)

## Install
```sh
npm install @radishio/tailwindcss-marker
```

## Generated Classes
This plugin generates the following classes, for styling list markers, as well as `<summary>` markers.

Based on the following configuration, the following classes are created.

```js
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      brand: '#ed1c16' // Coca-Cola Brand
      ...
    }
  }
}
```

### List Markers

For uniform styling of all list items, `.list-marker-<colorname>` is used on a `<ul>` or `<ol>`.

```css
-- Example Brand
.list-marker-brand > ::marker {
    color: #ed1c16
}
```

```html
<!-- All markers are in the color as defined in the CSS. -->
<ul class="m-10 p-2 bg-gray-300 list-inside list-disc list-marker-brand">
  <li>This is a simple list example </li>
  <li>Yay!</li>
</ul>
```

### List Item Markers / Summary Markers

For styling individual `<li>` elements or `<summary>` elements, the use of the `.marker-<colorname>` class is provided.

```css
.marker-brand::-webkit-details-marker, .marker-brand::marker {
    color: #ed1c16
}
```

```html
<ul class="m-10 p-2 bg-gray-300 list-inside list-disc">
  <!-- Marker Color as defined in CSS -->
  <li class="marker-brand">This is a simple list example </li>
  <!-- Default Color -->
  <li>Yay!</li>
</ul>
```