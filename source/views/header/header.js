RAD.view("header", RAD.Blanks.View.extend({

    url: 'source/views/header/header.html',
    model:RAD.model("header"),
    events:{
    "click .back":"goBack",
    "click .cart":"goCart"
    },

    goBack: function(e){

     this.application.toMain();
    
    },


    goCart: function(e){

     this.application.toCart();
    
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