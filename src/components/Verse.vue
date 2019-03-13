<template>
  <div class="verse">
    <div class="verse__hero">
      <div class="container">
        <h5 class="verse__meta">verse of the day</h5>
        <h2 class="verse__reference">{{ this.verse.reference }}</h2>
      </div>
    </div>
    <div class="container">
      <div class="verse__copy">
        <h4>{{ this.verse.text }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { https } from "../axios.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      verse: {},
      bibleVersion: "de4e12af7f28f599-01",
      error: []
    };
  },
  created() {
    https
      .get(
        `bibles/${this.bibleVersion}/search?query=?${
          this.randomVowel
        }?&limit=10000&sort=${this.randomSort}`
      )
      .then(response => {
        // console.log(response);
        this.verse =
          response.data.data.verses[
            Math.floor(Math.random() * response.data.data.verses.length)
          ];
        // console.log(this.verse);
      })
      .catch(e => {
        this.error = e;
      });
  },
  computed: {
    randomVowel: () => {
      return "aeiouy"[Math.floor(Math.random() * "aeiouy".length)];
    },
    randomSort: () => {
      let sortOptions = ["reverse-canonical", "canonical", "relevance"];
      return sortOptions[Math.floor(Math.random() * sortOptions.length)];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.verse__hero {
  background-color: #a0ddff;
  font-family: monospace, sans-serif;
  font-weight: 600 !important;
  padding: 20px 0;
  text-align: left;
  margin: 0;
}
.verse__meta {
  margin: 0;
}
.verse__reference {
  margin: 0;
}
.verse__copy {
  padding-top: 50px;
  max-width: 600px;
  margin: 0 auto;

  h4 {
    font-family: monospace, sans-serif;
  }
}
</style>
