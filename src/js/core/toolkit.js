//矩阵工具
const MatrixToolkit={
    /**
     * 创建一维数组
     * @param {默认数组的值为0} v 
     */
     makeRow(v=0){
        const array=new Array(9);
        array.fill(v);
        return array;
    },
    
    /**
     * 在一维数组的基础上创建一个二维数组
     * @param {默认数组的值为0}} v 
     */
     makeMatrix(v=0){
         //Array.from(arrayLike[, mapFn[, thisArg]])
        return Array.from({length:9},()=>this.makeRow(v));
    },
    
    /**
     * Fisher-Yates 洗牌算法 
     * 打乱每一个一维数组中数字的顺序
     */
     shuffle(array){
        //数组下标为0到array-1，并且每一行最后一个数不用交换，所以为array.length-2
        const endindex=array.length-2;
        const arrlen=array.length;
        for(let i=0;i<endindex;i++){
            let j=i+Math.floor(Math.random()*(arrlen-i));
            [array[i],array[j]]=[array[j],array[i]];
        }
        return array;
    },

    /**
     * 检查指定位置能否填入指定数字
     */
    checkFillalbe(matrix,num,rowIndex,colIndex){
        //获取当前位置所在的行、列、宫格信息
        const row=matrix[rowIndex];
        const column=this.makeRow().map((val,index)=>matrix[index][colIndex]);
        const {boxIndex}=boxToolkit.convertToBoxIndex(rowIndex,colIndex);
        const box=boxToolkit.getBoxCeils(matrix,boxIndex);

        for(let i=0;i<9;i++){
            if(row[i]===num || column[i]===num || box[i]===num){
                return false;
            }
        }
        return true;
    }
}; 

/**
 * 宫坐标工具
 */
const boxToolkit={
    //根据宫格坐标以及矩阵，返回宫格所有小方格的坐标
    getBoxCeils(matrix,boxIndex){
        const startRowIndex=Math.floor(boxIndex/3)*3;
        const startColIndex=boxIndex % 3 * 3;
        const result=[];
        
        for(let ceilIndex=0;ceilIndex<9;ceilIndex++){
            const rowIndex=startRowIndex + Math.floor(ceilIndex/3);
            const colIndex=startColIndex + ceilIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },

    //根据行列坐标返回宫格坐标以及宫格坐标中的第一个小方格的坐标
    convertToBoxIndex(rowIndex,colIndex){
        return {
            boxIndex:Math.floor(rowIndex/3)*3 + Math.floor(colIndex/3),
            ceilIndex:rowIndex % 3 * 3 + colIndex % 3
        };
    },
    //根据宫格坐标以及宫格坐标中的第一个小方格的坐标返回行列坐标
    convertFromBoxIndex(boxIndex,ceilIndex){
        return {
            rowIndex:Math.floor(boxIndex/3)*3 + Math.floor(ceilIndex/3),
            colIndex:boxIndex % 3 * 3 + ceilIndex % 3
        };
    }

};

//工具集
module.exports=class Toolkit{
    /**
     * 矩阵和数据结构相关工具
     */
    static get matrix(){
        return MatrixToolkit;
    }

    /**
     * 宫坐标系相关工具
     */
    static get box(){
        return boxToolkit;
    }
}



