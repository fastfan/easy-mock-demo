import Vue from "vue";
function scroll(el, height = 38, time = 1500) {
  let initTop = 0;
  setInterval(function() {
    initTop += height;
    if (initTop >= el.offsetHeight) {
      initTop = 0;
    }
    el.style =
      "transition: transform 1s ease-in-out; transform: translateY(-" +
      initTop +
      "px)";
  }, time);
}
export default Vue.directive("rolling", {
  bind: (el, binding) => {
    scroll(el, binding.value[0], binding.value[1]);
  },
  update: (el, binding) => {
    scroll(el, binding.value[0], binding.value[1]);
  },
  unbind: () => {}
});
