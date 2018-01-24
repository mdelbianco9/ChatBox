


// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })

// var list = new Vue({
// 	el: '#mylist',
// 	data: {
// 		lists: [
// 			{ item: 'Vue is kinda confusing'},
// 			{ item: 'But I am slowly understanding it'},
// 			{ item: 'can I run these answers as a for loop?'}
// 		]
// 	}
// })

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

var app6 = new Vue({
  el: '#chat-box',
  data: {
    message: '',
    list: [""]
  },

  methods: {
    converse: function () {
      // var sentence = $("#app-6").value;
      var list = [""];
      console.log(this.message);
      // $('.display-text')
      list.push(this.message);

      // This selects the value of the input
      var entry = document.getElementById('chat-input').value
      console.log(entry)

      // This creates an element and tells its value to be the entered value from the input
      var talk = document.createElement('h5');
      talk.className = 'newText'
      var insideTalk = document.createTextNode(entry);
      
      // Puts The entry value inside the h5
      talk.appendChild(insideTalk);

      // This puts the created element into out div in HTML 
      var div = document.getElementById('chat-text')
      div.appendChild(talk);

      // Clears the input feild
      var entry = document.getElementById('chat-input').value = " ";




    }
  }
})


// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: [
//       { id: 0, text: 'Vegetables' },
//       { id: 1, text: 'Cheese' },
//       { id: 2, text: 'Whatever else humans are supposed to eat' }
//     ]
//   }
// })



// function myfunction() {
//    $("#message-box").css("background-color", "yellow");
//    $("#input-chat").value
// }

