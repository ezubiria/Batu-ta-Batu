console.info('🚀App:init');

//Anime

var _window = window,
      anime = _window.anime;
      
var _slide = {};
_slide.default = function (targets, step, direction) {
	  var duration = 500;
	  var from = step === 'leave' ? 0 : 100;
	  var to = step === 'leave' ? 100 : 0;

	  targets.style.transform = direction === 'next' ? 'translateX(' + from + '%)' : 'translateX(-' + from + '%)';

	  var translateX = direction === 'next' ? '-' + to + '%' : to + '%';
	  var staggerX = window.innerWidth * 0.1;
	  var anim = anime.timeline({
	    easing: 'easeInOutQuart',
	    duration: duration
	  });

	  anim.add({
	    targets: targets,
	    translateX: translateX
	  });

	  if (step === 'enter') {
	    anim.add({
	      targets: targets.querySelectorAll('main > *'),
	      translateX: direction === 'next' ? [staggerX, 0] : [-staggerX, 0],
	      duration: duration * 0.6,
	      easing: 'easeOutQuart',
	      delay: anime.stagger(100)
	    }, '-=500');
	  }

	  return anim.finished;
  };
  

  var _slide2 = {};
  _slide2.default = function (targets, step, direction) {
      var duration = 500;
      var from = step === 'leave' ? 0 : 100;
      var to = step === 'leave' ? 100 : 0;
  
      targets.style.transform = direction === 'up' ? 'translateY(' + from + '%)' : 'translateY(-' + from + '%)';
  
      var translateY = direction === 'up' ? '-' + to + '%' : to + '%';
      var staggerY = window.innerHeight * 0.1;
      var anim = anime.timeline({
        easing: 'easeInOutQuart',
        duration: duration
      });
  
      anim.add({
        targets: targets,
        translateY: translateY
      });
  
      if (step === 'enter') {
        anim.add({
          targets: targets.querySelectorAll('main > *'),
          translateY: direction === 'up' ? [staggerY, 0] : [-staggerY, 0],
          duration: duration * 0.6,
          easing: 'easeOutQuart',
          delay: anime.stagger(100)
        }, '-=500');
      }
  
      return anim.finished;
    };


//Barba page transitions

	barba.hooks.before(function () {
	  barba.wrapper.classList.add('is-animating');
	});
	barba.hooks.after(function () {
	  barba.wrapper.classList.remove('is-animating');
	});

	barba.init({
	  transitions: [{
	    sync: true,
	    custom: function custom(_ref) {
	      var trigger = _ref.trigger;
	      return trigger.dataset && trigger.dataset.direction === 'next';
	    },
	    leave: function leave(_ref2) {
	      var current = _ref2.current;
	      return (0, _slide.default)(current.container, 'leave', 'next');
	    },
	    enter: function enter(_ref3) {
	      var next = _ref3.next;
	      return (0, _slide.default)(next.container, 'enter', 'next');
	    }
	  }, {
	    sync: true,
	    custom: function custom(_ref4) {
	      var trigger = _ref4.trigger;
	      return trigger.dataset && trigger.dataset.direction === 'prev';
	    },
	    leave: function leave(_ref5) {
	      var current = _ref5.current;
	      return (0, _slide.default)(current.container, 'leave', 'prev');
	    },
	    enter: function enter(_ref6) {
	      var next = _ref6.next;
	      return (0, _slide.default)(next.container, 'enter', 'prev');
	    }
	  }, {
	    sync: true,
	    custom: function custom(_ref7) {
	      var trigger = _ref7.trigger;
	      return trigger.dataset && trigger.dataset.direction === 'up';
	    },
	    leave: function leave(_ref8) {
	      var current = _ref8.current;
	      return (0, _slide2.default)(current.container, 'leave', 'up');
	    },
	    enter: function enter(_ref9) {
	      var next = _ref9.next;
	      return (0, _slide2.default)(next.container, 'enter', 'up');
	    }
	  }, {
	    sync: true,
	    custom: function custom(_ref10) {
	      var trigger = _ref10.trigger;
	      return trigger.dataset && trigger.dataset.direction === 'down';
	    },
	    leave: function leave(_ref11) {
	      var current = _ref11.current;
	      return (0, _slide2.default)(current.container, 'leave', 'down');
	    },
	    enter: function enter(_ref12) {
	      var next = _ref12.next;
	      return (0, _slide2.default)(next.container, 'enter', 'down');
	    }
	  }]
		});