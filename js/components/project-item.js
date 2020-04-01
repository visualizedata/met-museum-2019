Vue.component('project-item', {
  data: function() {
    return {}
  },

  props: ['title', 'description', 'url', 'author', 'image', 'author_url'],

  methods: {},

  template: `<div class="bg-white db mb4 shadow-2">
  <div class="w-100">
    <img
      :src='"./data/images/" + image'
      class="w-100 pointer"
      v-on:click="window.open(url)"
    />
  </div>

  <div class="pa3">
    <div class="flex align-top justify-between">
      <div>
        <a
          :href="author_url"
          class="dib dim design-black mb2 f5 link"
          >{{ author }}</a>
        <h1 class="f4 mt0 mb0">{{ title }}</h1>
      </div>

      <div class="flex-shrink-0">
        <a
          class="dib dim link bg-red pv2 ph2 white br3 f6"
          :href="url"
          >Launch Project</a>
      </div>
    </div>

    <p class="f5 design-black measure">{{ description }}</p>
  </div>
</div>`
})
