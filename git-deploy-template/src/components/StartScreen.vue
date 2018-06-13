<template>
  <div class="alert alert-secondary">
    <h3>Are you ready?</h3>
    <button class="btn btn-succes" @click="$emit('onStart')">
      Start
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        state: 'start'
      }
    }
  }
</script>

<style>
  .alert {
    text-align: center;
  }

  h3, .btn {
    margin: 30px 0;
  }
</style>
