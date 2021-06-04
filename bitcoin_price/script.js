var app = new Vue({
    el: "#app",
    data:{
       bpi: null
    } ,
    mounted: function(){
     axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
     .then(function(resonse){
        //  console.log(resonse.data.bpi)
        this.bpi = resonse.data.bpi
     }.bind(this))
     .catch(function(error){
         console.log(error)
     })

    }
})
