<template>
  <div id="app">
  <Menu></Menu>
   <Card></Card>
    <router-view/>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Menu from "@/components/Menu";

export default {
  components: { Card, Menu} ,
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-flow: column;
  background: #fafafa;
  font-family: "Montserrat", sans-serif;
}
</style>
