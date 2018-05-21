<template lang="html">

  <nav v-sticky="{ zIndex: 0, stickyTop: 440}">
    <ul class="navigator">
      <li class="navigator-item animated fadeInRight">Home</li>
      <li class="navigator-item animated fadeInRight">Knowledge</li>
      <li class="navigator-item animated fadeInRight">Contact Me!</li>
    </ul>
  </nav>

</template>

<script lang="js">
import VueSticky from 'vue-sticky' // Es6 module
  export default  {
    name: 'navigator',
    props: [],
    mounted() {

    },
    data() {
      return {
        top : '0'

      }
    },
    methods: {


    },
    computed: {



    },
    directives: {
  'sticky': VueSticky,
},
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
      animation-delay: 0.5s;
      padding-left: 30px;
    }
    &:last-child {
      background: #424242;
      color: #fafafa;
      animation-delay: 1s;
      padding-left: 35px;
    }
    :before {
      content: "";
    }
  }
}
</style>
