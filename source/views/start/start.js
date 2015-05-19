RAD.view("start", RAD.Blanks.View.extend({


    model:RAD.model("menu"),
    url: 'source/views/start/start.html',

    events:{
     "click li":"goDish"


	},	
    
    goDish: function(e){

     var id = $(e.target).attr("data");
     dish_ids={
      id_type:id

     };

     this.application.dish(dish_ids);
    

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