import { Outlet } from 'react-router-dom';
import * as Styled from './styles';

export function BaseLayout() {
  return (
    <Styled.Conteiner>
      <Styled.CardAlign>
        <Styled.Card>
          <Outlet />
        </Styled.Card>
      </Styled.CardAlign>
    </Styled.Conteiner>
  );
}
