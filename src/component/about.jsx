import prateek from '../assets/p2.jpg'
import './allStyles.css'
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
                        <p className="para">Currently pursuing my Master's in AI & ML, I love solving complex problems, building innovative applications and continuously expanding my technical skills. Beyond coding, you'll find me exploring new places, cooking delicious food, and enjoying long rides. Always eager to learn, create, and make an impact!</p>
                        <hr />
                        <h4>SOFTWARE ENGINEER</h4>
                        <span className="text-uppercase text-center">Expertise
                            in Building Web Applications</span>
                    </div>
                </div>
            </div>
        </div>
    );
}