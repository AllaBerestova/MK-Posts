import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Form } from "../../components/ui/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalWrapper } from "../../components/ui/ModalWrapper";
import { Modal } from "../../components/ui/Modal";
import { ModalText } from "../../components/ui/ModalText";
import { Button } from "../../components/ui/Button";

export const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({name: '', surname: '', email: '', password: ''})
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    try{
      const users = JSON.parse(localStorage.getItem('users'))
      const userId = Date.now()
      const newUser = {id: userId, ...formValues}

      if(!users){
        localStorage.setItem('users', JSON.stringify([newUser]))
        setMessage('Вы успешно зарегистрировались')
        
        return
      }

      if(users.find((user) => user.email === formValues.email)){
        setMessage('Пользователь с таким Email уже существует')
        return
      }

      users.push(newUser)

      localStorage.setItem('users', JSON.stringify(users))
      setMessage('Вы успешно зарегистрировались')

    } catch(e){
      console.log(e)
    }
  }

  const disabled = !formValues.email || !formValues.password;

  const handleModalClose = () => {
    setMessage('')
    if (message === 'Вы успешно зарегистрировались') {
      navigate('/auth');
    }
  };

  return (
    <Container>
      {message && (
        <ModalWrapper>
          <Modal>
            <ModalText>{message}</ModalText>
            <Button onClick={handleModalClose}>Окей</Button>
          </Modal>
        </ModalWrapper>
      )}
      <Typo>Страница регистрации</Typo>
      <Form onSubmit={onSubmit}>
        <Field>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={formValues.name}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="text"
            name="surname"
            placeholder="Фамилия"
            value={formValues.surname}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formValues.email}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            autoComplete="off"
          />
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formValues.password}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            autoComplete="off"
          />
        </Field>
        <Button type="submit" disabled={disabled}>Регистрация</Button>
      </Form>
    </Container>
  );
};
