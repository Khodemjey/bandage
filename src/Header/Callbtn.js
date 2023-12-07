

export default function Callbtn({img,text}) {
    return (
        <div className="call-btn-style">
            <img src={img} alt={img} />
            <span>{text}</span>
        </div>
    )
}
