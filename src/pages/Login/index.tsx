import { useState } from 'react';

import { Form, Input } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './login.module.scss';

export function LoginPage() {
  const [button, setButtonState] = useState<boolean>(true);

  const changeButtonStatus = (status = false) => setButtonState(status);

  return (
    <Form title={'Welcome to CodeLeap network!'}>
      <Input
        label={'Please enter your username'}
        name={'usename'}
        placeholder={'John doe'}
        labelClass={styles.labelClass}
        required={true}
        changeButtonStatus={changeButtonStatus}
      />

      <Button type={'submit'} fit={'right'} disabled={button}>
        ENTER
      </Button>
    </Form>
  );
}
