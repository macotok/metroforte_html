class ScrollEvent {
  constructor() {
    this.boxPositionList = [];
    this.targetBoxList = document.querySelectorAll('.fn-boxOffsetTop');
    this.targetMarginBoxList = document.querySelectorAll('.fn-marginBox');
    this.marginBoxList = [];
    this.observeTime = 200;
  }

  setUp() {
    for (let i = 0; i < this.targetBoxList.length; i += 1) {
      const rect01 = this.targetBoxList[i].getBoundingClientRect();
      const rect02 = this.targetMarginBoxList[i].getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.boxPositionList.push(rect01.top + scrollTop);
      this.marginBoxList.push((rect02.top + scrollTop) - this.boxPositionList[i]);
    }
    this.resizeWindow();
    this.event();
  }

  event() {
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.checkScrollTop();
    }, false);
  }

  checkScrollTop() {
    this.boxPositionList.filter((t, index) => {
      if (t <= this.scrollTop) {
        this.targetBoxList[index].classList.add('fixed');
        if (index === 0) {
          this.targetMarginBoxList[index].style.marginTop += `${this.marginBoxList[index] * 2}px`;
        }
        if (index === 1) {
          this.targetMarginBoxList[index].style.marginTop += `${this.marginBoxList[index]}px`;
        }
      } else {
        this.targetBoxList[index].classList.remove('fixed');
      }
    });
    return false;
  }

  resizeWindow() {
    window.addEventListener('resize', () => {
      clearTimeout(this.observeResize);
      this.observeResize = setTimeout(() => {
        this.boxPosistionList = [];
        this.setUp();
      }, this.observeTime);
    }, false);
  }
}
export default ScrollEvent;
