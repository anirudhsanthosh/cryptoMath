import { useNavigate } from "react-router-dom";
import "../../components.css";
import { useState } from "react";

function Header() {
  const [parents, setParents] = useState(
    JSON.parse(localStorage.getItem("parents"))
  );
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0" }}>
        <div class=" bg-light" style={{ height: "70px" }}>
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <h5
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  lobster-regular p-2 m-2"
              style={{ color: "#8E8D8A" }}
            >
              CryptoMath
            </h5>
            <a
              href="#"
              class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>

            <h2
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 "
              style={{ color: "#8E8D8A" }}
            ></h2>

            <div class="dropdown text-end">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul class="dropdown-menu text-small">
                <li>
                  <a class="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="d-flex justify-content-between"
            style={{ backgroundColor: "#245501", height: "50px" }}
          >
            <div>
              <div class="dropdown">
                <button className="dropbtn btn text-light m-2 ">
                  <a className="links" href="/">
                    Home
                  </a>
                </button>
              </div>
              <div class="dropdown">
                <button class="dropbtn btn text-light">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn btn text-light">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn btn text-light">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn btn text-light">Register</button>
                <div class="dropdown-content">
                  <a href="/parents/student_register">student</a>
                  {/* <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                </div>
              </div>
            </div>

            <div
            style={
              parents?.status === "parent" ? { display: "" } : { display: "none" }
            }
            >
              {" "}
              <div class="dropdown ">
                <button className="dropbtn btn text-light m-2  ">
                  <a className="links" onClick={Logout}>
                    <sub className="text-light p-2">{parents.email}</sub>Logout
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;