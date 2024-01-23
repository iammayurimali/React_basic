import "./Itemdate.css"

export default function ItemDate(props){
    return(<div className="dateItem">
        <span>{props.day} </span>
        <span>{props.month} </span>
        <span>{props.year}</span>
    </div>)
}