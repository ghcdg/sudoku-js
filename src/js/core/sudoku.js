/**
 * 生成数独游戏
 * 1、利用 Generator 生成游戏的解决方案
 * 2、随机去除部分数据，形成游戏迷盘
 */

 const Generator=require("./generator");

 class Sudoku{
     constructor(){
         //生成游戏解决方案 this.solutionMatrix
         const generator=new Generator();
         generator.generate();
         this.solutionMatrix=generator.matrix;
     }

     make(level=5){
         //const shouldRid=Math.random()*9 <level;
         //按照概率生成游戏迷盘,小方格的值有2/3 的概率变成0
         this.puzzleMatrix=this.solutionMatrix.map(row=>{
             return row.map(ceil=>Math.random()*9<level?0:ceil);
         });
     }
 }

 module.exports=Sudoku;