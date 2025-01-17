import Footer from "./partials/Footer";
import Header from "./partials/Header";
// import "./TeacherHome.css";
function Home() {
  return (
    <>
      <Header />
      <div class="row " style={{ backgroundColor: "#EAE7DC" }}>
        <div
          class="col-2"
          style={{
            width: "240px",
            minHeight: "550px",
            backgroundColor: "#EAE7DC",
          }}
        >
          <div
            class="d-flex flex-column flex-shrink-0 p-3   "
            style={{
              width: "200px",
              minHeight: "550px",
              // backgroundColor: "#150485",
            }}
          >
            {/* <div
            style={{
              width: "200px",
              minHeight: "550px",
              backgroundColor: "#150485",
            }}
          > */}
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg class="bi pe-none me-2" width="40" height="32">
                {/* <use xlink:href="#bootstrap"/> */}
              </svg>
              {/* <span class="fs-4">Sidebar</span> */}
            </a>
            {/* <hr> */}
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link "
                  aria-current="page"
                  style={{ color: "#E85A4F" }}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#home"/> */}
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#speedometer2"/> */}
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"/> */}
                  </svg>
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#grid"/> */}
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#people-circle"/> */}
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            {/* <hr> */}
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle text-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  class="rounded-circle me-2"
                />
                <strong class="text-light">mdo</strong>
              </a>
              <ul class="dropdown-menu text-small shadow">
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
            {/* </div>{" "} */}
          </div>{" "}
        </div>

        <div class="col-10  ">
          <h2>Home</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
