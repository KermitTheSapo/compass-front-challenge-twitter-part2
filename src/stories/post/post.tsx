import './post.css';
interface postProps {
    name?: string;
}

// img.setAttribute("src", "/assets/imgs/post/img.svg")
// gif.setAttribute("src", "/assets/imgs/post/gif.svg")
// graph.setAttribute("src", "/assets/imgs/post/graph.svg")
// emoji.setAttribute("src", "/assets/imgs/post/emoji.svg")
// calendar.setAttribute("src", "/assets/imgs/post/calendar.svg")


export const Post = ({name}:postProps) => (
    <main className="main">
      <header className="main__header">
        <h2 className="main__header__title">Home</h2>
        <img className="main__header__img" src="./src/assets/imgs/main/darkLightMode.svg" alt="Three blue stars"/>
      </header>
      <div className="main__borderHeader"></div>
      <section className="post">
        <form className="post__form" action="" method="post">
            <div className="post__input">
                <img className="input__img" src="./src/assets/imgs/main/profile.png" alt="A profile picture of a person with a black shirt and hair on their face"/>
                <input className="input__text" type="text" placeholder="What's happening?" />
            </div>
            <div className="post__emoji">
                <div className="emoji__div">
                    <label className="label" htmlFor="upload">
                        <img src="./src/assets/imgs/main/imgIcon.svg" alt="Blue icon of a landscape and sun related to image upload"/>
                    </label>
                    <input id="upload" type="file" name="file" className="upload__img" accept="image/png, image/jpeg" multiple />
                    <img src="./src/assets/imgs/main/gifIcon.svg" alt="A square with 'GIF' inside"/>
                    <img src="./src/assets/imgs/main/graphIcon.svg" alt="A chart icon"/>
                    <img src="./src/assets/imgs/main/emojiIcon.svg" alt="Happy face icon"/>
                    <img src="./src/assets/imgs/main/CalendarIcon.svg" alt="Calendar icon"/>
                </div>
                <button className="post__submit">Tweet</button>
            </div>
        </form>
        <div className="main__border scroll"></div>
        <div className="main__margin">
          <div className="post__tweet">
            <figure className="tweet__figure">
              <img className="tweet__figure__img" src="./src/assets/imgs/main/profileDevon.svg" alt="Image of a woman with blonde hair, brown coat and white blouse"/>
            </figure>
            <div className="tweet__main">
              <div className="tweet__main__user">
                <h3 className="name__text">Devon Lane</h3>
                <h4 className="name__nick">@johndue</h4>
                <h5 className="name__dot">·</h5>
                <h5 className="name__time">23s</h5>
              </div>
              <p className="tweet__main__content">Tom is in a big hurry.</p>
              <div className="tweet__main__media">
                <img className="main__media__img" src="./src/assets/imgs/main/astronaut.png" alt="Image of an astronaut in a blue suit in a purple space"/>
              </div>
              <div className="tweet__main__actions">
                <div className="actions__div">
                  <img src="./src/assets/imgs/main/comment.svg" alt="Bubble chat icon"/>
                  <span>61</span>
                </div>
                <div className="actions__div">
                  <img src="./src/assets/imgs/main/retweet.svg" alt="Retweet related two arrow symbol"/>
                  <span>12</span>
                </div>
                <div className="actions__div actions__div--heart">
                  <img className="heart--status" src="./src/assets/imgs/main/like-disabled.svg" alt="Red heart symbol"/>
                  <span className="heart--counter">0</span>
                </div>
                <div className="actions__div">
                  <img src="./src/assets/imgs/main/share.svg" alt="An arrow symbol with a dash below, related to sharing the post"/>
                  <span>61</span>
                </div>
              </div>
              <div className="tweet__main__show">
                <a href="" className="show__link">
                  <p className="show__paragraph">Show this thread</p>
                </a>
              </div>
            </div>
          </div>
          <div className="main__borderScroll"></div>
        </div>
      </section>
    </main>
)