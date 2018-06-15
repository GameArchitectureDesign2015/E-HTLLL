cc.Class({
    extends: cc.Component,

    properties: {
        sheepAudio:{
            default:null,
            url:cc.AudioClip
         },
         wolfAudio:{
            default:null,
            url:cc.AudioClip
         }

    },


    onLoad() {},

    start() {

    },

    onCollisionEnter: function(other, self) {
        if (other.node.group == "sheep") {
            scoreNow += 10;
            cc.audioEngine.playEffect(this.sheepAudio, false);
        };
        if (other.node.group == "Wolf") {
            scoreNow -= 10;
            cc.audioEngine.playEffect(this.wolfAudio, false);
        }

    }

    // update (dt) {},
});