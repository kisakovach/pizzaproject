(function (document, window) {
    // don't remove ## marks, CLI uses them for updating this file
    // #script_begin#
    
    var scripts = [
        
        "source/models/dish/dish.js",
        
        "source/models/menu/menu.js",
        
        "source/models/type/type.js",
        
        "source/service/getmenu/getmenu.js",
        
        "source/views/category/category.js",
        
        "source/views/header/header.js",
        
        "source/views/main/main.js",
        
        "source/views/num/num.js",
        
        "source/views/start/start.js",
        
        "source/application/application.js"
    ];
    // #script_end#
    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'none',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();

    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));