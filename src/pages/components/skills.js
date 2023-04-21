import m3d from "../../assets/images/3d.webp"

function Skills() {
    return(
        <div className={"about-me"} id={"skills"}>
            <p className={"component-title"}>Skills</p>
            <div className={"row3"}>
                <p>Blender 3D modeling <br/>I've been using Blender for 4-5 years, I made 1 project linking the features of Blender and Unreal Engine.<br/></p>
                <img className={"skills-image"} src={m3d}/>
            </div>
        </div>
    )
}

export default Skills