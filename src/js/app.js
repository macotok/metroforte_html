import Drawer from './Drawer';
import ElementAnimation from './ElementAnimation';
import SettingLayout from './SettingLayout';
import Slider from './Slider';
import pageLink from './pageLink';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  const elementAnimation = new ElementAnimation();
  elementAnimation.getPositionToBlock();
  const settingLayout = new SettingLayout();
  settingLayout.event();
  pageLink();
  const slider = new Slider();
  slider.event();
};
