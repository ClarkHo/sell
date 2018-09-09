export function formatDate(date, fmt) {
	// \d+:表示1个或多个数字 
    // y+的意思是：匹配1个到多个y
    // (y+)的意思是：y+匹配到的内容可能通过分组来取到,这里是通过第一个分组取到.从后面的代码中可以看出,RegExp.$1就是取到的y+匹配到的内容
	// 年份
	if (/(y+)/.test(fmt)) { // 在es6下导出一个函数
		// 对一个或多个y进行匹配,匹配到就进行年的替换(年有四位,所以需要特殊处理)
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1, // js的月是从0开始算,所以要加1
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	// 对月,日,时,分,秒进行匹配替换(这些都是两位,可以一起处理)
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) { // 匹配到key例如MM
			let str = o[k] + '';
			// 如果匹配到的时间是1位数,例如是M,那么就直接使用date.getMonth() + 1的值,
            // 如果是两位数,那么就在前面补0,使用padLeftZero函数
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};

// 先加两个0,然后再根据长度截取(因为最长也就2个0的长度)
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
