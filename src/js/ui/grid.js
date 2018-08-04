//生成九宫格
const Toolkit=require("../core/toolkit");
const Sudoku=require("../core/sudoku");
const Checker=require("../core/checker");

class Grid{
    constructor(container){
        this._$container=container;    
    }

    /**
     * 创建一个矩阵并将矩阵中的每个元素包裹在span中
     * 矩阵的每一行又包裹在div中，最后将矩阵放入主体中
     */
    build(){
        const sudoku=new Sudoku();
        sudoku.make();
        const matrix=sudoku.puzzleMatrix;//建立游戏迷盘
        // const matrix=sudoku.solutionMatrix;//建立完整的数独游戏
        const rowGroupClasses=["row_g_top","row_g_middle","row_g_bottom"];
        const colGroupClasses=["col_g_left","col_g_center","col_g_right"];

        /**
         * 将矩阵中的每一个元素都包裹在span标签中
         * matrix为二维数组，将二维数组中的一维数组传给rowValue
         * 再对一维数组rowValue进行处理
         */                        
        const $cells=matrix.map(rowValues=>{return rowValues
            .map((cellValue,colIndex)=>{
            return $("<span>")            
            .text(cellValue)
            .addClass(cellValue?"original ":"empty")//如果该位置有非0值，则original 类设置背景为白色，否则设置为灰色(这样用户就看不到数字0)
            .addClass(colGroupClasses[colIndex%3]);//给每个span添加对应位置的类
        })});
        
        //将每一行包裹在div中并返回
        const $divArray=$cells.map(($spanArray,rowIndex)=>{
            return $("<div>")
            .addClass("row")            
            .append($spanArray)
            .addClass(rowGroupClasses[rowIndex%3]);//给每个div添加对应位置的类
        });

        this._$container.append($divArray);                
    }

    /**
     * 设置矩阵样式
     * 具体为：小方格为正方形，字体大小设置
     */
    layout(){
        const width=$("span:first",this._$container).width();
        $("span",this._$container).height(width)
        .css({
            "line-height":`${width}px`,//es6语法，模板字符串: ${var}
            "font-size":width<32?`${width/2}px`:""//宽度小则用小字体，否则用大字体
        })
    }

    /**
     * 点击游戏迷盘空白小方格弹出操作面板
     * 给操作面板绑定事件
     */
    bindPopup(popupNumbers){
        this._$container.on("click","span",e=>{
            const $cell=$(e.target);//获取当前点击的sapn
            popupNumbers.popup($cell,this._$container.width()/2);//调用相关函数弹出操作面板
        })
    }

    /**
     * 检查用户输入的矩阵
     */
    check(){
        //从界面获取需要检查的数据
        //获取一个jquery对象(数组),数组中每个元素都是界面中的一行数据一共有9行(也是数组))
        const data=this._$container.children()//jquery数组
                    .map((rowIndex,div)=>{//此处使用的是jquery.map(),div是9行数据中的一行
                        return $(div).children()//数据中的9个span,div为jquer对象
                        .map((colIndex,span)=>parseInt($(span).text()) || 0);//获取span中的值
                    }).toArray()//将jquery数据转换为js数组
                    .map($data=>$data.toArray());//将js数组中的div jquery对象转换为js数组

        //将data传入checker进行检查
        const checker=new Checker(data);
        if(checker.check()){
            return true;
        }
        //如果检查结果后，发现错误则进行标记
        //获取标志矩阵，标记矩阵中值为false的小方格
        const marks=checker._matrixMarks;
        this._$container.children()
        .each((rowIndex,div)=>{
            $(div).children().each((colIndex,span)=>{
                const $span=$(span);
                if(marks[rowIndex][colIndex]){
                    $span.removeClass("error original-error");
                }
                else{
                    //如果检查结果为false，但是该值为数独初始值，则另外标志出来
                    //类 original  是在建立数独的时候给一开始就需要显示数字的小方格加上的
                    if($span.is(".original ")){
                        $span.addClass("original-error");
                    }
                    else{//标志用户填写结果错误的小方格
                        $span.addClass("error");
                    }
                }
            });
        });
    }   

    /**
     * 重置游戏，使游戏恢复初始状态
     * 重置会重置除初始信息外的所有样式和数值信息
     */
    reset(){
        //过滤掉游戏开始时给出的小方格,去除游戏过程中填入的所有样式和数值信息,重置本局游戏
        this._$container.find("span:not(.original)")
        .removeClass("error popleft popright")
        .addClass("empty").text(0);
        //初始值只需要去除它添加的对应样式，不用添加空样式
        this._$container.find("span.original")
        .removeClass("original-error")
    }

    /**
     * 清理错误提示标志,与 reset
     * 清理除初始信息外的所有样式信息
     */
    clear(){
        this._$container.find("span:not(.original)")
        .removeClass("error popleft popright");
        this._$container.find("span.original")
        .removeClass("original-error");
    }

    /**
     * 新建一盘游戏
     * 先清空原来的游戏界面
     * 后重新调用方法建立游戏界面
     */
    rebuild(){
        //清空原来的游戏界面，JQuery.empty()函数用于清空每个匹配元素内的所有内容
        this._$container.empty();
        this.build();//建立矩阵
        this.layout();//设置样式
    }
}

module.exports=Grid;