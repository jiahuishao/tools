var tools = {
    //格式化时间 年-月-日 时:分:秒
    //参数说明：参数说明 time-new Date()
    formatDate: function (time) {
        let year = time.getFullYear();
        let month = tools.doubleDate(time.getMonth());
        let date = tools.doubleDate(time.getDate());
        let hour = tools.doubleDate(time.getHours());
        let minute = tools.doubleDate(time.getMinutes());
        let second = tools.doubleDate(time.getSeconds());
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    },
    //使用rem自适应
    //参数说明：baseFont-参照字体大小 designerWindowSize-切图页面宽度
    adaptable: function(baseFont,designerWindowSize){
        let thisScreeWidth = $(window).width();
        if(thisScreeWidth < 1200){
            thisScreeWidth = 1200;
        }
        let thisFontSize = baseFont * (thisScreeWidth / designerWindowSize) +'px';
        $("html").css('font-size',thisFontSize);
        $(window).resize(function(){
            let thisWidth = $(window).width();
            if(thisWidth < 1200){
                thisWidth = 1200;
            }
            let thisSize = baseFont * (thisWidth / designerWindowSize) +'px';
            $("html").css('font-size',thisSize);
        })
    },
    //获取字符数，汉字占两个字符
    //参数说明：val-检查字符
    getByteLen:function (val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
            let a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    },
    //金额格式化 1000,1000,1000.11
    //参数说明：money-金额
    moneyFormat: function (money) {
        let decimal = money.split('.')[1];
        let integer = money.split('.')[0];
        let numArr = integer.split('');
        numArr.reverse();
        for (let i = 0; i < numArr.length; i++) {
            if ((i + 1) % 4 === 0) {
                numArr.splice(i, 0, ',')
            }
        }
        numArr.reverse();
        decimal = decimal ? '.' + decimal : ''
        return numArr.join('') + decimal;
    },
    //检查手机/座机号格式
    //参数说明：tel-手机/座机号
    //返回说明：true-通过验证 false-验证失败
    checkTel:function(tel)
    {
        var mobile = /^1[3|5|8]\d{9}$/ , phone = /^0\d{2,3}-?\d{7,8}$/;
        return mobile.test(tel) || phone.test(tel);
    },
}