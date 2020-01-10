// 壁纸随机问题

var bzhi = [];

for (let i = 1; i <= 26; i++) {
  if (i >= 23) {
    bzhi.push(0);
  } else {
    bzhi.push(i);
  }
}

var law = []; //用于存储找到yoda的最小次数

for (let i = 0; i < 100; i++) {
  start();
}

//求平均数
var allNum = 0;
var xData = [];
var yData = law;

var sandianData = [];

for (let i = 0; i < law.length; i++) {
  allNum += law[i];
  xData.push(i + 1);
  sandianData.push([i + 1, law[i]]);
}
var meanValue = Math.round(allNum / law.length);
// console.log("则百次匹配Yoda,平均用了" + meanValue + "次");

function start() {
  var num = 0;
  while (true) {
    var a = random(0, 25);
    var b = random(0, 25);
    if (a !== b) {
      num++;
      var bzhiA = bzhi[a];
      var bzhiB = bzhi[b];
      console.log("第一次匹配,壁:" + bzhiA + ";壁纸:" + bzhiB);
      if (bzhiA === bzhiB) {
        // console.log("成功匹配到两个Yoda , 一共用了" + num + "次");
        law.push(num);
        break;
      }
    }
  }
}

//utils

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
