class ScrollWindow {
  constructor() {
    this.observeTime = 200;
    this.observeScroll = null;
    this.event();
  }

  init(callback = null) {
    this.isScroll = callback;
  }

  event() {
    window.addEventListener('scroll', () => {
      clearTimeout(this.observeScroll);
      this.observeScroll = setTimeout(() => {
        if (this.isScroll) this.isScroll();
      }, this.observeTime);
    }, false);
  }
}

export default ScrollWindow;
