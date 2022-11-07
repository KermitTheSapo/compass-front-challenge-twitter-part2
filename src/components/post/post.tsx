import * as S from "./postStyle";
//@ts-nocheck 

export interface PostInterface{
    name: string;
    userName: string;
    time: string;
    content: string;
    imgs?: string;
    commentValue: number;
    retweetValue: number;
    likeValue: number;
    shareValue: number;
}

export type PostProps = {
    data:PostInterface
}

import comment from "../../assets/imgs/main/comment.svg"
import retweet from "../../assets/imgs/main/retweet.svg"
import likeDisabled from "../../assets/imgs/main/like-disabled.svg"
import share from "../../assets/imgs/main/share.svg"

export default function Post(props: PostProps) {
  return (
    <S.post__tweet>
      <S.tweet__figure>
        <S.tweet__figure__img
          src="./src/assets/imgs/main/profileDevon.svg"
          alt="Image of a woman with blonde hair, brown coat and white blouse"
        />
      </S.tweet__figure>
      <S.tweet__main>
        <S.tweet__main__user>
          <S.name__text>{props.data.name}</S.name__text>
          <S.name__nick>{props.data.userName}</S.name__nick>
          <S.name__dot>·</S.name__dot>
          <S.name__time>{props.data.time}</S.name__time>
        </S.tweet__main__user>
        <S.tweet__main__content>{props.data.content}</S.tweet__main__content>
        <S.tweet__main__media>
          {props.data.imgs ? <S.main__media__img
            src={props.data.imgs}
            alt="Image of an astronaut in a blue suit in a purple space"
            id="divImg"
          /> : ""}
        </S.tweet__main__media>
        <S.tweet__main__actions>
          <S.actions__div>
            <S.actionsImg src={comment} alt="Bubble chat icon" />
            <span>{props.data.commentValue}</span>
          </S.actions__div>
          <S.actions__div>
            <S.actionsImg
              src={retweet}
              alt="Retweet related two arrow symbol"
            />
            <span>{props.data.retweetValue}</span>
          </S.actions__div>
          <S.actions__div>
            <S.actionsImg src={likeDisabled} alt="Red heart symbol" />
            <span>{props.data.likeValue}</span>
          </S.actions__div>
          <S.actions__div>
            <S.actionsImg
              src={share}
              alt="An arrow symbol with a dash below, related to sharing the post"
            />
            <span>{props.data.shareValue}</span>
          </S.actions__div>
        </S.tweet__main__actions>
        <S.tweet__main__show>
          <S.show__link href="">
            <S.show__paragraph>Show this thread</S.show__paragraph>
          </S.show__link>
        </S.tweet__main__show>
      </S.tweet__main>
    </S.post__tweet>
  );
}