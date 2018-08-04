//处理弹出的操作面板

class PopupNumbers{
    //操作面板一开始先隐藏,移除 hidden 类，避免之后的操作受其影响
    constructor($panel){
        //获取页面中的操作面板
        this._$panel=$panel.hide().removeClass("hidden");

        //给操作面板绑定相应的事件
        this._$panel.on("click","span",e=>{
            const $targetCell=this._$targetCell;
            const $operatorSpan=$(e.target);

            //点击操作面板左右按钮，回填样式
            if($operatorSpan.hasClass("popleft")){
                if($targetCell.hasClass("popleft")){
                    $targetCell.removeClass("popleft");
                }
                else{
                    $targetCell.addClass("popleft").removeClass("popright");
                }
            }
            else if($operatorSpan.hasClass("popright")){
                if($targetCell.hasClass("popright")){
                    $targetCell.removeClass("popright");
                }
                else{
                    $targetCell.addClass("popright").removeClass("popleft");
                }
            }

            //点击操作面板空白按钮，取消显示的数字
            else if($operatorSpan.hasClass("empty")){
                $targetCell.text(0).addClass("empty");
            }

            //点击操作面板数字1-9，回填数字
            else {
                $targetCell.removeClass("empty").text($operatorSpan.text());
            }

            //点击操作面板后，本次关掉操作面板
            this.hide();
        });
    }    

    //该方法在指定的位置弹出操作面板
    popup($targetCell,halfWidth){
        //获取当前点击的<span>,构造方法中给操作面板绑定事件用到
        this._$targetCell=$targetCell;
        //只有当点击的是空白小方格时，才显示操作面板让用户操作
        if(!$targetCell.hasClass("original")){
            let {left,top}=$targetCell.position();
            //当点击右边的小方格时，为保证面板不变形，合理计算操作面板位置
            if(left>=halfWidth){
                left=left-3*$targetCell.width();
            }
            this._$panel
                .css({
                    left:`${left}px`,
                    top: `${top}px`
                }).show();
        }
    }

    //关闭操作面板
    hide(){
        this._$panel.hide();
    }
}

module.exports=PopupNumbers;
