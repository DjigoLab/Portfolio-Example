<template lang="html">

  <div class="portfolio-image">
   <div class="user-info">
     <img src="../assets/me.jpg" >
     <h1 class="name"></h1>
     <vue-typer text='¡Buenas!' :repeat='0' ></vue-typer>
     <p class="description"> <vue-typer :text=description :pre-type-delay='1500' :repeat='0'></vue-typer></p>
     <p class="description"> <vue-typer :text=phrase :pre-type-delay='6500' :repeat='0'></vue-typer></p>
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
        description: "I'm Antonio Djigo, Front-end Developer and Back-end learner.",
        phrase: "Feel free to explore my website!"

      }
    },
    methods: {

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

  img {
    width: 100%;
    max-height: 300px;
    border-radius: 50px 50px 0px 0px;
    object-fit: cover;
    -webkit-box-shadow: 0px -8px 46px -11px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px -8px 46px -11px rgba(0, 0, 0, 0.35);
    box-shadow: 0px -8px 46px -11px rgba(0, 0, 0, 0.35);
  }
  .user-info {
    padding: 20px;

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
