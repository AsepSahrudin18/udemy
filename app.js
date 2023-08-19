Vue.createApp({
  // untuk menyimpan data
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },

  // untuk mengelola data
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },

    // resetForm() {
    //   this.enteredValue = '';
    // }
  }
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);