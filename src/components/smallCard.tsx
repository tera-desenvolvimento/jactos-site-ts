import "../style/smallCard.css";

export interface ICardData {
    iconPath: string;
    message: string
}

function SamllCard(props: ICardData) {
    return (
        <div className="small-card">
            <img src={props.iconPath} alt="card-icon" className="card-icon" />
            <b>{props.message}</b>
        </div>
    )
}

export default SamllCard;