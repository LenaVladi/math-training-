<template>
  <section class="training">
    <h1>Math training. Level {{ level + 1 }}</h1>
    <hr>
    <div class="progress">
      <div class="progress-bar" :style="progressStyles">
    </div>
    </div>
    <div class="box">
      <transition name="flip" mode="out-in">
        <start-screen
          v-if="state == 'start'"
          @onStart="onStart"
        ></start-screen>
        <question v-else-if="state == 'question'"
                  @succsess="onQuestionSuccsess"
                  @error="onQuestionError"
                  :settings="levels[level]"
        ></question>
        <message v-else-if="state == 'message'"
                v-bind:type="message.type"
                :text="message.text"
                @onNext="onNext"
        ></message>
        <result-screen v-else-if="state == 'result'"
                       :stats="stats"
                       @repeat="onStart"
                       @nextLevel="onNextLevel"
        ></result-screen>
        <div v-else>Unknown state</div>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        state: 'start',
        message: {
          type: '',
          text: ''
        },
        stats: {
          success: 0,
          error: 0
        },
        questionMax: 3,
        level: 0,
        levels: [
          {
            from: 10,
            to: 40,
            range: 5,
            variants: 2
          },
          {
            from: 100,
            to: 200,
            range: 20,
            variants: 4
          },
          {
            from: 500,
            to: 900,
            range: 40,
            variants: 6
          }
        ]
      }
    },

    computed: {
      questDone() {
        return this.stats.success + this.stats.error;
      },
      progressStyles() {
        return {
          width: (this.questDone / this.questionMax * 100) + '%'
        };
      }
    },

    methods: {
      onStart() {
        this.state = 'question';
        this.stats.success = 0;
        this.stats.error = 0;
      },
      onQuestionSuccsess() {
        this.state = 'message';
        this.message.text = 'Good Job!';
        this.message.type = 'success';
        this.stats.success++;
      },
      onQuestionError(msg) {
        this.state = 'message';
        this.message.text = msg;
        this.message.type = 'danger';
        this.stats.error++;
      },
      onNext() {
        if(this.questDone < this.questionMax) {
          this.state = 'question';
        } else {
          this.state = 'result';
        }

      },
      onNextLevel() {
        this.level++;
        this.onStart();
      }
    }
  }
</script>

<style scoped>
  .training {
    max-width: 700px;
    margin: 20px auto;
  }

  .box {
    margin: 10px 0;
  }

  .progress-bar {
    transition: width 0.5s;
  }

  .flip-enter-active {
    animation: flipInX 0.3s linear;
  }

  .flip-leave-active {
    animation: flipOutX 0.3s linear;
  }

  .alert {
    padding: 5px 20px;
  }

  @keyframes flipInX {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

    @keyframes flipOutX {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(90deg);
    }
  }
</style>
