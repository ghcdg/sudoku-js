//生成数独解决方案
const Toolkit=require("./toolkit")

/**
 * 给矩阵填入数字
 * 
 * 假设生成的matrix矩阵如下：
 *[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

 * 假设生成orders矩阵调用洗牌算法后如下：
 *[ [ 3, 6, 5, 8, 1, 7, 4, 2, 0 ],
  [ 6, 8, 1, 0, 5, 2, 3, 7, 4 ],
  [ 1, 4, 6, 7, 0, 2, 8, 3, 5 ],
  [ 5, 4, 3, 1, 6, 0, 2, 7, 8 ],
  [ 4, 2, 8, 0, 3, 5, 6, 7, 1 ],
  [ 0, 8, 7, 1, 2, 4, 5, 6, 3 ],
  [ 5, 1, 4, 6, 7, 8, 2, 3, 0 ],
  [ 4, 2, 6, 3, 7, 1, 0, 5, 8 ],
  [ 4, 6, 7, 2, 1, 3, 8, 5, 0 ] ]
 * 
 * 填入数字1：
 *[ [ 0, 0, 0, 1, 0, 0, 0, 0, 0 ],  //第3个位置,orders第0行第0个位置数组为3
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0 ],    //第6个位置,orders第1行第0个位置数组为6
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0 ],    //第1个位置,orders第2行第0个位置数组为1
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ],    //第5个位置,orders第3行第0个位置数组为5
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],    //第......
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]   //第4个位置,orders第8行第0个位置数组为4
 * 
 * 同理填入后面的数字2-9
 */

class Generator{

    generate(){
        while(!this.internalGenertator()){}//循环直到生成符合要求的矩阵
    }

    internalGenertator(){
        //生成matrix矩阵，用于填入数独数字
        this.matrix=Toolkit.matrix.makeMatrix();
        //生成orders矩阵，其每一行通过调用洗牌算法打乱
        //matrix矩阵根据orders矩阵依次填入数字
        this.orders=Toolkit.matrix.makeMatrix()
        .map(row=>row.map((val,index)=>index))//给矩阵每行赋予从0-8的值
        .map(row=>Toolkit.matrix.shuffle(row));//打乱每行0-8的值

        for(let num=1;num<=9;num++){//依次填入数字1-9
            if(!this.fillNumber(num)){
                return false;//在填入某个数时失败了
            }            
        }
        //所有数字填入成功
        return true;

    }

    //填入数字num,从第0行开始到最后一行
    fillNumber(num){
        // 返回结果，要么所有数字填入成功，要么在填入某个数时失败了
        return this.fillRow(num,0);
    }

    //从指定的行rowIndex中填入数字num
    fillRow(num,rowIndex){

        //所有行成功填入数字num，返回true
        if(rowIndex>8){
            return true;
        }
 
        //获取第rowIndex行的数组
        const rowarr=this.matrix[rowIndex];
        const ordersarr=this.orders[rowIndex];
        //在当前数组rowarr中随机选中某一列填入数字num
        //因为rowarr为一维数组，所以选某列相当于数组的某个位置
        for(let c=0;c<9;c++){
            const colIndex=ordersarr[c];
            //如果选中的这个位置已经填入了数字则跳过
            //矩阵默认填入0，如果没有填入数字，按照js语法为false
            if(rowarr[colIndex]){
                continue;
            }

            //若选中的这个位置还没有填入数字，则检查这个位置能不能填入数字num
            //若不能填入，则跳过该位置寻找下一个位置
            if(!Toolkit.matrix.checkFillalbe(this.matrix,num,rowIndex,colIndex)){
                continue;
            }

            //否则，填入数字num
            rowarr[colIndex]=num;
            //当前行填入num成功，递归调用 fillRow()，继续在下一行中填入数字num
            //若下一行填入数字num失败，则恢复刚才填写的数字为0
            //并在当前行寻找下一个位置填入数字num
            if(!this.fillRow(num,rowIndex+1)){
                rowarr[colIndex]=0;
                continue;
            }

            //最后，所有行都已经填入指定数字num，即完成了一个数字的填写
            return true;
        }

        //循环完毕，说明当前行所有位置都不能填入数字num，即本次填写失败
        return false;
    }
}

module.exports=Generator;