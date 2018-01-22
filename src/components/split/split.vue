<template>
    <div class="split">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter';
  import Split from 'split.js'
  export default {
    name: 'Split',
    mixins: [Emitter],
    props: {
      direction: {
        type: String,
        default: 'horizontal'
      },
      gutterSize: {
          type: Number,
          default: 8
      }
    },
    data() {
        return {
            elements: [],
            sizes: [],
            minSizes: [],
            instance : null
        }
    },
    methods: {
        init () {
            let self = this;
            if (self.instance !== null) {
                self.instance.destroy()
            }
            self.instance = null
            self.instance = Split(self.elements, {
                direction: self.direction,
                sizes: self.sizes,
                minSize: self.minSizes,
                gutterSize: self.gutterSize,
                cursor: self.direction === 'horizontal' ? 'col-resize' : 'row-resize',
                onDrag: function () {
                    self.$emit('onDrag', self.instance.getSizes());
                },
                onDragStart: function () {
                    self.$emit('onDragStart', self.instance.getSizes());
                },
                onDragEnd: function (str) {
                    self.$emit('onDragEnd', self.instance.getSizes());
                }
            })
        },
        changeAreaSize () {
            let self = this
            self.sizes = []
            self.minSizes = []
            self.$slots.default.forEach(vnode => {
                if (vnode.tag && vnode.tag.indexOf('SplitArea') > -1) {
                    self.sizes.push(vnode.componentInstance.size)
                    self.minSizes.push(vnode.componentInstance.minSize)
                } 
            })
            self.init()
        },
        reset () {
            this.init()
        },
        getSizes () {
            return this.instance.getSizes()
        }
    },
    mounted() {
        let self = this
        self.elements = []
        self.sizes = []
        self.minSizes = []
        self.$slots.default.forEach(vnode => {
            if (vnode.tag && vnode.tag.indexOf('SplitArea') > -1) {
                // vnode.componentOptions.propsData     ******** Get Prop data
                self.elements.push(vnode.elm)
                self.sizes.push(vnode.componentInstance.size)
                self.minSizes.push(vnode.componentInstance.minSize)
            } 
        })
        self.init()
    },
    watch: {
        'direction' (val) {
            this.init()
        },
        'gutterSize' (val) {
            this.init()
        }
    },
  };
</script>

 <style>
  .split {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}
.gutter.gutter-horizontal {
  cursor: col-resize;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
}
.gutter.gutter-vertical {
  cursor: row-resize;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
}
.split.split-horizontal, .gutter.gutter-horizontal {
  height: 100%;
  float: left;
}
</style>

