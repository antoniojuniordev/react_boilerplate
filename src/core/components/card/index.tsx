import { Card as CardAnt } from 'antd';
import { useTranslation } from 'react-i18next';
import { usePromiseTracker } from 'react-promise-tracker';

interface Props {
  id: string;
  title: string;
  children: JSX.Element;
  extra?: JSX.Element;
}

function Card(props: Props) {
  const { t } = useTranslation();
  const { promiseInProgress } = usePromiseTracker({ area: props.id });
  const generalProgress = usePromiseTracker();

  return (
    <CardAnt
      title={t(props.title)}
      loading={
        promiseInProgress || (generalProgress.promiseInProgress && !props.id)
      }
      extra={props.extra}
    >
      {props.children}
    </CardAnt>
  );
}

export default Card;
