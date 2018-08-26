$('#liwu').click(function(){
	$('.lwgm_tc').show();
	var swiper = new Swiper('.lwbbs', {
	    pagination: '.line',
	    auto: 4000,
		continuous: true,
		autoplayDisableOnInteraction : false,
		disableScroll:false
	});
});
$('.lw_item').click(function(){
	var val = $(this).attr('data-id');
	var jg = $(this).attr('data-jg');
	var lwname = $(this).attr('data-name');
	$('.lw_id').val(val);
	$('.lw_jg').val(jg);
	$('.lw_lwname').val(lwname);
	$(".lw_item_sele").removeClass("lw_item_sele");
	$(this).addClass("lw_item_sele");
});

$('.lw_tj').click(function(){
	var lw_mbid = $('.lw_mbid').val();
	var lw_id = $('.lw_id').val();
	var lw_name = $('.lw_name').val();
	if(lw_id == ''){
		msgMax('请选择礼物','好的');
		return false;
	}
	if(lw_name == ''){
		msgMax('请输入您的名字','好的');
		return false;
	}
	document.forms['lw_form'].submit();
});


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
    