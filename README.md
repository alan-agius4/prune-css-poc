# Prune unused CSS
Pruning unused CSS is one of those features that is requestes over and over again. Especially when we tweet about a new feature on Twitter.

This is a POC of using [PruneCSS](https://purgecss.com/configuration.html#options) to remove unused global CSS.

In our global stylesheet we define 10 CSS classes. 
```css
/* Used */
.one { color: red; }
.two { color: red; }
.three { color: red; }
.four { color: red; }
.five { color: red; }
.six { color: red; }
.seven { color: red; }

/* Unused */ 
.eight { color: red; }
.nine { color: red; }
.ten { color: red; }
```

Classes from one to seven are used in various ways.

```html
<div class="one">...</div>
<div [ngClass]="'two'">...</div>
<div [ngClass]="{'three': true, 'four': true}">...</div>
<div [ngClass]="{'five six' : true}">...</div>
<div class="{{ classNameFromTS }}">...</div>
```

## Try it out
```
yarn
yarn build
```

Output
```js
[
  {
    css: '/* Used */\n' +
      '.one { color: red; }\n' +
      '.two { color: red; }\n' +
      '.three { color: red; }\n' +
      '.four { color: red; }\n' +
      '.five { color: red; }\n' +
      '.six { color: red; }\n' +
      '.seven { color: red; }\n' +
      '/* Unused */\n',
    file: 'dist/prune-css/styles.b78ed4a66876b00457f9.css'
  }
]
```

## How does it work?

The extractor uses RegExp to match each word in each file to see if it is used or not:
https://purgecss.com/extractors.html#default-extractor

## What if classes have special characters or are consumed using interpolation?
These options can be provided using the [safelist](https://purgecss.com/configuration.html#options) option.
