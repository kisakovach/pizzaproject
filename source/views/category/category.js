RAD.view("category", RAD.Blanks.View.extend({

    url: 'source/views/category/category.html',

    cur_page:0,

    max_page:0,

    group:"",
 
    events:{

     "click .right_arrow":"onNext",
     "click .left_arrow" :"onPerv"

    },

    onInitialize: function () {
        
    var dish= RAD.model('dish');

    this.model = new dish();

    },


    onNewExtras: function (extras) {
        	
	console.log(extras.id_type);
	
	this.group = RAD.model("menu").where(extras);
	this.max_page =this.group.length-1;

	this.changeModel(this.group[this.cur_page]);       //extras.max_cat;	       

    },

    onNext:function(e){
        this.cur_page++;
        this.changeModel(this.group[this.cur_page]);

    },

    onPerv:function(e) {
        this.cur_page--
        this.changeModel(this.group[this.cur_page]);
        // body...
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

}));