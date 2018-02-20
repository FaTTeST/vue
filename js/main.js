Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту старницу в: ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Посадить дерево' },
            { text: 'Посторить дом' },
            { text: 'Вырастить сына' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Привет, Vue.js!'
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Овощи'},
            {id: 1, text: 'Сыр'},
            {id: 2, text: 'Что там еще лди едеят?'}
        ]
    }
})

var app8 = new Vue({
    el: '#example',
    data: {
        message: 'Привет'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})