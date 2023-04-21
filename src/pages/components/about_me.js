import me from "../../assets/images/me.png"

function AboutMe() {
    return(
        <div className={"about-me"} id={"aboutme"}>
            <p className={"component-title"}>About me</p>
            <div className={"row2"}>
                <div className={"bigtext"}>
                Ayan 22 years old single, not an alcoholic
                <br/>From Semey, graduated from NIS and AITU<br/>
                
                    <br/><br/>
                    From an early age, I liked the creative direction. Because of this, I do 3D modeling, because what limits you is only your imagination.
                </div>
                <img src={me} alt={"me"} className={"me2"}/>
            </div>
        </div>
    )
}

export default AboutMe