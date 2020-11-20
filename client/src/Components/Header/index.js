import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex">
          <Link className="navbar-brand" to={"/"}>Главная</Link>
          <Link className="nav-link" to={"/clothes"}>Шмотки</Link>
        </div>
        <div>
        <Link className="btn btn-secondary" to="/login">Войти</Link>
        <Link className="btn btn-secondary" to="/registration">Зарегистрироваться</Link>
        </div>
      </div>
  );
}

export default Header;
