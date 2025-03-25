import streamlit from '../assets/streamlit.png'

export default function Projects() {
    return (
        <div id="project">
            <br /><br /><hr />
            <div className="container project p-4" id="project">

                <h3 className="text-center">PROJECTS</h3>
                <br />
                <div className="image-container">
                    <div className="row d-flex">
                        <div className="col-6">
                            <iframe
                                src="https://shayarana.netlify.app/"
                                width="90%" height="300px"
                                style={{ border: "none" }}
                                title="Embedded Site"
                            ></iframe>
                        </div>
                        <div className="col-6">
                            <h3>Shayarana</h3>
                            <p> MERN Stack Project.
                                <li>
                                    Poetry and shayari reading and contribution platform.
                                </li>
                                <li>
                                    API building (deployed on netlify).
                                </li>
                                <li>
                                    Upload, Fetch and delete your posts. Authentication and Profiling.
                                </li>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row d-flex">
                        <div className="col-6">
                            <img src={streamlit}
                                width="90%" height="300px"
                                alt='' style={{ border: "none" }} />
                        </div>
                        <div className="col-6">
                            <h3>Green Classifier Model</h3>
                            <p> Vegetable / Fruit Classification model.
                                <li>
                                    Developed a Deep Learning model using TensorFlow and Keras to classify images
                                    of fruits/vegetables.
                                </li>
                                <li>
                                    Deployed on Streamlit with an intuitive UI, achieving 90% classification accuracy.
                                </li>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row d-flex">
                        <div className="col-6">
                            <iframe
                                src="https://prateeksri1110.github.io/Teahub/"
                                width="90%" height="300px"
                                style={{ border: "1px solid black" }}
                                title="Embedded Site"
                            ></iframe>
                        </div>
                        <div className="col-6">
                            <h3>TeaHub</h3>
                            <p> Tea ordering Web Portal
                                <li>
                                    Developed this web application with the help of tailwind CSS.
                                </li>
                                <li>
                                    Deployed on Github Pages.
                                </li>
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <h4 className='text-center'>Check Out my <a href="https://github.com/prateekSri1110">Github</a> for more Porjects.</h4>
                <br /><hr />
            </div>
        </div >
    );
}