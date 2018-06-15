
cc.Class({
    extends: cc.Component,

    properties: {
        scoreNow:cc.Label,

        scoreMax:cc.Label,
       
    },

   

    onLoad () {
        this.scoreNow.string = window.scoreNow;

        var highScore = cc.sys.localStorage.getItem("highScore");
        if(highScore == null || highScore == ""){
            highScore = "0";
        } 
        var parseHigh = parseInt(highScore);
        if(window.scoreNow > parseHigh){
            highScore = window.scoreNow;
            this.scoreMax.string =  "最高纪录：" + highScore;
            cc.sys.localStorage.setItem("highScore",highScore);
        }else{
            this.scoreMax.string =  "最高纪录：" + highScore;
        }


    },

    start () {

    },

    backHome:function(){
        cc.director.loadScene("start");
    },

    backGame:function(){
        cc.director.loadScene("game");
    }

    // update (dt) {},
});
