
import './Button.css';

const Button = ( props ) => {

    const btClick = () => {
        console.log('props value', props )
    }

    return (
        <div>
            <button className= "bt-cal" onclick= {btClick} >
                {  props.btName }
            </button>
        </div>
    )

    };  

export default Button;

