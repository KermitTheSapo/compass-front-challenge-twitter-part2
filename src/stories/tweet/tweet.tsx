import './tweetStyle.css';

interface tweetProps {
  name?: string;
}

import profile from "../assets/tweet/avatar-small.png"
import post from "../assets/tweet/post.png"
import retweet from "../assets/tweet/retweet.svg"
import heart from "../assets/tweet/heart.svg"
import share from "../assets/tweet/share.svg"
import comment from "../assets/tweet/comment.svg"

export const Tweet = ({name}:tweetProps) => (
  <div className="post__tweet">
    <figure className="tweet__figure">
      <img className="tweet__figure__img" src={profile} alt="Image of a woman with blonde hair, brown coat and white blouse"/>
    </figure>
    <div className="tweet__main">
      <div className="tweet__main__user">
        <h3 className={`name__text name__text-${name}`}>Devon Lane</h3>
        <h4 className={`name__nick name__nick-${name}`}>@devonlane</h4>
        <h5 className={`name__dot name__dot-${name}`}>·</h5>
        <h5 className={`name__time name__time-${name}`}>23s</h5>
      </div>
      <p className={`tweet__main__content tweet__main__content-${name}`}>Tom is in a big hurry.</p>
      <div className="tweet__main__media">
        <img className="main__media__img" src={post} alt="Image of an astronaut in a blue suit in a purple space"/>
      </div>
      <div className="tweet__main__actions">
        <div className="actions__div">
          <img src={comment} alt="Bubble chat icon"/>
          <span>61</span>
        </div>
        <div className="actions__div">
          <img src={retweet} alt="Retweet related two arrow symbol"/>
          <span>12</span>
        </div>
        <div className="actions__div">
          <img src={heart} alt="Red heart symbol"/>
          <span>6.2k</span>
        </div>
        <div className="actions__div">
          <img src={share} alt="An arrow symbol with a dash below, related to sharing the post"/>
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
)