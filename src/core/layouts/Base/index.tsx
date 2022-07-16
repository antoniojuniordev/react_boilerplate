import { Outlet } from 'react-router-dom';
import * as S from './styles';

export function BaseLayout() {
  return (
    <S.Main>
      <S.Container>
        <S.Card>
          <Outlet />
        </S.Card>
      </S.Container>
    </S.Main>
  );
}
