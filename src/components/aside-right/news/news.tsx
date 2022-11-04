import * as S from "./newsStyle"
type Props = {
    theme: string,
    title: string,
    trending: string,
    hashtag: string,
    img: string,
    alt: string,
}

export default function News({alt, hashtag, img, theme, title, trending}:Props) {
  return (
    <S.happening__news>
      <S.news__div>
        <S.news__content>
          <S.news__content__theme>{theme}</S.news__content__theme>
          <S.news__content__title>
            {title}
          </S.news__content__title>
        </S.news__content>
        <S.news__content__div>
          <S.content__trending>{trending}</S.content__trending>
          <S.content__hashtag>{hashtag}</S.content__hashtag>
        </S.news__content__div>
      </S.news__div>
      <S.news__figure>
        <S.figure__img src={img} alt={alt} />
      </S.news__figure>
    </S.happening__news>
  );
}
