import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/user.slice';
import { useAppDispatch } from '../../redux/hooks';

import { Form, Input } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './login.module.scss';

export function LoginPage() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeButtonState = (disable = false) => setDisableButton(disable);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));

    // ? handle error
    if (!formData.username) return;

    const payload = {
      username: formData.username as string,
      isLogged: true,
    };

    dispatch(login(payload));
    navigate('/feed');
  };

  return (
    <Form title={'Welcome to CodeLeap network!'} onSubmit={onSubmit}>
      <Input
        label={'Please enter your username'}
        name={'username'}
        placeholder={'John doe'}
        labelClass={styles.labelClass}
        minLength={2}
        maxLength={200}
        changeButtonState={changeButtonState}
        required={true}
      />

      <Button type={'submit'} fit={'right'} disabled={disableButton}>
        ENTER
      </Button>
    </Form>
  );
}
