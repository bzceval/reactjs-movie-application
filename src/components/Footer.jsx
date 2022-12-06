import { BsMedium, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-light text-muted shadow-sm">
        <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 py-3">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
            </a>
            <span className="mb-3 mb-md-0">Designed for Busra Ceval</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-4"><BsMedium/></li>
            <li className="ms-4"><BsLinkedin /></li>
            <li className="ms-4"><BsGithub/></li>
          </ul>
        </footer>
      </div>
  )
}

export default Footer