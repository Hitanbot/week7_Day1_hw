import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {task: "Finish website",priority: "high", isDone: false},
        {task: "Aquire chocolate",priority: "low", isDone: false},
        {task: "???",priority: "high", isDone: true},
        {task: "Profit?",priority: "high", isDone: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          task: this.newItem,
          priority: this.priority,
          isDone: false
        })
        this.newItem = "";
      },
      finishItem: function(index){
        this.items[index].isDone = true;
      }

    }
  });
});
