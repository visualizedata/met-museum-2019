/*
    Vue.js generates DOM elements for each project
    using the template tags above.
*/
var app = new Vue({
  el: '#app',
  data: {
    projects: [],
    students: []
  },
  mounted(){
    var self = this;
    $.getJSON('./data.json', function(data){
      self.projects = data.projects;
      self.students = data.students;
    });
  },
  methods: {
    getLink(name){
      var list = this.students.filter(i=> i.name == name);
      if( list.length > 0){
        return list[0].url;
      } else {
        return '#';
      }
    },
    getSlug(title){
      var slug = title.trim().replace(/([^A-Za-z0-9])/g,'-').toLowerCase();
      return slug;
    },
    getImageURL(filename){
      if (!filename) {
        return './img/projects/' + 'placeholder.png';
      }
      return './img/projects/' + filename;
    },
    scrollToView(id, event){
      event.preventDefault();
      var nav = '#' + id;
      // calculate scroll from top value
      // e.g.:  (position from top) - (height of element) - (padding)
      var top = $(nav).offset().top - $(nav).height() - 80;
      if (nav.length > 1) {
        $('html, body').stop().animate({
          scrollTop: top
        }, 500, 'easeInOutExpo', function() {});
      }
    }
  }
});

app.$nextTick(function () {
  /*
      Vue.nextTick waits for DOM
      elements to be rendered before
      running jQuery actions
  */
  document.querySelector('#app').style.display = 'block';

  // check for touch screens
  var hasTouch = window.matchMedia('(pointer: coarse)').matches;
  if (hasTouch) {
    $(".no-touch").hide();
  }

  // activate tooltip
  $('[data-toggle="tooltip"]').tooltip();

});
