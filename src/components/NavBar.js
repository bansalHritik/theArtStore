export const NavBar = ({ navItems }) => (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li onClick={item.onClick}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
  