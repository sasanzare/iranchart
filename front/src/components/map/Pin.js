import React,{PureComponent} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
export default class Pin extends PureComponent {
    render(){
        const {size = null} = this.props;
        return(
            <FontAwesomeIcon
                icon={faMapMarkerAlt}
                height={size} 
                className="h1 text-es"
                style={{fontSize:size}}
                onClick={this.props.clicked.bind(this)} 
            />
        )
    }
}