function iter_carousel() {
	var cur = $('.carousel aside.active');
	var next = cur.next();
	if (next.length == 0) {
		next = $('.carousel aside').eq(0);
	}
	var nextnext = next.next();
	if (nextnext.length == 0) {
		nextnext = $('.carousel aside').eq(0);
	}

	cur.fadeOut('slow', function() {
		cur.css('z-index', '0');
		next.css('z-index', '2');
		nextnext.css('z-index', '1');
		cur.removeClass('active');
		next.addClass('active');
		cur.show();
	});

	setTimeout(iter_carousel, 5000);
}

function setup_carousel() {
	var items = $('.carousel aside');
	items.each(function(index, element) {
		$(element).css('z-index', '0');
	});
	if (items.length > 0) {
		items.eq(0).css('z-index', '2').addClass('active');
	}
	if (items.length > 1) {
		items.eq(1).css('z-index', '1');
	}

	setTimeout(iter_carousel, 5000);
}

$(document).ready(function () {
	setup_carousel();
});
