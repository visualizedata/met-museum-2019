Vue.component('nav-bar', {
  data: function() {
    return {}
  },

  props: {},

  methods: {
    toggle: function() {
      this.isVisible = !this.isVisible
    }
  },

  template: `
  <div
    class="fixed top-0 left-0 db w-100 bg-white flex items-center justify-between z-999 shadow-1"
  >
    <slot></slot>
  </div>
  `
})
