import "../style/aligner.css";

export interface IAlignerProps {
    children?: React.ReactNode,
    justify?: string,
    style?: React.CSSProperties,
    direction: string
}

function Aligner(props: IAlignerProps) {
    if (props.style) {
        if (props.justify){
            return (
                <div className={"aligner " + props.direction + " " + props.justify} style={props.style}>
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className={"aligner " + props.direction} style={props.style}>
                    {props.children}
                </div>
            )
        }
    } else {
        if (props.justify){
            return (
                <div className={"aligner " + props.direction + " " + props.justify}>
                    {props.children}
                </div>
            )
        } else {
            return (
                <div className={"aligner " + props.direction}>
                    {props.children}
                </div>
            )
        }
    }
}
export default Aligner;