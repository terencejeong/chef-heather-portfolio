import { NavBarStyles } from '../NavBar.styles';
export const Hamburger = ({ handleIsOpen }) => {
  return (
    <>
      <NavBarStyles.Hamburger onClick={handleIsOpen}>
        {new Array(3).fill(3).map((_, i) => (
          <NavBarStyles.Bar key={`hamburger-${i}`}></NavBarStyles.Bar>
        ))}
      </NavBarStyles.Hamburger>
    </>
  );
};
