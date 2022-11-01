import Left from "./components/aside-left/left";
import Right from "./components/aside-right/right";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import * as S from "./appStyle"


export default function App() {
  return (
    <S.Div>
      <Left/>
      <Right/>
      <Main/>
      <Footer/>
    </S.Div>
  )
}

