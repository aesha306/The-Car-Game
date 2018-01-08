var folder = "";

if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    Collide_Sound : "res/sound/a.mp3",
    Start : "res/start.png",
    Circle : "res/circle.png",
    Square : "res/square.png",
    Car : "res/car.png",
    Resume : "res/resume.png",
    Playtext : "res/playtext.jpg",
    Gameover : "res/gameover.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}