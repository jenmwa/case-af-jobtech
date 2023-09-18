import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='headerFlex'>
        <h2>LOGGA</h2>
        <div className='navigation'>
          <Link to="/">Yrkestipsarn</Link>
          <Link to="/about">Om</Link>
        </div>
      </div>
    </header>
  );
}
