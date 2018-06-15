cc.Class({
    extends: cc.Component,

    properties: {

    },



    onLoad() {},

    start() {

    },
    onCollisionEnter: function(other, self) {
        if (other.node.group == "palyer") {
            var removeAction = cc.removeSelf(true);
            this.node.runAction(removeAction);
        }
    }

    // update (dt) {},
});