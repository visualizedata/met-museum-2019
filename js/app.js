/*
    Vue.js generates DOM elements for each project
    using the template tags declared in the
    index.html file.

    eventually, it would be nice to have this template
    entirely declared in JS and bundled with something
    like webpack.

    also, would be nice to remove jQuery and bootstrap
    as dependencies.
*/
var app = new Vue({
  el: '#app',
  data: {
    projects: [],
    students: []
  },
  mounted(){
    // when vue component is mounted to DOM
    // data in the JSON file is loaded into
    // the arrays declared above
    var self = this;
    $.getJSON('./data.json', function(data){
      // project data:
      self.projects = data.projects;
      // student data:
      self.students = data.students;
    });
  },
  methods: {
    getLink(name){
      /* the "students" array is used as a lookup object to find personal
         website links for each student */
      var list = this.students.filter(i => i.name == name);
      /* if no link is found, return a '#' which won't break the link */
      return list.length > 0 ? list[0].url : '#';
    },
    getSlug(title){
      /* take the title value for each project and generate a safe "slug"
         which can be used as the <div> id for our scrolling methods */
      return title.trim()
                      .toLowerCase()
                      .replace(/([^A-Za-z0-9])/g,'-');
    },
    getImageURL(filename){
      if (!filename) {
        return './img/projects/' + 'placeholder.png';
      }
      return './img/projects/' + filename;
    },
    scrollToView(id, event){
      // this method is attached to links with
      // v-on:click to handle our scrolling animation
      event.preventDefault();
      var nav = '#' + id;
      // if id is false, then scroll to top of page
      var top = id === false
                ? 0
                : $(nav).offset().top - $(nav).height() - 80;
      // calculate scroll from top value
      // e.g.:  (position from top) - (height of element) - (padding)
      $('html, body').stop()
                     .animate({ scrollTop: top }, 500, 'easeInOutExpo');
    }
  }
});

app.$nextTick(function () {
  /*  Vue.nextTick waits for DOM
      elements to be rendered before
      running jQuery actions */

  // make app container visible when it's ready
  document.querySelector('#app').style.display = 'block';

  // check for touch screens and hide related elements
  var hasTouch = window.matchMedia('(pointer: coarse)').matches;
  if (hasTouch) {
    $(".no-touch").hide();
  }

  // activate tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
