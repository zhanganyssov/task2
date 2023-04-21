import me from "../assets/images/me.png"

function Main() {
    return(
        <div className={"main"}>
            <img src={me} className={"my-image"} alt={"me"}/>
            <p className={"title"}>HELLO, I am Ayan!</p>
            <p className={"sub-title"}>Software Engineer</p>
            <div className={"row"}>
                <a href={"#aboutme"}>About me</a>
                <a href={"#skills"}>Skills</a>
            </div>
        </div>
    )
}

export default Main;
