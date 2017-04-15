# test_simulator
Fate/Grand Order: Jeanne d'Arc (Alter) Pick Up Summon Simulator

## 一起来制作其他卡池的模拟器吧！
 目前模拟器的整体结构已经基本完成，想要加入更多的卡池，需要整理其他卡池的完整信息，包括当前卡池可抽到的所有卡牌**序号**，以及出现几率up的卡牌**序号**。
 
 资料来源：[茹西教王的理想乡](http://kazemai.github.io/fgo-vz/servant.html)
 
 需要考虑不同卡池的诸多差异，例如剧情池限定从者、随剧情加入卡池的从者与礼装、随剧情退出卡池的三星礼装等。
 
 可以用我的代码自己修改，向我发送pull request，也可以整理好卡牌序号后发布到[NGA](http://bbs.ngacn.cc/read.php?tid=11380566)或提出issue。
* 格式如下：
```javascript
  /*
    当前卡池的所有5星从者列表
  */
  var serv5=new Array("002","008","037","052","059","060","062","065","075","076","084","085","097");
  /*
    当前卡池所有出现概率up的4星礼装列表
  */
  var upcraft4=new Array("182","183","184");
```
 FGO大型战斗模拟器绝赞脑洞中，欢迎大家提供脑洞
