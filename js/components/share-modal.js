Vue.component('share-modal', {
  data: function() {
    return {}
  },

  props: {},

  methods: {},

  template: `<div
class="fixed top-0 left-0 w-100 h-100 bg-white-70 z-9999 flex items-center justify-center overflow-y-scroll"
>
  <div class="bg-white shadow-1 pa4 tc f3 br4 w-100 mw5">
  <slot></slot>
  </div>
</div>`
})
