# Vue-Split-Panel

- __Fast:__ No overhead or attached window event listeners, uses pure CSS for resizing.
- __Compatible:__ Works great in IE9, and _even loads in IE8_ with polyfills. Early Firefox/Chrome/Safari/Opera supported too.

## Installation

npm:

```
$ npm install --save vue-split-panel
```

## Getting Started

```js
// using ES6 modules
import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)
```

## Usage Examples

A split with two elements, starting at 25% and 75% wide.

```html
<Split style="height: 500px;">
    <SplitArea :size="25">
        panel left
    </SplitArea>
    <SplitArea :size="75">
        panel right
    </SplitArea>
</Split>
```

A split with three elements, starting with even widths with 100px, 100px and 300px minimum widths, respectively.

```html
<Split style="height: 500px;">
    <SplitArea :size="33" :minSize="100">
        panel left
    </SplitArea>
    <SplitArea :size="33" :minSize="100">
        panel center
    </SplitArea>
    <SplitArea :size="33" :minSize="300">
        panel right
    </SplitArea>
</Split>
```

A vertical split with two elements.

```html
<Split style="height: 500px;" :direction="vertical">
    <SplitArea>
        panel left
    </SplitArea>
    <SplitArea>
        panel center
    </SplitArea>
</Split>
```

A Setting the gutter size to 20px.

```html
<Split style="height: 500px;" :gutterSize="20">
    <SplitArea>
        panel left
    </SplitArea>
    <SplitArea>
        panel center
    </SplitArea>
</Split>
```

Callbacks that can be added on drag (fired continously), drag start and drag end. If doing more than basic operations in `onDrag`, add a debounce function to rate limit the callback.

```html
<Split style="height: 500px;" @onDragEnd="onDragEnd" @onDragStart="onDragStart" onDrag="onDrag">
    <SplitArea>
        panel left
    </SplitArea>
    <SplitArea>
        panel center
    </SplitArea>
</Split>
```
```
methods: {
    onDragStart (size) {
        console.log('Drag Start', size) // callback existing size
    },
    onDrag (size) {
        console.log('on Drag', size) // callback new size
    },
    onDragEnd (size) {
        console.log('Drag End', size) // callback new size
    }
}
```
A Reset the panel and get new sizes

```html
<Split style="height: 500px;" ref="mySplit">
    <SplitArea>
        panel left
    </SplitArea>
    <SplitArea>
        panel center
    </SplitArea>
</Split>
```
```
methods: {
    Reset () {
        console.log(this.$refs.mySplit.reset())
    }
    getSizes () {
        console.log(this.$refs.mySplit.getSizes())
    }
}
```

## API

#### Split props

| Property | Type | Default | Description |
|---|---|---|---|
| `gutterSize` | Number | 10 | Gutter size in pixels. |
| `direction` | String | 'horizontal' | Direction to split: horizontal or vertical. |

#### Split events

| Event Name | Description | Return Value
|---|---|---|
| `onDrag` | Callback on drag. | current size |
| `onDragStart` | Callback on drag start. | new size |
| `onDragEnd` | Callback on drag end. | new size |

#### Split methods

| Method Name | Description | Arguments
|---|---|---|
| `reset` | Reset panel. | none |

#### SplitArea props

| Property | Type | Default | Description |
|---|---|---|---|
| `sizes` | Array | | Initial sizes of each element in percents or CSS values. |
| `minSize` | Number or Array | 100 | Minimum size of each element. |


## Important Note

vue-split-panel does not set CSS beyond the minimum needed to manage the width or height of the elements.


## Browser Support

This library uses [Split.js](https://github.com/nathancahill/Split.js). These features are supported in the following browsers:

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> | [<img src="http://i.imgur.com/70as3qf.png" height="48px" alt="BrowserStack logo">](http://browserstack.com/) |
|:---:|:---:|:---:|:---:|:---:|:----|
| 22+ ✔ | 6+ ✔ | 9+ ✔ | 15+ ✔ | 6.2+ ✔ | Sponsored ✔ |

## Built With

* [Webpack](https://webpack.js.org/) - The web framework used
* [gulp](http://gulpjs.com/) - Automated development toolkit

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/bajaniyarohit/vue-split-panel/blob/master/LICENSE) file for details