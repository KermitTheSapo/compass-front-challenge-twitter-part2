import './news.css';

interface newsProps {
  user?: string;
}
import news from "../assets/news/news.png"
import news2 from "../assets/news/news2.png"
import news3 from "../assets/news/news3.png"

export const News = ({user}:newsProps) => (
  <section className={`happening happening--${user}`}>
        <h2 className={`happening__title happening__title--${user}`}>What’s happening</h2>
        <div className={`happening__border happening__border--${user}`}></div>
        <div className={"happening__news"}>
          <div className={"news__div"}>
            <div className={"news__content"}>
              <p className={`news__content__theme news__content__theme--${user}`}>COVID19 · Last night</p>
              <h3 className={`news__content__title news__content__title--${user}`}>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</h3>
            </div>
            <div className={"news__content__div"}>
              <p className={`content__trending content__trending--${user}`}>Trending with</p>
              <p className={"content__hashtag"}>#covid19</p>
            </div>
          </div>         
          <figure className={"news__figure"}>
            <img className={"figure__img"} src={news} alt="image of a white man"/>
          </figure>
        </div>
        <div className={`happening__border happening__border--${user}`}></div>
        <div className={"happening__news"}>
          <div className={"news__div"}>
            <div className={"news__content"}>
              <p className={`news__content__theme news__content__theme--${user}`}>US news · 4h ago</p>
              <h3 className={`news__content__title news__content__title--${user}`}>Parler may go offline following suspensions by Amazon, Apple and Google</h3>
            </div>
            <div className={"news__content__div"}>
              <p className={`content__trending content__trending--${user}`}>Trending with</p>
              <p className={"content__hashtag"}>#trump</p>
            </div>
          </div>         
          <figure className={"news__figure"}>
            <img className={"figure__img"} src={news2} alt="image of a white man"/>
          </figure>
        </div>
        <div className={`happening__border happening__border--${user}`}></div>
        <div className={"happening__news"}>
          <div className={"news__div"}>
            <div className={"news__content"}>
              <p className={`news__content__theme news__content__theme--${user}`}>India · 1h ago</p>
              <h3 className={`news__content__title news__content__title--${user}`}>India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</h3>
            </div>
            <div className={"news__content__div"}>
              <p className={`content__trending content__trending--${user}`}>Trending with</p>
              <p className={"content__hashtag"}>#sport</p>
            </div>
          </div>         
          <figure className={"news__figure"}>
            <img className={"figure__img"} src={news3} alt="image of a white man"/>
          </figure>
        </div>
        <div className={`happening__border happening__border--${user}`}></div>
        <div className={"aside-right__border"}></div>
        <div className={"happening__showMore"}>
          <a href="error_404" className={"showMore__link"}>
            <h4 className={"showMore__name"}>Show more</h4>
          </a>
        </div>        
      </section>
)
