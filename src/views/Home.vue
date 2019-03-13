<template>
  <div class="home">
    <Verse />
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
