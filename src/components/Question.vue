<template>
  <div class="alert">
    <h3>{{ x }} + {{ y }} = ?</h3>
    <hr>
    <div class="buttons">
      <button class="btn btn-success" v-for="number in answers">
        {{ number }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        x: mtRund(100, 200),
        y: mtRund(100, 200)
      }
    },
    computed: {
      answers() {
        var good = this.x + this.y;
        var res = [];
        while (res.length < 4) {
          var num = mtRund(good - 20, good + 20);

            if(res.indexOf(num) === -1) {
              res.push(num);
            }
        }

        return res.sort(function() {
            return Math.random() > 0.5;
        });
      }
    }
  }

  function mtRund (max, min) {
    let diff = max - min;
    return Math.floor(Math.random() * (diff + 1)) + min;
  }
</script>

<style>
  .alert {
    padding-top: 20px;
    background-color: #eee;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
  }
</style>
