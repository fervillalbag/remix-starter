import { Link } from "remix";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.4",
        }}
      >
        <ul>
          <li>
            <Link to="/" rel="noreferrer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" rel="noreferrer">
              About
            </Link>
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
};

export default Layout;
