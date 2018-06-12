<template>
  <section class="training">
    <h1>Math training</h1>
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
        ></question>
        <message v-else-if="state == 'message'"
                v-bind:type="message.type"
                :text="message.text"
                @onNext="onNext"
        ></message>
        <result-screen v-else-if="state == 'result'"></result-screen>
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
        questionMax: 3
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
