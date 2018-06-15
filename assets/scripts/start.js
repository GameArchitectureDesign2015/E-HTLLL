
cc.Class({
    extends: cc.Component,

    properties: {

        soundSprite:cc.Sprite,

        soundOn:cc.SpriteFrame,
        soundOff:cc.SpriteFrame,

        _sounStatus:0,

        bgAudio:{
           default:null,
           url:cc.AudioClip
        }
       
    },

    onLoad () {
        this._sounStatus = 0;
        this.soundSprite.spriteFrame = this.soundOn;
        cc.audioEngine.setEffectsVolume(9);
        cc.audioEngine.playMusic(this.bgAudio,true)
    },

    start () {

    },

    soundBtn:function(){
        if(this._sounStatus == 0){
             this.soundSprite.spriteFrame = this.soundOff;
             this._sounStatus = 1;
             cc.audioEngine.pauseAll();
        }else{
             this.soundSprite.spriteFrame = this.soundOn;
             this._sounStatus = 0;
              cc.audioEngine.playMusic(this.bgAudio,true)
        }

    },

    startBtn:function () {
       cc.director.loadScene("game");
    },

   helpBtn :function(){
    cc.director.loadScene("help");
}
});
