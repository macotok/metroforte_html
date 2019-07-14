import Drawer from './Drawer';
import Opening from './Opening';
import pageLink from './pageLink';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  const opening = new Opening();
  opening.event();
  pageLink();
};
