import prateek from '../assets/me.jpg'
import './allStyles.css'
import PDF from './resume';

export default function About() {
    return (
        <div className='mt-5' id='about'>
            <div className="container-fluid">
                <div className="row p-0 align-items-center">
                    <div className="col-sm-5 text-center">
                        <img className="img-fluid mt-4 shadow-lg dp" src={prateek} alt="profile" width="310px" />
                    </div>
                    <div className="col-sm-7">
                        <br />
                        <h1 className="mside">Hi there👋! I'm [Prateek Srivastava]</h1><br />
                        <p className="para">
                            🚀 Passionate about Full Stack Development.<br />
                            💻 Currently solving LeetCode problems in Java / MySQL / C++ & learning Web Development.<br />
                            🤝 Looking to collaborate on exciting projects.<br />
                            📫 Connect with me: <a href="https://www.linkedin.com/in/prateek-srivastava-1005/">LinkedIn</a> <a href="https://leetcode.com/u/prateekxri/">Leetcode</a> <a href="https://github.com/prateekSri1110">Github</a> <a href="https://www.instagram.com/prateekxri/">Instagram</a>
                        </p>
                        <p className="para">As a Master's student in AI & ML, I thrive on tackling complex problems and developing innovative applications. I'm dedicated to expanding my technical expertise. When I'm not coding, you can find me exploring new destinations, experimenting in the kitchen, or enjoying long rides. I'm always eager to learn, create, and contribute.</p>
                        <hr />
                        <h4>SOFTWARE ENGINEER</h4>
                        <span className="text-uppercase text-center">Expertise
                            in Building Web Applications</span>
                        <br /><br />
                        <PDF />
                    </div>
                </div>
            </div>
        </div>
    );
}