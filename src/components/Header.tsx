import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='nav'>
      <div className='headerFlex'>
        <h2>LOGGA</h2>
        <div className='navigation'>
          <Link to="/">Hem</Link>
          <Link to="/sok-yrke">Sök yrke</Link>
          <Link to="/sok-utbildning">Sök utbildning</Link>
          <Link to="/om">Om</Link>
        </div>
      </div>
    </header>
  );
}
