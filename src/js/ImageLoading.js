import imagesLoaded from 'imagesloaded';

export default class ImageLoading {
  constructor() {
    this.imageLoad = imagesLoaded('body');
    this.imagesLength = this.imageLoad.images.length;
    this.imageLoaded = 0;
    this.loadProgress = this.loadProgress.bind(this);
    this.opening = document.querySelectorAll('.fn-opening');
    this.fadeOut = 'fadeOut';
    this.removeOpeningSpeed = 1000;
  }

  loadProgress() {
    this.imageLoad.on('progress', () => {
      return new Promise((resolve) => {
        this.imageLoaded += 1;
        resolve(this.imageLoaded);
      }).then((value) => {
        if (this.imagesLength <= value) {
          this.opening[0].classList.add(this.fadeOut);
          setTimeout(() => {
            this.opening[0].remove();
          }, this.removeOpeningSpeed);
        }
      });
    });
  }
}
