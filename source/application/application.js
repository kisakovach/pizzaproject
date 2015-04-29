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
       core.publish('navigation.show', options);

    };

    return app;
}, true);
