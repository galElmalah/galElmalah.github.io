

Vue.component('project-view', {
  template:`
  <div>
  <h3>{{title}}</h3>
    <div class="card">
      <div class="card-image">
        <image-slider :images="images"></image-slider>
      </div>
      <project-links-tray :links="links"/>
      <div class="card-content">
        <div class="content" v-html="description">
        <br>
        </div>
        <tags-tray :techs="techs"/>
      </div>
    </div>
  </div>
  `,
  props:['title', 'description', 'images', 'links', 'techs'],
})

Vue.component('image-slider', {
  template: `
        <div class="image-slider">
            <p v-if="length" class = "icons">
            <a class="left-arrow" @click="prev"><i class="fas fa-angle-left"></i>

            </a><a @click="next"><i class="fas fa-angle-right"></i>
            </a>
          </p>
          <transition-group name='fade' tag='div'>
          <div
           v-for="number in [index]"
           :key='number'
           >
             <img
                 :src="images[index].src"
                 />
        </div>
        </transition-group>
        </div>
          `,
  props: ['images'],
  data() {
    return{
      index: 0
    }
  },
  computed: {
    length(){
      return this.images.length > 1;
    }
  },
  methods: {
    next() {
      if(this.index < this.images.length-1){
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev() {
      if(this.index !=0){
        console.log(this.index);
        this.index--;
      } else {
        this.index = this.images.length-1;
      }
    }
  }

})

Vue.component('project-links-tray', {
  template:`
  <div class="has-text-centered">
    <a class="button is-primary is-outlined project-button" :href="links.github">Code</a>
    <a v-if="links.demo" class="button is-primary is-outlined project-button" :href="links.demo">Demo</a>
  </div>
  `,
  props:['links']
})


Vue.component('tags-tray', {
  template:`
    <div>
      <span class="tag is-large" v-for="tech in techs">{{tech}}</span>
    </div>

  `,
  props:['techs']
})


new Vue({
  template:`
  <div>
    <project-view v-for="(project, i) in projects" :description="project.description" :images="project.images" :links="project.links" :techs="project.techs" :key="i" :title="project.title"></project-view>
  </div>
  `,
  data: {
    projects: [{
      title:'Blog System',
      description: `Personal blog system that I have built to gain some experience with the MEAN stack.<br>
      This web bloging system lets an admin ( pref-defined )
      to manage a blog ( creating/deleting/editing ) posts.<br>
      Also i have implemnted an express-session based authentiction system that hashed all users password and stroe them securly blablabla need to refactor
      `,
      images: [{
        src: '../assets/images/blogContent.png',
      }, {
        src: '../assets/images/adminState.jpg',
      },
    ],
      links:{
        github:'https://github.com/galElmalah/blog',
        demo:'https://app-blog-gal.herokuapp.com/'
      },
      techs:['Node.js','JavaScript','Express.js','EJS', 'Moongoose', 'Materialize CSS', 'HTML', 'CSS', 'Heroku'],
    },
    {
      title:'Personal Website',
      description: `My personal website.
      `,
      images: [{
        src: '../assets/images/personalWebsite/ready/pwebsite.jpg',
      }, {
        src: '../assets/images/personalWebsite/ready/pwebsite_ptoject.jpg',
      }, {
        src: '../assets/images/personalWebsite/ready/pwebsite_getintouch.jpg',
      }, {
        src: '../assets/images/personalWebsite/ready/mobilewebsite.jpg',
      }, {
        src: '../assets/images/personalWebsite/ready/mobile_menu.jpg',
      }
    ],
      links:{
        github:'',
        demo:'https://galelmalah.github.io/'
      },
      techs:['JavaScript','Vue.js', 'HTML', 'CSS', 'Bulma CSS'],
    }]
  },
  el:'#project-view',
})