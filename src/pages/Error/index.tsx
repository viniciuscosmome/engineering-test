import { useParams, useNavigate } from 'react-router-dom';

import styles from './error.module.scss';
import { Button } from '../../components/partials';
import { IcArrowLeft } from '../../components/icons';

interface dynamicAccess {
  [key: string]: Array<string>;
}

export function ErrorPage() {
  const navigate = useNavigate();
  let { code } = useParams();

  if (!code) {
    code = '500';
  }

  const messages: dynamicAccess = {
    '200': ['OK', 'The request has succeeded.'],
    '201': ['Created', 'The request has been fulfilled and a new resource has been created.'],
    '204': ['No Content', 'The server successfully processed the request, but is not returning any content.'],
    '400': ['Bad Request', 'The server cannot or will not process the request due to an apparent client error.'],
    '401': ['Unauthorized', 'The request has not been applied because it lacks valid authentication credentials for the target resource.'],
    '403': ['Forbidden', 'The server understood the request but refuses to authorize it.'],
    '404': ['Not Found', 'The server cannot find the requested resource.'],
    '405': ['Method Not Allowed', 'The request method is not supported for the requested resource.'],
    '409': ['Conflict', 'The request could not be completed due to a conflict with the current state of the resource.'],
    '500': ['Internal Server Error', 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'],
    '502': ['Bad Gateway', 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'],
    '503': ['Service Unavailable', 'The server is currently unable to handle the request due to a temporary overload or maintenance of the server.']
  };

  const onClick = () => navigate('/feed');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {code} | {messages[code][0]}
      </h2>

      <h4 className={styles.description}>
        {messages[code][1]}
      </h4>

      <Button onClick={onClick} className={styles.button}>
        <IcArrowLeft size={21} />  Go back
      </Button>
    </div>
  );
}
