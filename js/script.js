const canvas = document.getElementById("canvas");
const stage = new createjs.Stage(canvas);

// 确保 CreateJS 可以在窗口大小变化时调整 canvas 大小
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stage.update();
}
window.addEventListener('resize', resize);
resize();

// 添加一个形状到舞台
const circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = canvas.width / 2;
circle.y = canvas.height / 2;
stage.addChild(circle);

// 为形状添加点击动画
circle.on("click", function(event) {
    createjs.Tween.get(circle)
        .to({ scaleX: 1.5, scaleY: 1.5 }, 500, createjs.Ease.getPowInOut(4))
        .to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.getPowInOut(4));
});

createjs.Ticker.framerate = 60;
createjs.Ticker.addEventListener("tick", stage);
