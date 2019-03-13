<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Verse msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Verse from "@/components/Verse.vue";

export default {
  name: "home",
  components: {
    Verse
  }
};
</script>
