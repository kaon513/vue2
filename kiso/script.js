var app = new Vue({
    el: "#app",
    data:{
        message: "Hello Vue.js!",
        url: "https://jp.vuejs.org/",
        toggle: false,
        languages:[
            "JavaScript","Ruby","Python"
        ]
    } ,
    methods:{
        onclick: function(){
            this.message = "Clicked!"
        }
    }
})

// {}, ()がいくつ必要かが難しい