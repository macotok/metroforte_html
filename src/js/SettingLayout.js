import ScrollWindow from './ScrollWindow';

class SettingLayout {
  constructor() {
    this.scrollWindow = new ScrollWindow();
    this.sideElement = document.querySelector('.m-side-01');
    this.headerElement = document.querySelector('.m-header-01');
    this.visualElement = document.querySelector('.m-box-01');
    this.marginElement = document.querySelector('.m-box-02');
    this.companyElement = document.querySelector('.m-box-04');
    this.activeClassName = 'active';
    this.event();
    this.setHeight();
  }

  event() {
    this.scrollWindow.init(() => {
      this.sideElement.classList.add(this.activeClassName);
      this.headerElement.classList.add(this.activeClassName);
    });
  }

  setHeight() {
    const heightWindow = window.innerHeight || document.documentElement.clientHeight;
    this.visualElement.style.height = `${heightWindow}px`;
    this.marginElement.style.marginTop = `${heightWindow - 80}px`;
  }
}

export default SettingLayout;
