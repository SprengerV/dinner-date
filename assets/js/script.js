$(function () {
	$('.chips').chips();

	$('form .chips input').keydown(function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});
});