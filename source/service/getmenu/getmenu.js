RAD.service("getmenu", RAD.Blanks.Service.extend({
    
	model: RAD.model('menu'),
    
    onInitialize: function() {

    },

    onReceiveMsg: function (channel, data) {
        window.console.log('channel:', channel, 'data:', data);
        if(channel == "getmenu.load"){
		console.log(data.file);
        	$.getJSON(data.file, function(data){
                console.log(data);
            }).done(function(data){
                    
                    RAD.model("menu").set(data);
                    

                });
    }},

    setMenu: function(menu_list){

        RAD.model("menu").set(menu_list);
    }


}));