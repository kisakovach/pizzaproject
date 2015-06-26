RAD.views.Category = RAD.Blanks.View.extend({

    url: 'source/views/category/category.html',
 
    events:{

     "click .right_arrow":"onNext",
     "click .left_arrow" :"onPerv",
     "click .btn-post" : "onPost",
     "click .plus-item" : "onPlus",
     "click .minus-item" : "onMinus"
    },  
    
    onInitialize: function () {
      var md = RAD.model("dish");
      this.model = new md();
    },


    onNewExtras: function (extras) {
     var md = RAD.model("dish");
     var model = new md(extras)
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
     var num = this.model.get("num");
     num++;
     this.model.set({num:num});
    },

    onPost:function(e) {
      var num = this.model.get("num");
      var id = this.application.group[this.model.get("id_group")].get("id");
      var cost = this.application.group[this.model.get("id_group")].get("cost");
      var dish = this.application.group[this.model.get("id_group")].get("dish");
      var type = this.application.group[this.model.get("id_group")].get("type");
     
      RAD.model('cart').add({id:id,num:num,dish:dish,type:type,cost:cost});
      var cart=0;
      RAD.model('cart').each(function(item){
        cart+=item.get("num");
      })
      RAD.model('header').set("cart",cart);
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