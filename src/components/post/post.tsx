import * as S from "./postStyle";
//@ts-nocheck 

export interface PostInterface {
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
  data: PostInterface
}

import comment from "../../assets/imgs/main/comment.svg"
import retweet from "../../assets/imgs/main/retweet.svg"
import likeDisabled from "../../assets/imgs/main/like-disabled.svg"
import likeActive from "../../assets/imgs/main/like-active.svg"
import share from "../../assets/imgs/main/share.svg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Post(props: PostProps) {
  let loginData = localStorage.getItem("name") as string
  let passwordData = localStorage.getItem("password") as string
  var loginObj = JSON.parse(loginData)
  var passwordObj = JSON.parse(passwordData)
  const [showThisThread, setShowThisThread] = useState(true)

  const navigate = useNavigate()
  let now = new Date();
  const [countLike, setCountLike] = useState(0)
  const [commentDiv, setCommentDiv] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [commentValue, setCommentValue] = useState([{
    name: ""
  }])

  const createComment = () => {
    if (loginObj === "admin" && passwordObj === "admin") {
      if (inputValue.length > 0) {
        inputValue.length > 1 ? setCommentValue([...commentValue, { name: inputValue }]) : null;
        setInputValue("")
        return;
      } else {
        alert("You need to write something!")
      }
    } else {
      alert("You are in guest mode, you can't post")
    }
  }
  const canReplay = () => {
    if (loginObj === "admin" && passwordObj === "admin") {
      commentDiv ? setCommentDiv(false) : setCommentDiv(true); 
    } else {
      alert("You are in guest mode, you can't post")
    }
  }

  const changeBtnOpacity = (e) => {
    const btnReplyOpacity = document.querySelector("#btnReplyOpacity") as HTMLElement
    setInputValue(e.target.value);
    e.target.value.length > 0 ? btnReplyOpacity.style.opacity = "1.0" : btnReplyOpacity.style.opacity = "0.5"
  }

  const makeLikeCount = () => {
    if (loginObj === "admin" && passwordObj === "admin") {
      countLike === 0 ? setCountLike(1) : setCountLike(0)
    } else {
      alert("You are in guest mode, you can't post")
    }
  }

  return (
    <S.post__tweet>
      <S.tweet__figure>
        <S.tweet__figure__img src="./src/assets/imgs/main/profile.png" alt="Image of a woman with blonde hair, brown coat and white blouse" />
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
          <S.actions__div onClick={() => { canReplay() }}>
            <S.actionsImg src={comment} alt="Bubble chat icon" />
            <S.SpanNumber>{commentValue.length > 1 ? props.data.commentValue + commentValue.length - 1 : props.data.commentValue}</S.SpanNumber>
          </S.actions__div>
          <S.actions__div>
            <S.actionsImg src={retweet} alt="Retweet related two arrow symbol" />
            <S.SpanNumber>{props.data.retweetValue}</S.SpanNumber>
          </S.actions__div>
          <S.actions__div onClick={() => { makeLikeCount() }}>
            <S.actionsImg src={countLike === 0 ? likeDisabled : likeActive} alt="Red heart symbol" />
            <S.SpanNumber>{props.data.likeValue + countLike}</S.SpanNumber>
          </S.actions__div>
          <S.actions__div>
            <S.actionsImg src={share} alt="An arrow symbol with a dash below, related to sharing the post" />
            <S.SpanNumber>{props.data.shareValue}</S.SpanNumber>
          </S.actions__div>
        </S.tweet__main__actions>
        {commentDiv &&
          <S.CommentBlock onSubmit={(e) => { e.preventDefault() }}>
            <S.InputComment placeholder="Tweet your reply" value={inputValue} onChange={(e) => { changeBtnOpacity(e) }} type="text" />
            <S.ButtonReply id="btnReplyOpacity" onClick={() => { createComment() }}>Reply</S.ButtonReply>
          </S.CommentBlock>}
        {showThisThread && commentValue.length > 1 && commentValue.map((item) => (
          item.name.length < 1 ? null :
            <S.CommentPost>
              <S.tweet__figure__img src="./src/assets/imgs/main/profileDevon.svg" alt="Image of a woman with blonde hair, brown coat and white blouse" />
              <S.ContentDiv>
                <S.tweet__main__user>
                  <S.name__text>Devon Lane</S.name__text>
                  <S.name__nick>@marcelosalomao</S.name__nick>
                  <S.name__dot>·</S.name__dot>
                  <S.name__time>{now.getHours()}h{now.getMinutes()}</S.name__time>
                </S.tweet__main__user>
                <S.ParagraphComment>{item.name}</S.ParagraphComment>
              </S.ContentDiv>
            </S.CommentPost>
        ))}
        <S.tweet__main__show>
          <S.show__link onClick={() => showThisThread === true ? setShowThisThread(false) : setShowThisThread(true)}>
            {showThisThread === true ? <S.show__paragraph>Hide this thread</S.show__paragraph> : <S.show__paragraph>Show this thread</S.show__paragraph>}
          </S.show__link>
        </S.tweet__main__show>
      </S.tweet__main>
    </S.post__tweet>
  );
}
