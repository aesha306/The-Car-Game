var initialized3 = false;

var HelloWorldLayer3 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var restartgame = new cc.MenuItemImage.create(res.Resume, null, startscreen2,this);
        
        restartgame.setPosition(cc.p(size.width/2, size.height/2-50));
        cc.log("app3");

        var menu1 = new cc.Menu(restartgame);
        menu1.setPosition(cc.p(0, 0));
        this.addChild(menu1,5);

        var scorelabel = new cc.LabelTTF("Game Over.", "Arial", 38);
        scorelabel.x = size.width/2;
        scorelabel.y = size.height/2+50;
        this.addChild(scorelabel, 5);
        
        return true;
    }
});

var startscreen2 = function()
{
	//var scene1 = new HelloWorldScene2();
    cc.log("in function");
    cc.director.runScene(new HelloWorldScene2);
    //cc.director.runScene(scene1);
    //var layer = new HelloWorldLayer2();
    //this.addChild(layer);
    //cc.log("out function");
};

var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        //debugger;
        if(!initialized3)
        {
        	initialized3=true;

        	var layer = new HelloWorldLayer3();
        	this.addChild(layer);
        }
    }
});

