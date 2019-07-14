import ScrollWindow from './ScrollWindow';

class Opening {
  constructor() {
    this.scrollWindow = new ScrollWindow();
    this.event();
    this.sideElement = document.querySelector('.m-side-01');
    this.headerElement = document.querySelector('.m-header-01');
    this.activeClassName = 'active';
  }

  event() {
    this.scrollWindow.init(() => {
      this.sideElement.classList.add(this.activeClassName);
      this.headerElement.classList.add(this.activeClassName);
    });
  }
}

export default Opening;
