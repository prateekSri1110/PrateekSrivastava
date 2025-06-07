import java from '../pngs/java.png';
import cpp from '../pngs/cpp.png';
import css3 from '../pngs/css3.png';
import github from '../pngs/github.png';
import mysql from '../pngs/mysql.png';
import react from '../pngs/react.png';
import html from '../pngs/html.png';
import js from '../pngs/js.png';
import springboot from '../pngs/spring-boot.png';
import bootstrap from '../pngs/bootstrap.png';
import python from '../pngs/python.png';
import mongo from '../pngs/mongo.png';


export default function Skills() {
    return (
        <div id="skill">
            <br /><br /><hr />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <h3 className="text-center mside">SKILLS</h3>
                    <br /><br />
                    <div className='col-4 p-3 text-center'>
                        <img style={{ width: "100px", padding: "15px" }} src={java} alt="java" />
                        <img style={{ width: "100px", padding: "15px" }} src={cpp} alt="cpp" />
                        <img style={{ width: "100px", padding: "15px" }} src={python} alt="python" />
                        <img style={{ width: "100px", padding: "15px" }} src={mysql} alt="mysql" />
                    </div>
                    <div className='col-4 p-3 text-center'>
                        <img style={{ width: "100px", padding: "15px" }} src={html} alt="html" />
                        <img style={{ width: "100px", padding: "15px" }} src={js} alt="js" />
                        <img style={{ width: "100px", padding: "15px" }} src={css3} alt="css3" />
                        <img style={{ width: "100px", padding: "15px" }} src={bootstrap} alt="bootstrap" />
                    </div>
                    <div className='col-4 p-3 text-center'>
                        <img style={{ width: "100px", padding: "15px" }} src={react} alt="React" />
                        <img style={{ width: "120px", padding: "15px" }} src={mongo} alt="mongoDB" />
                        <img style={{ width: "120px", padding: "15px" }} src={springboot} alt="springboot" />
                        <img style={{ width: "100px", padding: "15px" }} src={github} alt="github" />
                    </div>
                </div>
            </div>
        </div>
    );
}
