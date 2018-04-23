
Vue.component('project-view', {
  template:`
  <div>
  <h3>{{title}}</h3>
  <div class="card">
  <div class="card-image">
    <figure class="image">
      <img :src="image.url" :alt="image.alt">
    </figure>
  </div>
  <project-links-tray :links="links"/>
  <div class="card-content">
    <div class="content">
      {{description}}
      <br>
      <tags-tray :techs="techs"/>
    </div>
  </div>
</div>
</div>
  `,
  props:['title', 'description', 'image', 'links', 'techs'],
})

Vue.component('project-links-tray', {
  template:`
  <div class="has-text-centered">
    <a class="button is-primary is-outlined project-button" href="links.github"> see the Code</a>
    <a v-if="links.demo" class="button is-primary is-outlined project-button" href="links.demo">Demo</a>
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
    <project-view v-for="project in projects" :description="project.description" :image="project.image" :links="project.links" :techs="project.techs" :key="project.description" :title="project.title"></project-view>
  </div>
  `,
  data: {
    projects: [{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    },{
      title:'Blog System',
      description: 'ldkjfldskjf dksflksdnflkdsndn dnxmnv,xcnvx,cmvnx,vnx,cvn dsfnsd,fmnsdm,fnd ,mdnf,dsmnf,sfn,sdnf ,dnf,sdmfnnsd,f',
      image: {
        url: '../assets/images/skills4.png',
        alt : 'some shit'
      },
      links:{
        github:'ddd',
        demo:'ddd'
      },
      techs:['node','js','express','blabla']
    }]
  },
  el:'#project-view',
})