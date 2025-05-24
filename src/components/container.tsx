import "../style/container.css";

export interface IContainerProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
    id?: string
}

function Container(props: IContainerProps) {
    return (
        <div className={"container " + (props.className ? props.className : "")} style={props.style}>
            {props.children}
        </div>
    );
}

export default Container;