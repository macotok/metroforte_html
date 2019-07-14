import Drawer from './Drawer';
import pageLink from './pageLink';
import ScrollEvent from './ScrollEvent';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  const scrollEvent = new ScrollEvent();
  scrollEvent.setUp();
  pageLink();
};
