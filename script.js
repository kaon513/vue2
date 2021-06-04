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
        todos:[],
        cols:[
        ],
        table:"table_name",

    } ,
    methods:{
        addCol: function(event){
            // this.message = "Clicked!"
            //alert()
            // if (this.newItem == "" ){
            //     return
            // }
            var col = {
                col_name: "",
                data_type: "char",
                length: 10,
                default: "",
                isNotNull: true,
                isDefault: false,
                // isDone: false
            }
            this.cols.push(col)
        },
        deleteCol: function(index){
            this.cols.splice(index, 1)
        },
        
    }
})
