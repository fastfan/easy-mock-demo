<template>
  <div class="my-outbox">
    <div ref="scorll" class="my-outbox-scorll">
      <slot />
    </div>
  </div>
</template>

<script>
import { setStyle } from "@/utils/dom.js";
export default {
  name: "seamlessRolling",
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    },
    time: {
      type: [Number, String],
      default: 1500
    },
    range: {
      type: [Number, String],
      default: 32
    },
    slideNum: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      timer: null,
      index: 0,
      isFirst: true
    };
  },
  computed: {
    list() {
      return this.listData;
    },
    upPx() {
      return Number(this.range) * (this.$root.e || 1)
    }
  },
  methods: {
    stopAction() {
      clearTimeout(this.timer);
    },
    startAction() {
      this.timer = setTimeout(this.scroll, this.time);
    },
    scroll() {
      let el = this.$refs.scorll;
      if (!this.isFirst) {
        for (let i = 0; i < this.slideNum; i++) {
          this.list.push(this.list[i]);
        }
      }
      setStyle(el, {
        transitionDuration: this.time
      });
      this.timer = setTimeout(() => {
        setStyle(el, {
          transitionProperty: "none",
          transform: "translate3d(0,0,0)"
        });
        if (!this.isFirst) {
          for (let i = 0; i < this.slideNum; i++) {
            this.list.shift();
          }
        }
        this.isFirst = false;
        setTimeout(() => {
          setStyle(el, {
            transitionProperty: "all",
            transform: `translate3d(0,-${this.upPx}px, 0)`
          });
        }, 300);
        this.scroll();
      }, this.time);
    }
  },
  mounted() {
    this.scroll();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.my-outbox {
  height: 100%;
  overflow: hidden;
  &-scorll {
    transition-duration: 1.5s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform: translate3d(0, 0, 0);
  }
}
</style>
