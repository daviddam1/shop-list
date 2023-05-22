import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronLeft, faChevronRight, faCircle,faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List(props){
    

    return(
        <div className="items-list">
            {props.id}
            <div onClick={props.handleIsChecked} className="isChecked">
                {props.isChecked?
                <FontAwesomeIcon icon={faCheckCircle} color="white" size="2x"/>:
                <FontAwesomeIcon icon={faCircle} color="white" size="2x"/>}
            </div>

            {props.isChecked? <><span className="item-name-completed">{props.name}</span></>:
            <><span className="item-name">{props.name}</span></>}
           
            <div className="counter">
                <FontAwesomeIcon onClick={props.handleItemDecrease} icon={faChevronLeft} size="lg"/>
                <span>{props.isChecked?0:<span>{props.count}</span>}</span>
                <FontAwesomeIcon onClick={props.handleItemIncrease} icon={faChevronRight} size="lg"/>
            </div>
            <div className="delete-item">
                <FontAwesomeIcon onClick = {props.deleteItem} icon={faTrash} size="lg"/>
            </div>
        </div>
    )
}