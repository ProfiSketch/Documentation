<template>
  <i :style="styles" class="material-icons">{{ name }}</i>
</template>

<script lang="ts">
import Vue from "vue";

// Fonts
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#505050"
    }
  },
  computed: {
    styles() {
      return {
        color: this.color
      };
    }
  }
});
</script>