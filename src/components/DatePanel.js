import './DatePanel.css'

function DatePanel(props){
    return (
        <div className = "datePanel">
            <div className = "monthCard">
                <div>{props.month}</div>
                <div>{props.year}</div>
            </div>
            <h2 className = "dateCard">{props.date}</h2>
        </div>
    )
};

export default DatePanel;