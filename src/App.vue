<template>
  <section class="training">
    <h1>Math training</h1>
    <hr>
    <start-screen
      v-if="state == 'start'"
      @onStart="onStart"
    ></start-screen>
    <question v-else-if="state == 'question'"></question>
    <message v-else-if="state == 'message'"></message>
    <result-screen v-else-if="state == 'result'"></result-screen>
     <div v-else>Unknown state</div>
  </section>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        state: 'start'
      }
    },

    methods: {
      onStart () {
        this.state = 'question';
      }
    }
  }
</script>

<style scoped>
  .training {
    max-width: 700px;
    margin: 20px auto;
  }
</style>
