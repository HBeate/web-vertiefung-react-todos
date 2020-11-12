import React, { Component } from 'react';
import styles from './Todo.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

class Todo extends Component {

    getDoneWidget() {
        if (this.props.isDone) {
            return (
                <div>
                    <FaThumbsDown className={styles.iconThumb} />
                </div>
            )
        } else {
            return (
                <div>
                    <FaThumbsUp className={styles.iconThumb} />
                </div>
            )
        }
    }
    setDone = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <div className={styles.container}>
                {this.getDoneWidget()}
                <div>{this.props.title}</div>

                <div onClick={this.setDone}><IoIosCloseCircleOutline className={styles.icon} /></div>
            </div>
        );
    }
}

export default Todo;