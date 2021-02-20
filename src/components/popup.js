import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { closeModal } from "../redux/actions"

import Modal from "react-bootstrap/Modal"
import Feedback from "./feedback/feedback"

const PopUp = () => {
  const dispatch = useDispatch()
  const { isModalVisible } = useSelector(({ isModalVisible }) => ({
    isModalVisible,
  }))
  const onHandleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Modal show={isModalVisible} onHide={onHandleClose} animation={false}>
      <Modal.Header closeButton />
      <Modal.Body>
        <Feedback feedbackModal={true} />
      </Modal.Body>
    </Modal>
  )
}

export default PopUp
