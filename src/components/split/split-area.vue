<template>
    <div :class="classes" style="">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
  import Emitter from '../../mixins/emitter';
  
  export default {
    name: 'SplitArea',
    mixins: [Emitter],
    props: {
      size: {
        type: Number,
        default: 50
      },
      minSize: {
        type: Number,
        default: 100
      }
    },
    computed: {
        classes () {
            return `split split-` + this.$parent.direction
        }
    },
    watch: {
        'size' (val) {
            this.$parent.changeAreaSize()
        },
        'minSize' (val) {
            this.$parent.changeAreaSize()
        }
    }
  };
</script>