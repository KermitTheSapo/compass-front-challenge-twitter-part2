import * as S from "./rightStyle"

import news1 from "../../assets/imgs/asideRight/news1.png"

export default function Right(){
    return(
       <S.asideRight>
            <S.asideRight__input type="text" placeholder="Search Twitter"></S.asideRight__input>
            <S.Happening>
                <S.happening__title>What’s happening</S.happening__title>
                <S.happening__border></S.happening__border>
                <S.happening__news>
                    <S.news__div>
                        <S.news__content>
                            <S.news__content__theme>COVID19 · Last night</S.news__content__theme>
                            <S.news__content__title>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</S.news__content__title>
                        </S.news__content>
                        <S.news__content__div>
                            <S.content__trending>Trending with</S.content__trending>
                            <S.content__hashtag>#covid19</S.content__hashtag>
                        </S.news__content__div>
                    </S.news__div>
                    <S.news__figure>
                        <S.figure__img src={news1} alt="image of a white man"/>
                    </S.news__figure>
                </S.happening__news>
                <S.happening__border></S.happening__border>
                <S.happening__news>
                    <S.news__div>
                        <S.news__content>
                            <S.news__content__theme>COVID19 · Last night</S.news__content__theme>
                            <S.news__content__title>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</S.news__content__title>
                        </S.news__content>
                        <S.news__content__div>
                            <S.content__trending>Trending with</S.content__trending>
                            <S.content__hashtag>#covid19</S.content__hashtag>
                        </S.news__content__div>
                    </S.news__div>
                    <S.news__figure>
                        <S.figure__img src={news1} alt="image of a white man"/>
                    </S.news__figure>
                </S.happening__news>
                <S.happening__border></S.happening__border>
                <S.happening__news>
                    <S.news__div>
                        <S.news__content>
                            <S.news__content__theme>COVID19 · Last night</S.news__content__theme>
                            <S.news__content__title>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</S.news__content__title>
                        </S.news__content>
                        <S.news__content__div>
                            <S.content__trending>Trending with</S.content__trending>
                            <S.content__hashtag>#covid19</S.content__hashtag>
                        </S.news__content__div>
                    </S.news__div>
                    <S.news__figure>
                        <S.figure__img src={news1} alt="image of a white man"/>
                    </S.news__figure>
                </S.happening__news>
                <S.happening__showMore>
                    <S.showMore__link href="/error_404">
                        <S.showMore__name>Show more</S.showMore__name>
                    </S.showMore__link>
                </S.happening__showMore>  
            </S.Happening>
            <S.follow>
                <S.follow__title>Who to follow</S.follow__title>
                <S.follow__border></S.follow__border>
                <S.follow__content>
                    <S.content__figure>
                        <S.content__figure__img src="./src/assets/imgs/asideRight/bessieCooper.png" alt="Photo of a man with long hair and a green shirt"/>
                    </S.content__figure>
                    <S.follow__content__div>
                        <S.follow__content__name >Bessie Cooper</S.follow__content__name>
                        <S.follow__content__nick >@alessandroveronezi</S.follow__content__nick>
                    </S.follow__content__div>
                    <S.div__button >
                        <S.follow__link href="error_404">
                            <S.content__button type="button">Follow</S.content__button>
                        </S.follow__link>
                    </S.div__button>
                </S.follow__content>
                <S.follow__border></S.follow__border>
                <S.follow__content>
                    <S.content__figure>
                        <S.content__figure__img src="./src/assets/imgs/asideRight/bessieCooper.png" alt="Photo of a man with long hair and a green shirt"/>
                    </S.content__figure>
                    <S.follow__content__div>
                        <S.follow__content__name >Bessie Cooper</S.follow__content__name>
                        <S.follow__content__nick >@alessandroveronezi</S.follow__content__nick>
                    </S.follow__content__div>
                    <S.div__button >
                        <S.follow__link href="error_404">
                            <S.content__button type="button">Follow</S.content__button>
                        </S.follow__link>
                    </S.div__button>
                </S.follow__content>
                <S.follow__border></S.follow__border>
                <S.follow__link href="error_404">
                    <S.follow__more>Show more</S.follow__more>
                </S.follow__link>
            </S.follow>
            <S.follow__terms>Terms of Service Privacy Policy Cookie Policy
        Ads info More © 2021 Twitter, Inc.</S.follow__terms>
       </S.asideRight>
    )
}