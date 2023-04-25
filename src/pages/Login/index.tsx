import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/user';
import { useAppDispatch } from '../../redux/hooks';

import { Form, Input, Checkbox } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './login.module.scss';

export function LoginPage() {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeButtonState = (errorStatus = 'error') => setDisableButton(errorStatus === 'error');

  const onSubmit = (event: iSubmitEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.username) return;

    const payload: iUserState = {
      username: form.username.value as string,
      remember: form.remember.checked,
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

      <Checkbox
        name={'remember'}
        label={'Remember me'}
        labelClass={styles.labelClass}
      />

      <Button type={'submit'} fit={'right'} disabled={disableButton}>
        ENTER
      </Button>
    </Form>
  );
}
