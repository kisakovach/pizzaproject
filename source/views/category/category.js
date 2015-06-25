RAD.views.Category = RAD.Blanks.View.extend({

    url: 'source/views/category/category.html',
 
    events:{

     "click .right_arrow":"onNext",
     "click .left_arrow" :"onPerv",
     "click .about" : "onNext",
     "click .plus-item" : "onPlus",
     "click .minus-item" : "onMinus"
    },  
    
    onInitialize: function () {
      var md = RAD.model("dish");
      this.model = new md();
    },


    onNewExtras: function (extras) {
     var md = RAD.model("dish");
     var model =new md(extras)
     this.changeModel(model); 
    },

    onNext:function(e){
      id_group = this.model.get("id_group");
      id_group++;
      this.application.next({id_group:id_group,
			      animation:"slide-in"});     
    },

    onPerv:function(e) {
      id_group = this.model.get("id_group");
      id_group--;
      this.application.next({id_group:id_group,
			     animation:"slide-out"}); 
    },

    onMinus: function(e){
    num = this.model.get("num");
    num--;
    this.model.set({num:num});

    },

    onPlus: function(e){
     num = this.model.get("num");
     num++;
     this.model.set({num:num});
    }



/*

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

});

//RAD.view("category", RAD.views.Category);