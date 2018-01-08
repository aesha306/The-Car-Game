var initialized = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var colorLayer = new cc.LayerColor(cc.color(230, 184, 0, 255), size.width, size.height);
        colorLayer.ignoreAnchorPointForPosition(false);
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        this.addChild(colorLayer);
        scope = this;

        var size = cc.winSize;
        var startgame = new cc.MenuItemImage(res.Start, res.Start, startscreen);
        var playtt = new cc.MenuItemImage(res.Playtext, res.Playtext, donothing);
        startgame.setPosition(cc.p(size.width/2, size.height/2-150));
        playtt.setPosition(cc.p(size.width/2, size.height/2+150));
        var menu = new cc.Menu(playtt, startgame);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);

        /*var scorelabel = new cc.LabelTTF("PLAY", "Arial", 38);
        scorelabel.x = size.width/2;
        scorelabel.y = size.height/2+150;
        this.addChild(scorelabel, 5);*/

        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener(
            {
                event: cc.EventListener.KEYBOARD,

                onKeyPressed: function(key, event)
                {
                    //cc.log("key " + key.toString());
                    if(key.toString()==32)
                    {
                        var scene = new HelloWorldScene2();
                        cc.log("startscreen");
                        cc.director.runScene(new cc.TransitionZoomFlipX(3, scene));
                    }
                }
            }, this)
        }
        
        return true;
    }
});

var startscreen = function()
{
	var scene = new HelloWorldScene2();
    cc.log("startscreen");
	cc.director.runScene(new cc.TransitionZoomFlipX(3, scene));
};

var donothing = function()
{
    
};

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        //debugger;
        if(!initialized)
        {
        	initialized=true;

        	var layer = new HelloWorldLayer();
        	this.addChild(layer);
        }
    }
});

