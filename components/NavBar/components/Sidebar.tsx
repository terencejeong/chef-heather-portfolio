import { NavBarStyles } from '../NavBar.styles';
import { CrossIcon } from './CrossIcon';

type SideBar = {
  isOpen: boolean;
  handleIsOpen: () => void;
};
export const Sidebar: React.FC<SideBar> = ({ isOpen, handleIsOpen }) => {
  return (
    <NavBarStyles.SideNav open={isOpen}>
      <CrossIcon handleIsOpen={handleIsOpen} />
    </NavBarStyles.SideNav>
  );
};
