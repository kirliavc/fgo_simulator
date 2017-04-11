var log=new Array(11);
var times=0;
var alter=0;
//0:4serv,1:3serv,2:4craft,3:3craft
var serv5=new Array("002","008","037","052","059","060","062","065","075","076","084","085","097"); //add 084,085 迦尔纳、阿周那
var craft5=new Array("031","032","033","034","035","048","057","058","067","075","097","175");
var serv4=new Array("006","010","011","014","018","029","030","041","046","047","048","058","066","074","082","087","089","094","100","101");
var serv3=new Array("007","009","013","015","017","020","022","023","026","027","028","031","035","042","049","055","056","063","064","071","072","079","080","081","095","104","105");
var craft4=new Array("021","022","023","024","025","026","027","028","029","030","038","039","047","056","066","073","074","098","176");
var upcraft4=new Array("182","183","184");
var craft3=new Array("037","042","046","055","065","072","089","090","091","092","093","094","095","096","177");

function getOne(i,j){
    var imgurl;
    var rand;
    if(j==0){
        times=times+1;
        $("#times").text(times);
        rand=Math.random();
    }
        
    else
        rand=j;
    if(rand<0.01){ //5,servant
        log[i]=0;
        if(rand<0.0065){    //up
            imgurl="http://file.fgowiki.591mogu.com/fgo/head/106.jpg";
            $("#r_"+i).attr("src",imgurl);
            $("#serv5").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
            return;
        }
        var bias=(0.01-0.0065)/serv5.length;
        for(var r=0;r<serv5.length;r=r+1){  //not up
            if(rand>=0.0065+r*bias&&rand<0.0065+(r+1)*bias){
                imgurl="http://file.fgowiki.591mogu.com/fgo/head/"+serv5[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                $("#serv5").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<0.05){  //5,craft
        log[i]=2;
        var bias=(0.05-0.01)/craft5.length;
        for(var r=0;r<craft5.length;r=r+1){
            if(rand>=0.01+r*bias&&rand<0.01+(r+1)*bias){
                imgurl="http://fgowiki.com/fgo/equip/"+craft5[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                $("#craft5").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<0.08){  //4,servant
        log[i]=0;
        var bias=(0.08-0.05)/serv4.length;
        for(var r=0;r<serv4.length;r=r+1){
            if(rand>=0.05+r*bias&&rand<0.05+(r+1)*bias){
                imgurl="http://file.fgowiki.591mogu.com/fgo/head/"+serv4[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                $("#serv4").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<0.2){   //4,craft
        log[i]=2;
        var bias=0.024;
        for(var r=0;r<upcraft4.length;r=r+1){   //up
            if(rand>=0.08+r*bias&&rand<0.08+(r+1)*bias){
                imgurl="http://fgowiki.com/fgo/equip/"+upcraft4[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                $("#craft4").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
        bias=(0.2-0.152)/craft4.length;
        for(var r=0;r<craft4.length;r=r+1){     //not up
            if(rand>=0.152+r*bias&&rand<0.152+(r+1)*bias){
                imgurl="http://fgowiki.com/fgo/equip/"+craft4[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                $("#craft4").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                return;
            }
        }
    }
    if(rand<0.6){   //3,servant
        log[i]=1;
        var bias=(0.6-0.2)/serv3.length;
        for(var r=0;r<serv3.length;r=r+1){
            if(rand>=0.2+r*bias&&rand<0.2+(r+1)*bias){
                imgurl="http://file.fgowiki.591mogu.com/fgo/head/"+serv3[r]+".jpg";
                $("#r_"+i).attr("src",imgurl);
                
                return;
            }
        }
    }
    //3,craft
    log[i]=3;
    var bias=(1-0.6)/craft3.length;
    for(var r=0;r<craft3.length;r=r+1){     //not up
        if(rand>=0.6+r*bias&&rand<0.6+(r+1)*bias){
            imgurl="http://fgowiki.com/fgo/equip/"+craft3[r]+".jpg";
            $("#r_"+i).attr("src",imgurl);
            return;
        }
    }
}
function getTen(){
    log=new Array(11);
    for(var i=1;i<=10;i++)
        getOne(i,0);
    var no_gold=true,no_servant=true;   //pro: golden card, mini:servant
    for(var i of log){
        if(i%2==0)
            no_gold=false;
    }
    if(no_gold){     //no golden card,randomly pick a silver card, change to a gold card
        var pick=parseInt(Math.random()*10+1);
        getOne(pick,Math.random()*0.2);
    }
    for(var i of log){  //check if no servant is summoned.
        if(i<2)
            no_servant=false;
    }
    if(no_servant){
        var pick=parseInt(Math.random()*10+1);
        var cnt=0;
        while(log[pick]%2==0&&cnt<30){     //no servant, randomly pick a silver card
            pick=parseInt(Math.random()*10+1);
            cnt+=1;
        }
        var rand=Math.random()*0.44;
        if(rand>0.01&&rand<=0.04)   //(0.01,0.04] -> (0.05,0.08]
            rand=rand+0.04;
        else if(rand>0.04)      //(0.04,0.44) -> (0.2,0.6)
            rand+=0.16;
        getOne(pick,rand);
    }
}
function clearResult(){
    for(var i=1;i<=10;i++){
        $("#r_"+i).attr("src","");
    }
}
