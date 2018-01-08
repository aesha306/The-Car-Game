var initialized2 = false;
var carsprite = null;
var score = 0;
var temps=-1;
var tempc=-1;
var scorelabel;
var squares = [];
var circles = [];
var HelloWorldLayer2 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var colorLayer = new cc.LayerColor(cc.color(204, 230, 255, 255), size.width, size.height);
        colorLayer.ignoreAnchorPointForPosition(false);
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        this.addChild(colorLayer);
        scope = this;

        cc.log("App2");
        carsprite = new cc.Sprite.create(res.Car);
        carsprite.setAnchorPoint(cc.p(0.5, 0.5));
        carsprite.setPosition(cc.p(size.width / 2, 90));
        this.addChild(carsprite, 0);

        scorelabel = new cc.LabelTTF("Score : 0", "Arial", 38);
        scorelabel.x = 100;
        scorelabel.y = size.height-100;
        scorelabel.setColor(cc.color(38, 38, 115));
        this.addChild(scorelabel, 5);

        this.schedule(movesquares, 1.2);
        this.schedule(movecircles, 1.6);


        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener(
            {
                event: cc.EventListener.KEYBOARD,

                onKeyPressed: function(key, event)
                {
                    //cc.log("key " + key.toString());
                    if(key.toString()==37)
                    {
                        var sprite_action = cc.MoveBy.create(0.2, cc.p(-40, 0));
                        carsprite.runAction(sprite_action);
                    }
                    if(key.toString()==38)
                    {
                        var sprite_action = cc.MoveBy.create(0.2, cc.p(0, 40));
                        carsprite.runAction(sprite_action);
                    }
                    if(key.toString()==39)
                    {
                        var sprite_action = cc.MoveBy.create(0.2, cc.p(40, 0));
                        carsprite.runAction(sprite_action);
                    }
                    if(key.toString()==40)
                    {
                        var sprite_action = cc.MoveBy.create(0.2, cc.p(0, -40));
                        carsprite.runAction(sprite_action);
                    }

                }
            }, this)
        }

        return true;
    }
});

var movesquares = function()
{
    var size = cc.winSize;
    //temps = temps+1;
    var randomsquare = Math.random();
    var squaresprite = new cc.Sprite.create(res.Square);
    squaresprite.setAnchorPoint(cc.p(0.5, 0.5));
    squaresprite.setPosition(cc.p(size.width*randomsquare, size.height+50));
    this.addChild(squaresprite, 0);   

    var sprite_action = cc.MoveTo.create(1.5, cc.p(size.width*randomsquare, -100));
    squaresprite.runAction(sprite_action);
    //this.removeChild(this.squaresprite);

    squares.push(squaresprite);

    for(var i=0; i<squares.length; i++)
    {   
        var sq = squares[i];
        //cc.log("here", temps);
        var squareboundary = sq.getBoundingBox();
        var carboundary = carsprite.getBoundingBox();
        if (cc.rectIntersectsRect(carboundary, squareboundary))
        {
            /*score++;
            cc.log("Score is ", score);
            scorelabel.setString("Score : "+score);*/
            //cc.director.pause();
            var scene2 = new HelloWorldScene3();
            cc.director.runScene(new cc.TransitionFade(1.5, scene2));;
        }
    }
};

var movecircles = function()
{
    var size = cc.winSize;
    tempc=tempc+1;
    var randomcircle = Math.random();
    var circlesprite= new cc.Sprite.create(res.Circle);
    circlesprite.setAnchorPoint(cc.p(0.5, 0.5));
    circlesprite.setPosition(cc.p(size.width-size.width*randomcircle, size.height+50));
    this.addChild(circlesprite, 0); 
    
    var sprite_action = cc.MoveTo.create(2.5, cc.p(size.width-size.width*randomcircle, -100));
    circlesprite.runAction(sprite_action);

    circles.push(circlesprite);

    for(var i=0; i<circles.length; i++)
    {
        var cir = circles[i];
        //cc.log("here", tempc);
        var circleboundary = cir.getBoundingBox();
        var carboundary = carsprite.getBoundingBox();
        //cc.log(squareboundary);
        if (cc.rectIntersectsRect(carboundary, circleboundary))
        {
            score++;
            cc.log("Score is ", score);
            scorelabel.setString("Score : "+score);
        }
        
    }

};

var HelloWorldScene2 = cc.Scene.extend(
{
    onEnter:function () 
    {
        this._super();
        
        if(true)
        {
            initialized2=true;

            var layer = new HelloWorldLayer2();
            this.addChild(layer);
        }
    }
});

