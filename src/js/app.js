import Drawer from './Drawer';
import pageLink from './pageLink';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  pageLink();
};
