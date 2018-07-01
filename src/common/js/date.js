export function formatDate(date, fmt) {
	// \d+:表示1个或多个数字 
    // y+的意思是：匹配1个到多个y
    // (y+)的意思是：y+匹配到的内容可能通过分组来取到,这里是通过第一个分组取到.从后面的代码中可以看出,RegExp.$1就是取到的y+匹配到的内容
	// 年份
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
