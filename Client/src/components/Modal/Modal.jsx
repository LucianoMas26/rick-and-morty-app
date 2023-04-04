import React from "react"
import styles from "../Modal/Modal.module.css"

function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={props.onClose}>
          &times;
        </span>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Modal
