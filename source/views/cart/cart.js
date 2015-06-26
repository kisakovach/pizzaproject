RAD.view("cart", RAD.Blanks.View.extend({

    url: 'source/views/cart/cart.html',

    model:RAD.model("cart"),
    events:{
     "click .delete":"onDelete"
    },

    onInitialize: function () {
    
    },

    onDelete: function(e){
     this.model.remove($(e.target).attr("data"));
     RAD.model('header').set("cart",this.model.length);
     
    }

/*
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