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
            console.log('this.$parent.direction', this.$parent.direction)
            return `split split-` + this.$parent.direction
        }
    },
    mounted () {
        console.log('abc')
    },
    data () {
        return{
            name: 'abc'
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