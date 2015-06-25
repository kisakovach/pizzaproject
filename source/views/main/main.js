RAD.view("main", RAD.Blanks.View.extend({

    url: 'source/views/main/main.html',

    model:RAD.model("menu"),

    events:{
     "click li":"goDish"

    },  
    
    goDish: function(e){

     var cur_type = $(e.currentTarget).attr("data");
     this.application.group = RAD.model("menu").where({type:cur_type});
     this.application.next({id_group:0,
			     animation:"slide-in"});
    
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