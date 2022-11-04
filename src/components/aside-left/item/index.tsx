import * as S from "./style";

type Props = {
  label: string;
  icon: string;
  alt: string;
  route: string;
};
export function Item({ label, icon, alt, route }: Props) {
  return (
    <S.asideLeft__link>
      <S.asideLeft__List>
          <S.List__figure>
              <S.List__img src={icon} alt={alt}/>
          </S.List__figure>
          <S.List__content><S.LinkStyle to={route}>{label}</S.LinkStyle></S.List__content>
      </S.asideLeft__List>
    </S.asideLeft__link>
  );
}
