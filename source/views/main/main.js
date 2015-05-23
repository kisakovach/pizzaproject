RAD.view("main", RAD.Blanks.View.extend({

    url: 'source/views/main/main.html',

    model:RAD.model("menu"),

    events:{
     "click li":"goDish"

    },  
    
    goDish: function(e){

     var id = $(e.currentTarget).attr("data");
     var group = RAD.model("menu").where(id);

     this.application.next({id:id, id_model:group[0],cur_page:0});

     //console.log(id);
    

    }
/*
    onInitialize: function () {
        
    },
    onNewExtras: function (extras) {
        
    },
    onReceiveMsg: function (channel, data) {
        
    },
    onStartRender: function () {
        
    },
    onEndRender: function () {
        
    },
    onBeforeAttach: function(){

    },
    onStartAttach: function () {
        
    },
    onEndAttach: function () {
        
    },
    onEndDetach: function () {
        
    },
    onDestroy: function () {
        
    }
*/

}));