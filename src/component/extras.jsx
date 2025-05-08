import CR1 from "../assets/CR1.png"
import CR2 from "../assets/CR2.png"
const Extra = () => {
    return (
        <>
            <hr />
            <div className="container p-3">
                <h3 className="mb-5 text-center">CLASS REPRESENTATIVE</h3>
                <h4 className="text-center">July, 2024 - December, 2024</h4>
                <img src={CR1} style={style} class="mx-auto d-block img-fluid" alt="CR" />
                <br />
                <h4 className="text-center">January, 2024 - May, 2025</h4>
                <img src={CR2} style={style} class="mx-auto d-block img-fluid" alt="CR" />
            </div>
        </>
    )
}

const style = {
    width: "60%",
    height: "auto",
    marginBottom: "10px",
    maxwidth: "100%",
    // display: "block",
}

export default Extra;