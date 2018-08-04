//检查数据解决方案

/**
 * 检查一维数组是否符合要求(数组中元素值为0、存在值相同的元素都为不符合要求)
 * 符合要求则在与数组元素对应位置的marks数组中填入true
 * 否则在与数组元素对应位置的marks数组中填入false
 * @param {一维数组} array 
 */
function checkArray(array){
    const length=array.length;
    const marks=new Array(length);
    marks.fill(true);

    for(let i=0;i<length;i++){
        //如果已经被标记为false证明被检查过了，直接跳过
        if(!marks[i]){
            continue;
        }

        const v=array[i];

        //检查数组是否有效： 0 无效，1-9 有效
        if(!v){
            marks[i]=false;
            continue;
        }

        //检查填入数字是否重复： i+1 -- 9 中的数字和第 i 个位置的数字是否重复
        for(let j=i+1;j<length;j++){
            if(v===array[j]){
                marks[i]=marks[j]=false;
            }
        }
    }
    return marks;
}

const Toolkit=require("./toolkit");

/**
 * 输入：matrix（用户矩阵），用户输入的数独数据，9*9的矩阵
 * 处理：对matrix行、列、宫进行检查，并建检查后的结果存储在 matrixMarks (标志矩阵)中
 * 输出：检查 matrixMarks ，由它返回一个true(表示矩阵填写成功)或false（表示矩阵填写失败
 */
module.exports=class Checker{
    constructor(matrix){
        //用户矩阵：用户输入的matrix
        this._matrix=matrix;
        //标志矩阵：对matrix检查后由生成结果true、false组成的矩阵
        this._matrixMarks=Toolkit.matrix.makeMatrix(true);
    }

    //
    check(){
        //检查用户输入的matrix行、列、宫并返回由结果true、false组成的一维数组
        this.checkRows();
        this.checkCols();
        this.checkBoxs();

        //检查：经过行、列、宫检查处理后的矩阵是否成功
        this._success=this._matrixMarks.every(row=>row.every(mark=>mark));
        return this._success;
    }

    checkRows(){
        //循环检查每一行
        for(let rowIndex=0;rowIndex<9;rowIndex++){
            const rowarr=this._matrix[rowIndex];
            const marks=checkArray(rowarr);
            
            //在标志矩阵 matrixMarks 中，记录每一行中值为false的小方格
            for(let colIndex=0,len=marks.length;colIndex<len;colIndex++){
                if(!marks[colIndex]){
                    this._matrixMarks[rowIndex][colIndex]=false;
                }
            }
        }
    }

    checkCols(){
        for(let colIndex=0;colIndex<9;colIndex++){
            //从用户矩阵提取出列数据到数组colsarr中
            const colsarr=[];
            for(let rowIndex=0;rowIndex<9;rowIndex++){
                colsarr[rowIndex]=this._matrix[rowIndex][colIndex];
            }

            const marks=checkArray(colsarr);
            
            //在标志矩阵 matrixMarks 中，记录每一列中值为false的小方格
            for(let rowIndex=0,len=marks.length;rowIndex<len;rowIndex++){
                if(!marks[rowIndex]){
                    this._matrixMarks[rowIndex][colIndex]=false;
                }
            }
        }
    }

    checkBoxs(){
        for(let boxIndex=0;boxIndex<9;boxIndex++){
            //从用户矩阵提取出宫数据到数组boxesar中
            const boxesarr=Toolkit.box.getBoxCeils(this._matrix,boxIndex);
            const marks=checkArray(boxesarr);

            //在标志矩阵 matrixMarks 中，记录每一宫值为false的小方格
            for(let ceilIndex=0;ceilIndex<9;ceilIndex++){
                if((!marks[ceilIndex])){
                    const {rowIndex,colIndex}
                        =Toolkit.box.convertFromBoxIndex(boxIndex,ceilIndex);
                    this._matrixMarks[rowIndex][colIndex]=false;
                }
            }
            
        }
    }
}

// const Generator=require("./generator");
// const g=new Generator();
// g.generate();
// const matrix=g.matrix;

// const checker=new Checker(matrix);
// console.log("check result",checker.check());
// console.log(checker._matrixMarks);

// matrix[1][1]=0;
// matrix[2][3]=matrix[3][5]=5;


// const checker2=new Checker(matrix);
// console.log("check result",checker2.check());
// console.log(checker2._matrixMarks);
