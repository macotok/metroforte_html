import $ from 'jquery';

class ElementAnimation {
  constructor() {
    this.$targetElement = $('.fn-listAnimation');
    this.$targetItemtElement = $('.fn-listAnimation-item');
    this.$targetItemtElement02 = $('.fn-listAnimation-item-02');
    this.targetElementPosition = [];
    this.targetElementPosition02 = [];
    this.observeTime = 200;
    this.controlPosition = 700;
    this.setTimeAnimation = 1000;
  }

  getPositionToBlock() {
    for (let i = 0; i < this.$targetElement.length; i += 1) {
      this.targetElementPosition.push(this.$targetElement.eq(i).offset().top);
    }
    for (let i = 0; i < this.$targetItemtElement02.length; i += 1) {
      this.targetElementPosition02.push(this.$targetItemtElement02.eq(i).offset().top);
    }
    this.eventScroll();
    this.resizeWindow();
  }

  eventScroll() {
    window.addEventListener('scroll', () => { this.scrollFunc(); });
  }

  scrollFunc() {
    const scrollTopPosition = $(window).scrollTop();
    this.checkIsAnimation(scrollTopPosition);
  }

  checkIsAnimation(scrollTopPosition) {
    this.targetElementPosition.filter((t, index) => {
      if (t <= scrollTopPosition + this.controlPosition) {
        this.$targetElement.eq(index).addClass('startAnimation');
        setTimeout(() => {
          this.$targetElement.eq(index).addClass('endAnimation');
          this.eventAnimation(this.$targetElement.eq(index));
        }, this.setTimeAnimation);
      }
      return false;
    });
    this.targetElementPosition02.filter((t, index) => {
      if (t <= scrollTopPosition + this.controlPosition) {
        this.$targetItemtElement02.eq(index).addClass('active');
      }
      return false;
    });
  }

  eventAnimation(targetElement) {
    targetElement.find(this.$targetItemtElement).addClass('active');
  }

  resizeWindow() {
    window.addEventListener('resize', () => {
      clearTimeout(this.observeResize);
      this.observeResize = setTimeout(() => {
        this.targetElementPosition = [];
        this.targetElementPosition02 = [];
        this.getPositionToBlock();
      }, this.observeTime);
    }, false);
  }
}

export default ElementAnimation;
