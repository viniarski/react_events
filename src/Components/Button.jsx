import "./Button.css"

export default function Button ()  {

    function handleClick() {
        console.log("More info in the console?");
    }
    return (
        <button className="btn" onClick={handleClick}>More info</button>
    )
}