import { useState } from 'react';

import { Form, Input } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './login.module.scss';

export function LoginPage() {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const changeButtonState = (disable = false) => setDisableButton(disable);

  return (
    <Form title={'Welcome to CodeLeap network!'}>
      <Input
        label={'Please enter your username'}
        name={'usename'}
        placeholder={'John doe'}
        labelClass={styles.labelClass}
        minLength={2}
        changeButtonState={changeButtonState}
        required={true}
      />

      <Button type={'submit'} fit={'right'} disabled={disableButton}>
        ENTER
      </Button>
    </Form>
  );
}
