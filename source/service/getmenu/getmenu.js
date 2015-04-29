RAD.service("getmenu", RAD.Blanks.Service.extend({
    
	getMenu:function (url) {

			

	}

    onReceiveMsg: function (channel, data) {
        window.console.log('channel:', channel, 'data:', data);
    }


}));