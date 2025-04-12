import CR from "../assets/CR.png"
const Extra = () => {
    return (
        <>
            <hr />
            <div className="container p-3">
                <h3 className="mb-5 text-center">CLASS REPRESENTATIVE</h3>
                <img src={CR} style={style} class="mx-auto d-block img-fluid" alt="CR"></img>
            </div>
        </>
    )
}

const style = {
    width: "60%",
    height: "auto",
    maxwidth: "100%",
    // display: "block",
}

export default Extra;