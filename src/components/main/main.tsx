import * as S from "./mainStyle"
import darkLightMode from "../../assets/imgs/main/darkLightMode.svg"
import profile from "../../assets/imgs/main/profile.png"
import imgIcon from "../../assets/imgs/main/imgIcon.svg"
import gifIcon from "../../assets/imgs/main/gifIcon.svg"
import graphIcon from "../../assets/imgs/main/graphIcon.svg"
import emojiIcon from "../../assets/imgs/main/emojiIcon.svg"
import CalendarIcon from "../../assets/imgs/main/CalendarIcon.svg"
import { useEffect, useRef, useState } from "react"
import Post, { PostInterface} from "../post/post"
import { useNavigate } from "react-router-dom"

interface Props {
  toggleTheme(): void;
}

export default function Main({ toggleTheme }: Props){
  let loginData = localStorage.getItem("name") as string
  let passwordData = localStorage.getItem("password") as string
  var loginObj = JSON.parse(loginData)
  var passwordObj = JSON.parse(passwordData)  
  const navigate = useNavigate()
  const [isGuess, setIsGuess] = useState(false)
  useEffect(() => {
    if(loginObj === "admin" && passwordObj === "admin") {
    } else{
      let userAnswer = confirm("The user is not connected to an account, please go back to the login page to login or enjoy the guest version")
      if (userAnswer === true){
        navigate("/")
      }
      else{
        setIsGuess(true)
      }
    }
  }, [navigate])


  const tweetBtn = document.querySelector("#tweet")
  let now = new Date();

  const [dataTweet, setDataTweet] = useState<PostInterface[]>([
    {
      name: "Jerome Bell",
      userName: "@afonsoinocente",
      time: `${now.getHours()}h${now.getMinutes()}m`,
      content: "Where's the compass?",
      imgs: "https://miro.medium.com/max/356/1*EnF9uIN_u2_X7ey24lB7Tg.png",
      commentValue: 0,
      retweetValue: 0,
      likeValue: 0,
      shareValue: 0,
    }
  ]);
  const [inputValue, setInputValue] = useState("")
  const [imgValue, setImgValue] = useState("")  
  const inputElement = useRef();

  const createPost = () =>{    
    const post: PostInterface = {
      time: `${now.getHours()}h${now.getMinutes()}m`,
      commentValue: 0,
      content: inputValue,
      likeValue: 0,
      retweetValue: 0,
      name: "Jerome Bell",
      shareValue: 0,
      userName: "@afonsoinocente",
      imgs: imgValue
    }
    setDataTweet([...dataTweet, post])
    localStorage.setItem("post", JSON.stringify([...dataTweet, post]))
    setInputValue("")
    setImgValue("")
  }

  return (
    <S.Main>
      <S.main__header>
        <S.main__header__title>Home</S.main__header__title>
        <S.main__header__img src={darkLightMode} alt="Three blue stars" onClick={() => toggleTheme()}/>
      </S.main__header>
      <S.main__borderHeader></S.main__borderHeader>
      <S.Post>
        <S.post__form
          onSubmit={(e) => {e.preventDefault()
            if (isGuess === true){
              alert("You are in guest mode, you can't post")
              return;
            } else{
              if (inputValue.length > 0 || imgValue.length > 0){
                createPost()
                return;
              } else{
                alert("You need to write something or add an image")
              }
            }
        }}
          method="post"
        >
          <S.post__input>
            <S.input__img
              src={profile}
              alt="A profile picture of a person with a black shirt and hair on their face"
            />
            <S.input__text
              id="input"
              ref={inputElement}
              type="text"
              placeholder="What's happening?"
              minLength={2}
              maxLength={380}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value)
                if (event.target.value.length > 0){
                  tweetBtn?.setAttribute("style", "opacity: 1")
                } else {
                  tweetBtn?.setAttribute("style", "opacity: 0.5")
                }
              }}
            />
          </S.post__input>
          <S.post__emoji>
            <S.emoji__div>
              <S.label htmlFor="upload">
                <S.LabelImg
                  src={imgIcon}
                  alt="Blue icon of a landscape and sun related to image upload"
                />
              </S.label>
              <S.upload__img
                id="upload"
                type="file"
                name="file"
                accept="image/png, image/jpeg"
                multiple
                onChange={(event) => {
                  const files = event.target.files[0]
                  console.log(files)
                  const reader = new FileReader()
                  reader.onload = (eventReader) => {
                    setImgValue(eventReader.target?.result)
                  }
                  reader.readAsDataURL(files)
                  setTimeout(() => {
                    event.target.value = ""
                  }, 500)
                }}
              />
              <S.icons src={gifIcon} alt="A square with 'GIF' inside" />
              <S.icons src={graphIcon} alt="A chart icon" />
              <S.icons src={emojiIcon} alt="Happy face icon" />
              <S.icons src={CalendarIcon} alt="Calendar icon" />
            </S.emoji__div>
            <S.post__submit id="tweet" >Tweet</S.post__submit>
          </S.post__emoji>
        </S.post__form>
        <S.main__borderScroll></S.main__borderScroll>

        <S.main__margin>
          {dataTweet.map((data) => <Post data={data}/>)}        
          <S.main__borderScrolll></S.main__borderScrolll>
        </S.main__margin>
        <S.Margin></S.Margin>
      </S.Post>
    </S.Main>
  );
}