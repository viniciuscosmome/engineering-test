import { useState, FormEvent } from 'react';

import { Form, Input } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './login.module.scss';

export function LoginPage() {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const changeButtonState = (disable = false) => setDisableButton(disable);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));

    console.log(formData);
  };

  return (
    <Form title={'Welcome to CodeLeap network!'} onSubmit={onSubmit}>
      <Input
        label={'Please enter your username'}
        name={'usename'}
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
