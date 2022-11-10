import * as S from "./rightStyle"

import news1 from "../../assets/imgs/asideRight/news1.png"
import news2 from "../../assets/imgs/asideRight/news2.png"
import news3 from "../../assets/imgs/asideRight/news3.png"
import News from "./news/news"

export default function Right() {
    return (
        <S.asideRight>
            <S.asideRight__input type="text" placeholder="Search Twitter"></S.asideRight__input>
            {document.location.pathname === "/home" && <S.Happening>
                <S.happening__title>What’s happening</S.happening__title>
                <S.happening__border></S.happening__border>
                <News alt="image of a white man" hashtag="#covid19" img={news1} theme="COVID19 · Last night" title="England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic" trending="Trending with" />
                <S.happening__border></S.happening__border>
                <News alt="image of a white man" hashtag="#trump" img={news2} theme="US news · 4h ago" title="Parler may go offline following suspensions by Amazon, Apple and Google" trending="Trending with" />
                <S.happening__border></S.happening__border>
                <News alt="image of a white man" hashtag="#sport" img={news3} theme="India · 1h ago" title="India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test" trending="Trending with" />
                <S.happening__showMore>
                    <S.showMore__link href="/error_404">
                        <S.showMore__name>Show more</S.showMore__name>
                    </S.showMore__link>
                </S.happening__showMore>
            </S.Happening>}
            <S.follow>
                <S.follow__title>Who to follow</S.follow__title>
                <S.follow__border></S.follow__border>
                <S.follow__content>
                    <S.content__figure>
                        <S.content__figure__img src="./src/assets/imgs/asideRight/bessieCooper.png" alt="Photo of a man with long hair and a green shirt" />
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
                        <S.content__figure__img src="./src/assets/imgs/asideRight/jenny.png" alt="Photo of a man with long hair and a green shirt" />
                    </S.content__figure>
                    <S.follow__content__div>
                        <S.follow__content__name >Jenny Wilson</S.follow__content__name>
                        <S.follow__content__nick >@gabrielcantarin</S.follow__content__nick>
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
            {document.location.pathname === "/profile" &&
                <S.Happening>
                    <S.happening__title>What’s happening</S.happening__title>
                    <S.happening__border></S.happening__border>
                    <News alt="image of a white man" hashtag="#covid19" img={news1} theme="COVID19 · Last night" title="England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic" trending="Trending with" />
                    <S.happening__border></S.happening__border>
                    <News alt="image of a white man" hashtag="#trump" img={news2} theme="US news · 4h ago" title="Parler may go offline following suspensions by Amazon, Apple and Google" trending="Trending with" />
                    <S.happening__border></S.happening__border>
                    <News alt="image of a white man" hashtag="#sport" img={news3} theme="India · 1h ago" title="India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test" trending="Trending with" />
                    <S.happening__showMore>
                        <S.showMore__link href="/error_404">
                            <S.showMore__name>Show more</S.showMore__name>
                        </S.showMore__link>
                    </S.happening__showMore>
                </S.Happening>}
            <S.follow__terms>Terms of Service Privacy Policy Cookie Policy
                Ads info More © 2021 Twitter, Inc.</S.follow__terms>
        </S.asideRight>
    )
}