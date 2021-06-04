var app = new Vue({
    el: "#app",
    data:{
        newItem: "",
        message: "Hello Vue.js!",
        url: "https://jp.vuejs.org/",
        toggle: false,
        languages:[
            "JavaScript","Ruby","Python"
        ],
        todos:[]
    } ,
    methods:{
        addItem: function(event){
            // this.message = "Clicked!"
            //alert()
            if (this.newItem == "" ){
                return
            }
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ""
        },
        deleteItem: function(index){
            this.todos.splice(index, 1)
        }
    }
})
