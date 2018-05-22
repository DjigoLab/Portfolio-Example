<template lang="html">

  <nav v-sticky="{ zIndex: 0, stickyTop: 245}">
    <ul class="navigator">
<vue-top right='0'>
      <li class="navigator-item animated" 
      v-bind:class="{fadeInRight:firstAnimations.isLoaded, rubberBand:firstAnimations.isHovered}"
       @mouseover='animateMenu(firstAnimations,false,true)' @mouseout='animateMenu(firstAnimations,false,false)' >Home</li>
       </vue-top>
      <li class="navigator-item animated" 
      v-bind:class="{fadeInRight:secondAnimations.isLoaded,delay:secondAnimations.isLoaded, rubberBand:secondAnimations.isHovered}"
       @mouseover='animateMenu(secondAnimations,false,true)' @mouseout='animateMenu(secondAnimations,false,false)'>Knowledge</li>

      <li class="navigator-item animated" 
      v-bind:class="{fadeInRight:thirdAnimations.isLoaded,delay:thirdAnimations.isLoaded, rubberBand:thirdAnimations.isHovered}" 
      @mouseover='animateMenu(thirdAnimations,false,true)' @mouseout='animateMenu(thirdAnimations,false,false)'>Contact Me!</li>

    </ul>
  </nav>

</template>

<script lang="js">
import VueSticky from 'vue-sticky' // Es6 module
import VueTop from 'vue-top';

  export default  {
    name: 'navigator',
    props: [],

    mounted() {

    },
    data() {
      return {
        top : '0',
        firstAnimations : {
        isHovered : false,
        isLoaded : true },
       secondAnimations : {
        isHovered : false,
        isLoaded : true },
       thirdAnimations : {
        isHovered : false,
        isLoaded : true }
    };},
    methods: {
      animateMenu : function (liAnimation, isLoad, isHover ) {
        liAnimation.isLoaded = isLoad
        liAnimation.isHovered = isHover 
      },
      scrollToTop: function (){
        document.documentElement.scrollTop = 0;
      }


    },
    computed: {



    },
    directives: {
  'sticky': VueSticky,
},
components:{
      VueTop
}
}
</script>

<style scoped lang="scss">
.navigator {
  position: absolute;
  right: 0;
  li {
    background: #f5f5f5;
    margin: 5px;
    border: 1px solid #9e9e9e;
    border-width: 1px 0px 1px 1px;
    border-style: solid solid solid solid;
    border-color: #9e9e9e;
    padding: 5px;
    text-align: right;
    list-style: none;
    border-radius: 50px 0px 0px 50px;
    -moz-border-radius: 50px 0px 0px 50px;
    -webkit-border-radius: 50px 0px 0px 50px;
    margin-right: 0;
    &:nth-child(2) {
      padding-left: 30px;
      &.delay {
        animation-delay: 0.5s;
      }
    }
    &:last-child {
      background: #424242;
      color: #fafafa;
      padding-left: 35px;
      &.delay {
        animation-delay: 1s;
      }
    }

    :before {
      content: "";
    }
  }
}
</style>
