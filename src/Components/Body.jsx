import "./Body.css";
import TreeCard from "./TreeCard"

export default function Body() {
    return (
        <div className="body">
            <TreeCard treeName="Baobab" location="Africa" imgLink="https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TreeCard treeName="Birch" location="Europe" imgLink="https://images.unsplash.com/photo-1623030509174-bfb71499f4c5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TreeCard treeName="Oak" location="Europe" imgLink="https://images.unsplash.com/photo-1549886607-9375fb7b6911?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    )
}
