import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>Главная</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to={"/clothes"}>Шмотки</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-secondary disabled" type="submit">Войти</button>
        <button className="btn btn-secondary disabled ml-1" type="submit">Зарегестрироваться</button>
      </nav>
    </div>
  );
}

export default Header;
