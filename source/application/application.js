RAD.application(function (core) {
    var app = this;


    app.toMain = function (){
    
        RAD.model("header").set("back",false);
        var options = {
            container_id: '#main',
            content: "main",
            animation: 'slide-out'
        };

        core.publish('navigation.show', options);
    }

    app.toCart = function (){
        RAD.model("header").set("caption","Корзина");
        RAD.model("header").set("back",true);
        var options = {
            container_id: '#main',
            content: "cart",
            animation: 'fade'
        };

        core.publish('navigation.show', options);
    }




    app.start = function () {
        
// to add your first view - run "rad add view view.main" from the root of this project
// you can use the code below to show your first view
        var options = {
            container_id: '#screen',
            content: "start",
            animation: 'none'
        };
       
       core.startService("getmenu");
       core.publish("getmenu.load",{
        file:"http://10.8.71.251/kisel/1.php"
       });
       core.publish('navigation.show', options);

    };

/*
    app.category = function(obj){
      


      RAD.view('category')
      var options = {

	     container_id:'#main',
	     content:'category',
	     animation: 'slide',
	     extras: obj 		
      };
      core.publish('navigation.show',options);
    };
*/
    app.group=[];

    app.next = function(obj){
   
      var cur_dish = this.group[obj.id_group]
      var id = cur_dish.get("id");
      var next = false;
      var prev = false;

      RAD.model("header").set("back",true);
      RAD.model("header").set("caption",cur_dish.get('type'));
      if(core.getView("item"+id)!=="object"){
       RAD.view("item"+id, RAD.views.Category);
      };

      if(obj.id_group<this.group.length-1){
       next = true;
      };

      if(obj.id_group>0){
       prev = true;
      };


      var extras = {
         id_group:obj.id_group,
         about:cur_dish.get("about"),
         cost:cur_dish.get("cost"),
         dish:cur_dish.get("dish"),
         num:1,
         next:next,
         prev:prev
       };

      var options = {
         container_id:'#main',
         content:'item'+id,
         animation: obj.animation,
         extras: extras     
       };

      core.publish("navigation.show",options);
    };

    app.prev = function (obj) {
      var options = {
         container_id:'#main',
         content:'item'+obj.cur_page,
         animation: 'slide-out',
         extras: obj     
       };

      core.publish("navigation.show",options);
    }
	
    return app;
}, true);
