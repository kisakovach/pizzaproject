RAD.views.Category = RAD.Blanks.View.extend({

    url: 'source/views/category/category.html',
 
    events:{

     "click .right_arrow":"onNext",
     "click .left_arrow" :"onPerv",
     "click .about" : "onNext"

    },
    id_prev  :  0,
    id_next  :  0,
    id_type  :  0,
    cur_page :  0,
    max_page :  0,
    onInitialize: function () {
        
    var dish= RAD.model('dish');

    this.model = new dish();

    },


    onNewExtras: function (extras) {
     this.id_type = extras.id;
     this.cur_page=extras.cur_page;
     console.log(this.cur_page+" "+extras.id);
     var group = RAD.model("menu").where({id_type:extras.id});
     this.max_page = group.length-1;
     this.model=group[this.cur_page];
     this.id_next=group[this.cur_page+1];
     this.id_prev=group[this.cur_page-1];
    },

    onNext:function(e){
           var id = this.id_type;
           var id_next=this.id_next;
           cur_page=this.cur_page;
           cur_page++;
           this.application.next({id:id,id_next:id_next,cur_page:cur_page});
    },

    onPerv:function(e) {
        var id = this.id_type;
        var id_next=this.id_next;
        var id_prev=this.id_prev;
        cur_page=this.cur_page;
        cur_page--;
        this.application.prev({id:id,id_next:id_next,cur_page:cur_page,id_prev:id_prev});
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