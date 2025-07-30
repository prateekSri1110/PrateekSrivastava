export default function Projects() {
  return (
    <header id="project">
      <br />
      <br />
      <hr />
      <section className="container project p-4" id="project">
        <h3 className="text-center">PROJECTS</h3>
        <br />
        <div className="image-container">
          <div className="row d-flex">
            <div className="col-6">
              <iframe
                src="https://github.com/prateekSri1110/ProgramMate"
                style={{ border: "1px solid black" }}
                width="90%"
                height="300px"
              />
            </div>
            <div className="col-6">
              <h3>ProgramMate</h3>
              <p>
                {" "}
                ProgramMate - Programming Application
                <li>User Login using Google sign-in method.</li>
                <li>Random Question generate and code submission.</li>
                <li>Admin Authentication and Verification.</li>
                <li>Admin add/remove and submission view rights.</li>
                <a href="https://github.com/prateekSri1110/ProgramMate">Link</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row d-flex">
            <div className="col-6">
              <iframe
                src="https://cugpacalculator.netlify.app/"
                style={{ border: "1px solid black" }}
                width="90%"
                height="300px"
              />
            </div>
            <div className="col-6">
              <h3>GPA Calculator</h3>
              <p>
                {" "}
                SPA GPA Calculator
                <li>Add as many as subjects you want.</li>
                <li>Grade Table</li>
                <li>seconds of game to calculate semester GPA.</li>
                <a href="https://cugpacalculator.netlify.app/">Link</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row d-flex">
            <div className="col-6">
              <iframe
                src="https://shayarana.netlify.app/"
                style={{ border: "1px solid black" }}
                width="90%"
                height="300px"
              />
            </div>
            <div className="col-6">
              <h3>Shayarana</h3>
              <p>
                {" "}
                MERN Stack Project.
                <li>Poetry and shayari reading and contribution platform.</li>
                <li>API building (deployed on netlify).</li>
                <li>
                  Upload, Fetch and delete your posts. Authentication and
                  Profiling.
                </li>
                <a href="https://shayarana.netlify.app/">Link</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row d-flex">
            <div className="col-6">
              <iframe
                src="https://greenclassifier.streamlit.app/"
                style={{ border: "1px solid black" }}
                width="90%"
                height="300px"
              />
            </div>
            <div className="col-6">
              <h3>Green Classifier Model</h3>
              <p>
                {" "}
                Vegetable / Fruit Classification model.
                <li>
                  Developed a Deep Learning model using TensorFlow and Keras to
                  classify images of fruits/vegetables.
                </li>
                <li>
                  Deployed on Streamlit with an intuitive UI, achieving 90%
                  classification accuracy.
                </li>
                <a href="https://greenclassifier.streamlit.app/">Link</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row d-flex">
            <div className="col-6">
              <iframe
                src="https://prateeksri1110.github.io/Teahub/"
                style={{ border: "1px solid black" }}
                width="90%"
                height="300px"
              />
            </div>
            <div className="col-6">
              <h3>TeaHub</h3>
              <p>
                {" "}
                Tea ordering Web Portal
                <li>
                  Developed this web application with the help of tailwind CSS.
                </li>
                <li>Deployed on Github Pages.</li>
                <a href="https://prateeksri1110.github.io/Teahub/">Link</a>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h4 className="text-center">
          Check Out my <a href="https://github.com/prateekSri1110">Github</a>{" "}
          for more Porjects.
        </h4>
        <br />
        <hr />
      </section>
    </header>
  );
}
