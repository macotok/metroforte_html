class ResizeWindow {
  constructor() {
    this.observeTime = 200;
    this.observeResize = null;
    this.event();
  }

  init(callback = null) {
    this.isResize = callback;
  }

  event() {
    window.addEventListener('resize', () => {
      clearTimeout(this.observeResize);
      this.observeResize = setTimeout(() => {
        if (this.isResize) this.isResize();
      }, this.observeTime);
    }, false);
  }
}

export default ResizeWindow;
