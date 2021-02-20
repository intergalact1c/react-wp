import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import FeedbackForm from "./feedbackForm"
import FeedbackBeforeForm from "./feedbackBeforeForm"

import { StylesProvider } from "@material-ui/core/styles"

const Feedback = ({ feedbackModal }) => {
  if (feedbackModal) {
    return (
      <StylesProvider injectFirst>
      <div className="feedback feedback__popup">
        <Row>
          <div className="col-12">
            <FeedbackBeforeForm />
          </div>
          <div className="col-12">
            <FeedbackForm />
          </div>
        </Row>
      </div>
      </StylesProvider>
    )
  }

  return (
    <StylesProvider injectFirst>
      <div className="feedback">
        <Container fluid="xl">
          <Row>
            <div className="col-4">
              <FeedbackBeforeForm />
            </div>
            <div className="col-8">
              <FeedbackForm />
            </div>
          </Row>
        </Container>
      </div>
    </StylesProvider>
  )
}

export default Feedback
