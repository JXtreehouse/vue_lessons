
/*modal滚动*/
var dixY=0;
/*$("#tableModal .scroll").mouseWheel(function(down){
            if(down){
                dixY-=40;
                var disH=$(this).parent().height()-this.offsetHeight;
                if(dixY<=disH) dixY=disH-20;
                $(this).css({"transform":"translateY("+dixY+"px)"});
            }else{
                dixY+=40;
                if (dixY>=0) dixY=0;
                $(this).css({"transform":"translateY("+dixY+"px)"});
            }
        })*/
/*弹出框/模态框*/
function modal(obj,fn){
    "use strict";
    this.modal=obj||console.log("未传obj");
    this.head=obj.querySelector(".modal-header");
    this.modalContent=obj.querySelector(".modal-content");
    this.body=this.modal.querySelector(".modal-body");
    this.scroll=this.body.querySelector(".scroll");
    this.closeBtn=obj.querySelector(".close");//x按钮
    this.cancelBtn=obj.querySelector(".cancel");//取消按钮
    this.callBackFn=fn||null;
    this.modal.addEventListener("click",function(ev){
        /*srcElement*/
        var oSrc=ev.target||ev.srcElement;
        if(this.closeBtn.contains(oSrc) || oSrc.className.indexOf("cancel")!=-1){
            this.hide();
            drag&&drag.init();
            this.callBackFn&&_this.callBackFn();
        }

    }.bind(this),false);


    var drag=new Drag({
        obj:this.modalContent,
        clickEl:this.head
    });

}
modal.prototype={
    constructor:modal,
    hide:function(){
        var that=this;
        common.setCss3(this.modal,"transform","scale(1,0)");
        setTimeout(function(){
            that.modal.style.display="none";
        },200);
    },
    show:function(){
        var that=this;
        var maxH=document.documentElement.clientHeight*0.68+"px";
        this.body.style.maxHeight=maxH;
        if(this.scroll){
            this.scroll.style.maxHeight=maxH-parseInt(getComputedStyle(this.body,false).paddingTop)+"px";
        }
        common.setCss3(this.modal,"transform","scale(1,0)");
        common.setCss3(this.modal,"transition","transform 0.2s linear 0s");
        this.modal.style.display="block";
        //居中
        setTimeout(function(){
            var l=-that.modalContent.offsetWidth/2,t=-that.modalContent.offsetHeight/2;
            that.modalContent.style.marginLeft=l+"px";
            that.modalContent.style.marginTop=t+'px';
        },1);
        //动画
        setTimeout(function(){
            common.setCss3(that.modal,"transform","scale(1,1)");
        },4);

    }
}
//transform拖拽
function Drag(opt){
    this.x=0;
    this.y=0;
    this.obj=opt.obj;
    this.clickEl=opt.clickEl||opt.obj;
    this.clickEl.onmousedown=function(ev){
        this.mousedown(ev);
        return false;
    }.bind(this);
}
Drag.prototype={
    constructor:Drag,
    mousedown:function(ev){
        var diffX=ev.clientX-this.x,
            diffY=ev.clientY-this.y;
        var that=this;
        document.onmousemove = function (ev) {
            that.x = ev.clientX - diffX;
            that.y = ev.clientY - diffY;
            //l t限制在这写
            that.obj.style.transform = "translate("+that.x+"px,"+that.y+"px)";
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    },
    init:function(){
        this.x=0;
        this.y=0;
        setTimeout(function(){
            this.obj.style.transform = "translate(0px,0px)";
        }.bind(this),200);
    }
};

var common={};
common.setCss3=function(obj,name,value){
    /*
     *name ---> "transition"
     *value --->"scale(0,1)"
     */
    var str = name.charAt(0).toUpperCase() + name.substring(1);
    if(obj.style[name]!="undefined"){
        obj.style[name]  = value;
        return false;
    }else if(obj.style["Webkit" + str]!="undefined"){
        obj.style["Webkit" + str] = value;
        return false;
    }else if(obj.style["Moz" + str]!="undefined"){
        obj.style["Moz" + str]  = value;
        return false;
    }else if(obj.style["ms" + str]!="undefined"){
        obj.style["ms" + str]  = value;
        return false;
    }else if(obj.style["O" + str]!="undefined"){
        obj.style["O" + str]  = value;
        return false;
    }
};
common.dayNum=function(time){
    //算时间(天数)2016-01-02==>256446天
    var arr=time.split("-");
    return arr[0]*365+arr[1]*30+(arr[2]-0);
};
common.fillZero=function(n){
    return n<10?"0"+n:""+n;
};
common.getTime=function(opts){
    /*获取当前时间*/
    var d=opts.time||new Date();
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    month=common.fillZero(month);
    var date=d.getDate();
    date=common.fillZero(date);
    var hours=d.getHours();
    hours=common.fillZero(hours);
    var minutes=d.getMinutes();
    minutes=common.fillZero(minutes);
    var seconds=d.getSeconds();
    seconds=common.fillZero(seconds);
    switch(opts.rule){
        case "yyyy-MM-dd":
            return year+"-"+month+"-"+date;
        break;
        case "yyyy-MM-dd hh:mm:ss":
            return year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds;
        break;
        default:
            return year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds;
    }

};



