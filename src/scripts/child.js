var $ = require('./libs/jquery');
module.exports = {
	getPerson:function () {
		$.ajax({
			
			url:"/api/list",
			success:function (data) {
				console.log(data)
			}
		});
	}
};
