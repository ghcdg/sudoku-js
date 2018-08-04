
import '../less/main.less';//导入样式表
const Grid=require("./ui/grid.js");
const PopupNumbers=require("./ui/popupnumbers");

//建立矩阵并设置样式，把它放入容器 container中
const grid=new Grid($("#container"));
grid.build();//建立矩阵
grid.layout();//设置样式

//生成操作面板
const popupnumbers=new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupnumbers);

$("#check").on("click",e=>{if(grid.check()){alert("成功!");}});
$("#reset").on("click",e=>{grid.reset();});
$("#clear").on("click",e=>{grid.clear();});
$("#rebuild").on("click",e=>{grid.rebuild();});
