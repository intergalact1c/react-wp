import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import TextField from "@material-ui/core/TextField/TextField"

const initialState = {
  botInput: "",
  firstName: "",
  email: "",
  phone: "",
  company: "",
  taskDescription: "",
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Пожалуйста, введите действительное имя")
    .required("Обязательное поле")
    .max(40)
    .trim(),
  email: yup
    .string()
    .email("Указан неверный формат")
    .required("Обязательное поле")
    .trim(),
  phone: yup
    .number()
    .typeError("Указан неверный формат")
    .required("Обязательное поле"),
  company: yup.string().max(40).trim(),
  taskDescription: yup.string().trim(),
})

const FeedbackForm = () => {
  const [contactInfo, setContactInfo] = React.useState(initialState)
  const handleChangeInput = e => {
    const { name, value } = e.target
    setContactInfo({
      ...contactInfo,
      [name]: value,
    })
  }
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    shouldFocusError: false,
  })

  const onSubmit = async () => {
    const isValid = await schema.isValid(contactInfo)

    if (isValid) {
      if (botInput !== "") {
        alert("Вы ввели поле бота с данными")
      } else {
        alert(
          "Ваше имя: " +
            firstName.trim() +
            "\nE-mail: " +
            email.trim() +
            "\nТелефон: " +
            phone.trim() +
            "\nКомпания: " +
            company.trim() +
            "\nОписание задачи: " +
            taskDescription.trim()
        )
        setContactInfo(initialState)
      }
    }
  }
  const {
    botInput,
    firstName,
    email,
    phone,
    company,
    taskDescription,
  } = contactInfo

  return (
    <form className="feedback__form" onSubmit={(e) => handleSubmit(onSubmit)(e.preventDefault())}>
      <input
        type="hidden"
        name="botInput"
        value={botInput || ""}
        onChange={handleChangeInput}
      />
      <Row>
        <div className="col-6">
          <TextField
            name="firstName"
            label="Ваше имя"
            variant="outlined"
            fullWidth={true}
            value={firstName || ""}
            onChange={handleChangeInput}
            inputRef={register}
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
        </div>
        <div className="col-6">
          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            fullWidth={true}
            value={email || ""}
            onChange={handleChangeInput}
            inputRef={register}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </div>
      </Row>
      <Row>
        <div className="col-6">
          <TextField
            name="phone"
            label="Телефон"
            variant="outlined"
            fullWidth={true}
            value={phone || ""}
            onChange={handleChangeInput}
            inputRef={register}
            error={!!errors.phone}
            helperText={errors?.phone?.message}
          />
        </div>
        <div className="col-6">
          <TextField
            name="company"
            label="Компания"
            variant="outlined"
            fullWidth={true}
            value={company || ""}
            onChange={handleChangeInput}
            inputRef={register}
            error={!!errors.company}
            helperText={errors?.company?.message}
          />
        </div>
      </Row>
      <Row>
        <div className="col-12">
          <TextField
            name="taskDescription"
            label="Описание задачи"
            variant="outlined"
            multiline
            rows={4}
            rowsMax={4}
            fullWidth={true}
            value={taskDescription || ""}
            onChange={handleChangeInput}
            inputRef={register}
            error={!!errors.taskDescription}
            helperText={errors?.taskDescription?.message}
          />
        </div>
      </Row>
      <Row>
        <div className="feedback__bottom col-12">
          <Button
            as="input"
            type="submit"
            value="Отправить заявку"
            variant="outline-primary"
            className="feedback__submit-btn"
          />
          <span className="feedback__agreement">
            Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
          </span>
        </div>
      </Row>
    </form>
  )
}

export default FeedbackForm
