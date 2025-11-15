import prateek from "../assets/Prateek.jpeg";
import "./allStyles.css";
import PDF from "./resume";

export default function About() {
  return (
    <div className="mt-5" id="about">
      <div className="container-fluid">
        <div className="row p-0 align-items-center">
          <div className="col-sm-5 text-center">
            <img
              className="img-fluid mt-4 shadow-lg dp"
              src={prateek}
              alt="profile"
              width="310px"
            />
          </div>
          <div className="col-sm-7">
            <br />
            <h1 className="mside">Hi there👋! I'm [Prateek Srivastava]</h1>
            <br />
            <p className="para">
              🚀 Full Stack Developer @ CloudKeeper with skills in Spring Boot,
              REST APIs, React.js, AWS, and MySQL, and hands-on experience building
              scalable web applications. Solved 700+ DSA problems to strengthen
              problem-solving abilities. Eager to contribute to collaborative
              software development teams and grow as a professional developer.
              <br />
              📫 Connect with me:{" "}
              <a href="https://www.linkedin.com/in/prateek-srivastava-1005/">
                LinkedIn
              </a>{" "}
              <a href="https://leetcode.com/u/prateekxri/">Leetcode</a>{" "}
              <a href="https://github.com/prateekSri1110">Github</a>{" "}
              <a href="https://www.instagram.com/prateekxri/">Instagram</a>
            </p>
            <p className="para">
              As a Master's student in AI & ML, I thrive on tackling complex
              problems and developing innovative applications. I'm dedicated to
              expanding my technical expertise. When I'm not coding, you can
              find me exploring new destinations, experimenting in the kitchen,
              or enjoying long rides. I'm always eager to learn, create, and
              contribute.
            </p>
            <hr />
            <h4>SOFTWARE ENGINEER</h4>
            <span className="text-uppercase text-center">
              Expertise in Building Full Stack Applications
            </span>
            <br />
            <br />
            <PDF />
          </div>
        </div>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>

        <div
          class="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="prateek-srivastava-1005"
          data-version="v1"
        >
          <a
            hidden
            class="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/prateek-srivastava-1005?trk=profile-badge"
          >
            Prateek Srivastava
          </a>
        </div>
      </div>
    </div>
  );
}
