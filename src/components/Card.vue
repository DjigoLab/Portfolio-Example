<template lang="html">

  <div class="portfolio-image">
   <div class="user-info">
     <img class="animated " :class='{shake:isClicked, slideInDown:isStatic}' @click='animatePic(false,true)' src="../assets/me.jpg" >
     <h1 class="name"></h1>
     <vue-typer text='¡Buenas!' :repeat='0' ></vue-typer>
     <p class="description"> <vue-typer :text=description :pre-type-delay='1200' :repeat='0'></vue-typer></p>
     <p class="description"> <vue-typer :text=phrase :pre-type-delay='6200' :repeat='0'></vue-typer></p>
    <span class="social-media">
     <ul class="social-list">
       <li><i class="devicon-github-plain-wordmark colored"></i></li>
       <li> <i class="devicon-twitter-plain colored"></i></li>
     </ul>
     </span>
   </div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'card',
    props: [],
    mounted() {

    },
    data() {
      return {
        name: "",
        description : "I'm Antonio Djigo, Front-end Developer and Back-end learner.",
        phrase : "Feel free to explore my website!",
        isStatic : true,
        isClicked : false,


      }
    },
    methods: {
      animatePic : function (isStat, isClick) {
       
        this.isStatic = isStat
        this.isClicked = isClick 

      },
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.portfolio-image {
  display: flex;
  flex-flow: column;

  justify-content: center;
  border-radius: 50px;


  .user-info {
    padding: 20px;
    display: flex;
    flex-flow: column;
  img {
    width: 70%;
    align-self: center;
    max-height: 300px;
    border-radius: 50px 50px 0px 0px;
    object-fit: cover;
		box-shadow: 0px 40px 25px 10px rgba(0,0,0,0.2);


  }
    .name {
      z-index: 200;
      background: #fafafa;
    }
    .description {
      white-space: normal;
      z-index: 200;
    }
    .social-media {
      .social-list {
        display: flex;
        background: #e0e0e0;
        justify-content: space-around;
        padding: 0px;
        position: absolute;
        width: 100%;
        left: 0;
        li {
          list-style-type: none;
          font-size: 40px;
          padding: 15px;
        }
      }
    }
  }
}



  </style>
