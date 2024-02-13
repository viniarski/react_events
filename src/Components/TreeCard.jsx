import "./TreeCard.css"
import Button from "./Button"
export default function TreeCard(props) {
    return (
        <div className="treecard">
            <h1>{props.treeName}</h1>
            <img src={props.imgLink}/>
            <h2>{props.location}</h2>
            <Button/>
        </div>
    )
}

// export default function TreeCard(treeName, location, imgLink) {
//     return (
//         <div id="tree-card">
//             <h1>{treeName}</h1>
//             <img src={imgLink} alt=""/>
//             <h2>{location}</h2>
//         </div>
//     )
// }


