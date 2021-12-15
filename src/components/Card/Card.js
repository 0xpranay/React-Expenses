import './Card.css'

function Card(props){
    
    const classes = "card " + props.className; // Custom components need explicit set up of classNames
    return (
        // Custom components need to be set {props.children} as they aren't normal HTML tags
        // props.children is a reserved name for nested stuff inside our component
        <div className = {classes}>{props.children}</div>
    );
}

export default Card;  