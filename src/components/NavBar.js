export const Navbar = ({ navItems }) => (
  <nav>
    <ul>
      {navItems?.map((item) => (
        <li onClick={item.onClick}>{item.name}</li>
      ))}
    </ul>
  </nav>
);
