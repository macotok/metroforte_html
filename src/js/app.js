import Drawer from './Drawer';
import ElementAnimation from './ElementAnimation';
import ImageLoading from './ImageLoading';
import SettingLayout from './SettingLayout';
import pageLink from './pageLink';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  const elementAnimation = new ElementAnimation();
  elementAnimation.getPositionToBlock();
  const imageLoading = new ImageLoading();
  imageLoading.loadProgress();
  const settingLayout = new SettingLayout();
  settingLayout.event();
  pageLink();
};
