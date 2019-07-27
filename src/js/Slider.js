class Slider {
  constructor() {
    this.slider = document.querySelectorAll('.fn-slider');
    this.active = 'active';
    this.random = Math.round(Math.random());
    this.activeNumber = null;
    this.animationSpeed = 19500;
    this.count = 1;
  }

  event() {
    if (this.slider.length) {
      this.slider[this.random].classList.add(this.active);
    }
    const slide = setInterval(() => {
      if (this.count >= 3) {
        clearInterval(slide);
      }
      this.count += 1;
      this.setAnimation();
      this.slider[this.activeNumber].classList.add(this.active);
    }, this.animationSpeed);
  }

  setAnimation() {
    const currentActiveNumber = Object.values(this.slider).findIndex(slide => (
      slide.classList.contains(this.active)
    ));
    this.slider.forEach((slide) => {
      slide.classList.remove(this.active);
    });
    switch (currentActiveNumber) {
      case 0:
        this.activeNumber = 1;
        break;
      case 1:
        this.activeNumber = 0;
        break;
      default:
        break;
    }
  }
}
export default Slider;
