var box={
    "daimao":1,
    "dawang":2,
    "xiaomo":0,
    "azhouna":0,
    "tesila":0,
    "yueshen":2,
    "xiaoen":0,
    "baiqiang":0,
    "jiaerna":1,
    "chuanzhang":2,
    "laer":0,
    "meifu":0,
    "yusheshen":0,
    "kongming":1,
    "chu":0,
    "sanzang":0,
    "jieke":0,
    "baizhen":0,
    "dagong":1,
    "heigou":0,
    "nanding":0,
    
    "shanshan":1,
    "gongdai":0,
    "lhu":0,
    "istalin":0,
    "bujie":0,
    "shijiang":0,
    "yilia":0,
    "215":0,
    "bjinshi":0,
    "merlin":0,
    "saberalter":0,
    "dadi":1,
    "xmao":0,
    "huajia":0,
    "naiguang":0,
    "yanhou":1,
    "jiutun":0,
    "dafenqi":0,
    "zongsi":0,
    "wuzang":0,
    "hasang":0,
};

var ranks={
    "daimao":3,
    "dawang":6,
    "xiaomo":4,
    "azhouna":4,
    "tesila":7,
    "yueshen":6,
    "xiaoen":4,
    "baiqiang":4,
    "jiaerna":6,
    "chuanzhang":7,
    "laer":8,
    "meifu":4,
    "yusheshen":6,
    "kongming":12,
    "chu":8,
    "sanzang":6,
    "jieke":7,
    "baizhen":8,
    "dagong":6,
    "heigou":8,
    "nanding":5,
    
    "shanshan":1,
    "gongdai":0,
    "lhu":0,
    "istalin":0,
    "bujie":0,
    "shijiang":0,
    "yilia":0,
    "215":0,
    "bjinshi":0,
    "merlin":0,
    "saberalter":0,
    "dadi":1,
    "xmao":0,
    "huajia":0,
    "naiguang":0,
    "yanhou":1,
    "jiutun":0,
    "dafenqi":0,
    "zongsi":0,
    "wuzang":0,
    "hasang":0,
};

