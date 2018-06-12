<template>
  <div class="alert">
    <h3>{{ x }} + {{ y }} = ?</h3>
    <hr>
    <div class="buttons">
      <button class="btn btn-success" v-for="number in answers" @click="onAnswer(number)">
        {{ number }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['settings'],
    data () {
      return {
        x: mtRund(this.settings.from, this.settings.to),
        y: mtRund(this.settings.from, this.settings.to)
      }
    },
    computed: { // объект свойств рассчитанных на основе других
      good() {
        return this.x + this.y;
      },
      answers() {
        let res = [this.good];
        while (res.length < this.settings.variants) {
          let num = mtRund(this.good - this.settings.range, this.good + this.settings.range);

            if(res.indexOf(num) === -1) {
              res.push(num);
            }
        }

        return res.sort(function() {
            return Math.random() > 0.5; // случайная сортировка массива
        });
      }
    },
    methods: {
      onAnswer(num) {
        if(num == this.good) {
          this.$emit('succsess'); // создаем событие для передачи управления в др.компонент
        } else {
          this.$emit('error', `${this.x} + ${this.y} = ${this.good}!`);
        }
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
