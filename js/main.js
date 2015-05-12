	function Proto($) {
		/* Variables
		--------------------------------------------------- */
		// private
		var _self = this;
		var menuShowing = false;
		var temp = 'example';

		_self.initialize = function() {
			_self.clickEvents();
		};
		_self.clickEvents = function() {
			$('.wrapper .row div span').mouseenter(function(event) {
				event.preventDefault();
				$(this).parent().find('ul').addClass('active');
			});
			$('.wrapper .row div').mouseleave(function(event) {
				event.preventDefault();
				$(this).find('ul').removeClass('active');
			});
			$('.wrapper .menu-link').click(function(event) {
				event.preventDefault();
				if (menuShowing)
					$(this).siblings('.row').removeClass('active');
				// $(this).parents('#body-container').addClass('shift-left');
				else
					$(this).siblings('.row').addClass('active');
				// $(this).parents('#body-container').removeClass('shift-left');
				menuShowing = !menuShowing;
			});
		};

		_self.initialize();
	}

	var proto;
	jQuery(document).ready(function() {
		proto = new Proto(jQuery);
	});