import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer d-flex justify-content-center">
      <div>&copy; 2020 <Link to="/elbrus" className="btn-link" target="_blank">elbrusboot.camp</Link> | By <Link className="btn-link gitrepo" to="/gitRepo" target="_blank">Kapusta</Link></div>
  </div>
  );
}

export default Footer;
