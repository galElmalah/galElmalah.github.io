!function(e){function t(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,i){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,s){"use strict";Vue.component("project-view",{template:'\n  <div>\n  <h3>{{title}}</h3>\n    <div class="card">\n      <div class="card-image">\n        <image-slider :images="images"></image-slider>\n      </div>\n      <project-links-tray :links="links"/>\n      <div class="card-content">\n        <div class="content" v-html="description">\n        <br>\n        </div>\n        <tags-tray :techs="techs"/>\n      </div>\n    </div>\n  </div>\n  ',props:["title","description","images","links","techs"]}),Vue.component("image-slider",{template:'\n        <div class="image-slider">\n            <p v-if="length" class = "icons">\n            <a class="left-arrow" @click="prev"><i class="fas fa-angle-left"></i>\n\n            </a><a @click="next"><i class="fas fa-angle-right"></i>\n            </a>\n          </p>\n          <transition-group name=\'fade\' tag=\'div\'>\n          <div\n           v-for="number in [index]"\n           :key=\'number\'\n           >\n             <img\n                 :src="images[index].src"\n                 />\n        </div>\n        </transition-group>\n        </div>\n          ',props:["images"],data:function(){return{index:0}},computed:{length:function(){return this.images.length>1}},methods:{next:function(){this.index<this.images.length-1?this.index++:this.index=0},prev:function(){0!=this.index?(console.log(this.index),this.index--):this.index=this.images.length-1}}}),Vue.component("project-links-tray",{template:'\n  <div class="has-text-centered">\n    <a class="button is-primary is-outlined project-button" :href="links.github">Code</a>\n    <a v-if="links.demo" class="button is-primary is-outlined project-button" :href="links.demo">Demo</a>\n  </div>\n  ',props:["links"]}),Vue.component("tags-tray",{template:'\n    <div>\n      <span class="tag is-large" v-for="tech in techs">{{tech}}</span>\n    </div>\n\n  ',props:["techs"]}),new Vue({template:'\n  <div>\n    <project-view v-for="(project, i) in projects" :description="project.description" :images="project.images" :links="project.links" :techs="project.techs" :key="i" :title="project.title"></project-view>\n  </div>\n  ',data:{projects:[{title:"Blog System",description:"Personal blog system that I have built to gain some experience with the MEAN stack.<br>\n      This web bloging system lets an admin ( pre-defined )\n      to manage a blog ( creating/deleting/editing ) posts.\n      ",images:[{src:"../assets/images/blogSystem/ready/LoginScreen.jpg"},{src:"../assets/images/blogSystem/ready/blogContent.jpg"},{src:"../assets/images/blogSystem/ready/blogPost.jpg"},{src:"../assets/images/blogSystem/ready/mobile.jpg"},{src:"../assets/images/blogSystem/ready/newPosts.jpg"}],links:{github:"https://github.com/galElmalah/blog",demo:"https://app-blog-gal.herokuapp.com/"},techs:["Node.js","JavaScript","Express.js","EJS","Moongoose","Materialize CSS","HTML","CSS","Heroku"]},{title:"Personal Website",description:"My personal website. I used Vue.js 2 to automate some of the components rendering and a custom script to load the images.\n      ",images:[{src:"../assets/images/personalWebsite/ready/pwebsite.jpg"},{src:"../assets/images/personalWebsite/ready/pwebsite_ptoject.jpg"},{src:"../assets/images/personalWebsite/ready/pwebsite_getintouch.jpg"},{src:"../assets/images/personalWebsite/ready/mobilewebsite.jpg"},{src:"../assets/images/personalWebsite/ready/mobile_menu.jpg"}],links:{github:"",demo:"https://galelmalah.github.io/"},techs:["JavaScript","Vue.js","HTML","CSS","Bulma CSS"]}]},el:"#project-view"})}]);