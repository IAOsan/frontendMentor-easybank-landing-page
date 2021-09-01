const navbar = {
   container: document.querySelector('.header'),
   btn: document.querySelector('.navbar__icon-box'),
   containsClass: function (target, className) {
      return target.classList.contains(className) ? true : false;
   },
   toggle: function () {
      this.btn.addEventListener(
         'click',
         () => {
            this.container.classList.toggle('open');
         },
         false
      );
   },
   scrolling: function (element) {
      const offsetY = pageYOffset;
      const e = document.querySelector(`.${element}`).offsetHeight - 80;

      this.container.classList.toggle('shadow', offsetY >= e);
   },
};

navbar.toggle();
window.addEventListener('scroll', () => navbar.scrolling('hero'), false);
