import "./Card.css"
function Card({content,bgcolor}){
    return <>
    <div className="cardd" style={{backgroundColor:bgcolor}}>
        <p>{content}</p>
    </div>
    </>

}
export default Card