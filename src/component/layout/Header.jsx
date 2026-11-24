import { NavLink } from "react-router-dom";

//NavLink component from react-router-dom is used to navigate the url where we want to go or render.
//For example previously we hit url of "/","/about","/movie","contact" then router will route this component.
//But now we directly click on Home, About, Movie, Contact text then Navlink will link that path using "to" props
// and router will route this path to the component.

export const Header = () => {

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ThapaFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movie">movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact">contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
