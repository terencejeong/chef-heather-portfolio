export default `
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 20px;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }

  &.recipe {
    font-family: 'Merriweather Regular';
  }

  &.logo {
    & img {
      max-height: 158px;
      max-width: 632px;
      width: 100%;
      height: 100%;
      display: block;
      margin: 0 auto;
    } 
  }
  `;
