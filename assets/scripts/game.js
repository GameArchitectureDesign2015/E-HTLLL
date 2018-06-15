cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node, //玩家角色

        scoreNode: cc.Label, //分数节点

        sheep1: cc.Prefab,
        sheep2: cc.Prefab,
        sheep3: cc.Prefab,
        sheep4: cc.Prefab,
        sheep5: cc.Prefab,
        wolf: cc.Prefab,
        time:cc.Label,   //时间节点
        _timeSet:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        //倒计时60秒  可以自行修改
        this._timeSet = 60;

        //本地暂存分数；
        window.scoreNow = 0;

        //开启碰撞
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

      
        //产生羊的随机时间段
        var ss = Math.ceil(Math.random() * 1);
        this.schedule(this.createDX, ss);

        //玩家控制
        this.playerPoint();
    },

    start() {
        


    },

    //玩家控制
    playerPoint:function(){
        var self = this;
        var distance = null;
        var startPoint = null;
        var movePoint = null;
        this.node.on('touchstart',function(event){  //屏幕触摸点
            var touchStart = event.getLocation();
            startPoint = event.target.convertToNodeSpaceAR(touchStart);
        });
        this.node.on('touchmove',function(event){  //屏幕移动点
            var touchMove = event.getLocation();
            movePoint = event.target.convertToNodeSpaceAR(touchMove);
            var ss = Math.abs(movePoint.x) - Math.abs(startPoint.x);
            if(movePoint.x < startPoint.x){
                self.player.scaleX = 1;
                self.player.x = self.player.x - Math.abs(ss);
                if(self.player.x < -320){
                    self.player.x = -320;
                }
                startPoint = movePoint;
            }else{
                self.player.scaleX = -1;
                self.player.x = self.player.x + Math.abs(ss);
                if(self.player.x > 320){
                    self.player.x = 320;
                }
                startPoint = movePoint;
            }
        });

    },


    createDX: function() {  //生成道具点
        var randomNode = Math.ceil(Math.random() * 6);
        var dongxiNode = null;
        switch (randomNode) {
            case 1:
                dongxiNode = this.sheep1;
                break;
            case 2:
                dongxiNode = this.sheep2;
                break;
            case 3:
                dongxiNode = this.sheep3;
                break;
            case 4:
                dongxiNode = this.sheep4;
                break;
            case 5:
                dongxiNode = this.sheep5;
                break;
            case 6:
                dongxiNode = this.wolf;
                break;
        }
        var insNode = cc.instantiate(dongxiNode);
        this.node.addChild(insNode);
        var xx = Math.ceil(Math.random() * 577 - 288);
        insNode.setPosition(xx, 800);
        var insNodeMoveBy = cc.moveBy(2, cc.p(0, -1600));
        var remove = cc.removeSelf(true);
        var seq = cc.sequence(insNodeMoveBy, remove);
        insNode.runAction(seq);


    },

    update: function(dt) {
        //倒计时
        this.scoreNode.string = window.scoreNow;
        this._timeSet -= dt;
        this.time.string = parseInt(this._timeSet);
        if(this._timeSet<0 ||　this.scoreNode.string<0){
            cc.audioEngine.pauseMusic();
            cc.director.loadScene("gameover");
        };

        
        


       
    },
});