RAD.application(function (core) {
    var app = this;

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
        file:"http://localhost/1.php"
       });
       core.publish('navigation.show', options);

    };

    app.category = function(obj){
      
      var options = {

	     container_id:'#main',
	     content:'category',
	     animation: 'slide',
	     extras: obj 		
      };
      core.publish('navigation.show',options);
    };

    app.next = function(obj){
       
      if(!(core.getView('item'+obj.id_next)==='object')){ 
        RAD.view('item'+obj.id_next,RAD.views.Category);
       };
        var options = {
         container_id:'#main',
         content:'item'+obj.id_next,
         animation: 'slide',
         extras: obj     
       };

      core.publish("navigation.show",options);
    };

    app.prev = function (obj) {
      var options = {
         container_id:'#main',
         content:'item'+obj.id_next,
         animation: 'slide-out',
         extras: obj     
       };

      core.publish("navigation.show",options);
    }
	
    return app;
}, true);
