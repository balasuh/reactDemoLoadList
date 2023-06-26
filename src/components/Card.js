import star from '../assets/star.png';

function Card(props){
    // const imageURL = require(`../assets/${props.img}`);
    const imageURL = require(`../assets/${props.coverImg}`);
    let badgeText = '';
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
            <>
                <article className="card-section--card">
                    {badgeText ? <div className="card--badge">{badgeText}</div> : ''}
                    {/* <img src={`../../public/${props.img}`} alt={props.alt ? props.alt : ''} className="card--image" /> */}
                    <img src={imageURL} alt={props.alt ? props.alt : ''} className="card--image" />
                    <div className="card--image--caption">
                        <img src={star} alt="A small red star" className="image--caption--star" />
                        <span >{props.stats.rating}</span>
                        <span className="gray">({props.stats.reviewCount}) 🞄 {props.location}</span>
                    </div>
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </article>
            </>
    )
}

export default Card;