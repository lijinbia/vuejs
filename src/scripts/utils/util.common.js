module.exports = {
	render:function (str) {
		var body = document.body;
		body.innerHTML = str + body.innerHTML;
	}
}
