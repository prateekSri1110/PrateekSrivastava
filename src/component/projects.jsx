export default function Projects() {
    return (
        <div id="project">
            <br /><br /><hr />
            <div className="container project p-4" id="project">

                <h3 className="text-center">PROJECTS</h3>
                <div className="image-container">
                    <div className="image"><img src="res1.jpg" /></div>
                    <div className="image"><img src="res3.jpg" /></div>
                    <div className="image"><img src="res8.jpg" /></div>
                    <div className="image"><img src="res9.jpg" /></div>
                    <div className="image"><img src="res11.jpg" /></div>
                    <div className="image"><img src="res15.jpg" /></div>
                </div>
                <div className="popup-image">
                    <span className="sp">&times;</span>
                    <img className="imga" src="bed1.jpg" />
                </div>
                <hr />
            </div>
        </div>
    );
}