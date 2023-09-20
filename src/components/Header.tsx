import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='nav'>
      <div className='headerFlex'>
        <h2>LOGGA</h2>
        <div className='navigation'>
          <Link to="/">Yrkestipsarn</Link>
          <Link to="/om">Om</Link>
        </div>
      </div>
    </header>
  );
}