var advice={
    "saber":0,
    "archer":0,
    "lancer":0,
    "caster":0,
    "rider":0,
    "assassin":0,
    "berserker":0,
};
function get_advice(){
    box["daimao"]=parseInt($("#np_daimao").val());
    box["dawang"]=parseInt($("#np_dawang").val());
    box["xiaomo"]=parseInt($("#np_xiaomo").val());
    box["azhouna"]=parseInt($("#np_azhouna").val());
    box["tesila"]=parseInt($("#np_tesila").val());
    box["yueshen"]=parseInt($("#np_yueshen").val());
    box["xiaoen"]=parseInt($("#np_xiaoen").val());
    box["baiqiang"]=parseInt($("#np_baiqiang").val());
    box["jiaerna"]=parseInt($("#np_jiaerna").val());
    box["chuanzhang"]=parseInt($("#np_chuanzhang").val());
    box["laer"]=parseInt($("#np_laer").val());
    box["meifu"]=parseInt($("#np_meifu").val());
    box["yusheshen"]=parseInt($("#np_yusheshen").val());
    box["kongming"]=parseInt($("#np_kongming").val());
    box["chu"]=parseInt($("#np_chu").val());
    box["sanzang"]=parseInt($("#np_sanzang").val());
    box["jieke"]=parseInt($("#np_jieke").val());
    box["baizhen"]=parseInt($("#np_baizhen").val());
    box["dagong"]=parseInt($("#np_dagong").val());
    box["heigou"]=parseInt($("#np_heigou").val());
    box["nanding"]=parseInt($("#np_nanding").val());
    box["shanshan"]=parseInt($("#np_shanshan").val());
    box["gongdai"]=parseInt($("#np_gongdai").val());
    box["lhu"]=parseInt($("#np_lhu").val());
    box["istalin"]=parseInt($("#np_istalin").val());
    box["bujie"]=parseInt($("#np_bujie").val());
    box["shijiang"]=parseInt($("#np_shijiang").val());
    box["yilia"]=parseInt($("#np_yilia").val());
    box["215"]=parseInt($("#np_215").val());
    box["bjinshi"]=parseInt($("#np_bjinshi").val());
    box["merlin"]=parseInt($("#np_merlin").val());
    box["saberalter"]=parseInt($("#np_saberalter").val());
    box["dadi"]=parseInt($("#np_dadi").val());
    box["xmao"]=parseInt($("#np_xmao").val());
    box["huajia"]=parseInt($("#np_huajia").val());
    box["naiguang"]=parseInt($("#np_naiguang").val());
    box["yanhou"]=parseInt($("#np_yanhou").val());
    box["jiutun"]=parseInt($("#np_jiutun").val());
    box["dafenqi"]=parseInt($("#np_dafenqi").val());
    box["wuzang"]=parseInt($("#np_wuzang").val());
    box["hasang"]=parseInt($("#np_hasang").val());
    box["zongsi"]=parseInt($("#np_zongsi").val());
    for(var i in box){
        if(isNaN(box[i]))
            box[i]=0;
        if(box[i]>=1){
            ranks[i]=ranks[i]*3/(box[i]+3);
        }
        if(i=="kongming"){
            console.log("a");
            ranks[i]=ranks[i]/(box[i]+1);
        }
    }
    advice["saber"]=ranks["daimao"]+ranks["dawang"]+ranks["xiaomo"];
    advice["archer"]=ranks["azhouna"]+ranks["tesila"]+ranks["yueshen"];
    advice["lancer"]=ranks["xiaoen"]+ranks["baiqiang"]+ranks["jiaerna"];
    advice["rider"]=ranks["chuanzhang"]+ranks["laer"]+ranks["meifu"]+ranks["yusheshen"];
    advice["caster"]=ranks["sanzang"]+ranks["chu"];
    advice["assassin"]=ranks["jieke"]+ranks["baizhen"];
    advice["berserker"]=ranks["nanding"]+ranks["dagong"]+ranks["heigou"];
    let saber_np_max=Math.max(box["daimao"],box["dawang"],box["xiaomo"],box["215"],box["saberalter"]);
    let saber_total=box["daimao"]+box["dawang"]+box["xiaomo"]+box["215"]+box["saberalter"];
    let saber_rank=ranks["daimao"]+ranks["dawang"]+ranks["xiaomo"];
    if(saber_np_max==0){
        advice["saber"]+=2*saber_rank;
        if(box["huajia"]+box["wuzang"]+box["zongsi"]==0)
            advice["saber"]+=saber_rank;
    }
    advice["saber"]/=3;
    let archer_np_max1=Math.max(box["azhouna"],box["tesila"],box["shanshan"],box["istalin"]);
    let archer_np_max2=Math.max(box["gongdai"],box["yueshen"]);
    if(archer_np_max1==0){
        advice["archer"]+=2*(ranks["azhouna"]+ranks["tesila"]);
        if(archer_np_max2==0)
            advice["archer"]+=(ranks["azhouna"]+ranks["tesila"]+3*ranks["yueshen"]);
    }
    else if(archer_np_max2==0){
        advice["archer"]+=2*ranks["yueshen"];
    }
    advice["archer"]/=3;
        
    let lancer_np_max=Math.max(box["xiaoen"],box["baiqiang"],box["jiaerna"],box["shijiang"],box["bujie"],box["lhu"]);
    if(lancer_np_max==0)
        advice["lancer"]+=3*(ranks["xiaoen"]+ranks["baiqiang"]+ranks["jiaerna"]);
    else{
        if(box["baiqiang"]==0&&box["jiaerna"]==0)
            advice["lancer"]=ranks["xiaoen"]+3*(ranks["baiqiang"]+ranks["jiaerna"]);
        else
            advice["lancer"]=3*ranks["xiaoen"]+ranks["baiqiang"]+ranks["jiaerna"];
    }
    advice["lancer"]/=3;
    
    advice["rider"]=ranks["chuanzhang"]+ranks["laer"]+ranks["meifu"]+ranks["yusheshen"];
    if(box["chuanzhang"]<=1)
        advice["rider"]+=(2*ranks["chuanzhang"]);
    if(box["laer"]+box["yusheshen"]+box["meifu"]==0)
        advice["rider"]+=2*(ranks["laer"]+ranks["meifu"]+ranks["yusheshen"]);
    if(box["laer"]==0)
        advice["rider"]+=(ranks["laer"]);
    if(box["yusheshen"]==0)
        advice["rider"]+=(ranks["yusheshen"]);
    if(box["meifu"]==0)
        advice["rider"]+=(ranks["meifu"]);
    advice["rider"]/=4;
    
    advice["caster"]=ranks["sanzang"]+ranks["chu"];
    if(box["kongming"]==0)
        advice["caster"]+=(4*ranks["kongming"]);
    if(box["chu"]==0){
        advice["caster"]+=1.8*ranks["chu"];
        if(box["dagong"]+box["gongdai"]+box["yueshen"]>0)
            advice["caster"]+=1.2*ranks["chu"];
    }
    if(box["sanzang"]+box["yilia"]==0){
        advice["caster"]+=(2*ranks["sanzang"]);
        if(box["dafenqi"]==0)
            advice["caster"]+=(ranks["sanzang"]);
    }
        
    advice["caster"]/=3;
    
    advice["assassin"]=ranks["jieke"]+ranks["baizhen"];
    if(box["jieke"]==0&&box["xmao"]<=1){
        advice["assassin"]+=(2*ranks["jieke"]);
        if(box["jiutun"]+box["yanhou"]+box["xmao"]==0)
            advice["assassin"]+=ranks["jieke"];
    }
        
    if(box["baizhen"]==0)
        advice["assassin"]+=(3*ranks["baizhen"]);
    advice["assassin"]/=2;
    
    advice["berserker"]=ranks["nanding"]+ranks["heigou"]+ranks["dagong"];
    if(box["bjinshi"]==0&&box["naiguang"]==0)
        advice["berserker"]+=(ranks["dagong"]+ranks["heigou"]);
    if(box["heigou"]==0)
        advice["berserker"]+=(2*ranks["heigou"]);
    if(box["dagong"]==0)
        advice["berserker"]+=(2*ranks["dagong"]);
    if(box["nanding"]==0&&box["merlin"]==0)
        advice["berserker"]+=(3*ranks["nanding"]);
    advice["berserker"]/=3;
    $("#advice_saber").text(parseInt(advice["saber"]*10));
    $("#advice_archer").text(parseInt(advice["archer"]*10));
    $("#advice_lancer").text(parseInt(advice["lancer"]*10));
    $("#advice_rider").text(parseInt(advice["rider"]*10));
    $("#advice_caster").text(parseInt(advice["caster"]*10));
    $("#advice_assassin").text(parseInt(advice["assassin"]*10));
    $("#advice_berserker").text(parseInt(advice["berserker"]*10));
}


