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
    site_url: 'https://parsons.nyc/met-museum-2019',
    department: 'MS Data Visualization',
    page_title: 'The Metropolitan Museum Partnership 2019',
    projects: [],
    students: [],
    shareModalVisible: false,
    copy_text: 'Copy Link',
    scrollY: 0
  },
  mounted() {
    // when vue component is mounted to DOM
    // data in the JSON file is loaded into
    // the arrays declared above
    var self = this
    window
      .fetch('./data/data.json')
      .then(res => res.json())
      .then(data => {
        // project data:
        self.projects = data.projects
        // student data:
        self.students = data.students
      })

    setTimeout(() => {
      this.stickySidebar()
    }, 200)

    window.addEventListener('resize', () => {
      this.stickySidebar()
    })
  },
  methods: {
    stickySidebar() {
      let sticky = this.$refs.sticky
      let sticky_pos = window.innerHeight - sticky.offsetHeight
      sticky.style.top = sticky_pos + 'px'
    },
    copyLink(event) {
      event.preventDefault()
      var copyTextarea = this.$refs.copy_link_input
      copyTextarea.focus()
      copyTextarea.select()

      try {
        var successful = document.execCommand('copy')
        var msg = successful ? 'successful' : 'unsuccessful'
        this.copy_text = 'Done!'
        // console.log('Copying text command was ' + msg)
      } catch (err) {
        this.copy_text = 'Unable to Copy'
        // console.log('Oops, unable to copy')
      }
    },
    shareModal(event) {
      event.preventDefault()
      this.shareModalVisible = !this.shareModalVisible

      if (this.shareModalVisible == false) {
        this.copy_text = 'Copy Link'
      }
    },
    getLink(name) {
      /* the "students" array is used as a lookup object to find personal
         website links for each student */
      var list = this.students.filter(i => i.name == name)
      /* if no link is found, return a '#' which won't break the link */
      return list.length > 0 ? list[0].url : '#'
    },
    changeView(e) {
      e.preventDefault()
      let info = this.$refs.infobar
      let projects = this.$refs.projectbar
      let infobutton = this.$refs.infobutton
      let projectbutton = this.$refs.projectbutton

      ;[('db', 'dn')].forEach(i => {
        info.classList.toggle(i)
        projects.classList.toggle(i)
      })
      ;['active'].forEach(i => {
        infobutton.classList.toggle(i)
        projectbutton.classList.toggle(i)
      })
    },
    scrollToTop(e) {
      e.preventDefault()
      this.$refs.scroll.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    updateScroll() {
      this.scrollY = this.$refs.scroll.scrollTop
    }
  }
})

app.$nextTick(function() {
  /*  Vue.nextTick waits for DOM
      elements to be rendered before
      running jQuery actions */

  // make app container visible when it's ready
  document.querySelector('#loading').style.display = 'none'
  document.querySelector('#app').style.display = 'block'
})
