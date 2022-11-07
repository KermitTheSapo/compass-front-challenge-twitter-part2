import Left from "./components/aside-left/left";
import * as S from "./appStyle"
import { ThemeProvider } from "styled-components";
import light from "./assets/styles/themes/light";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <S.Div>
        <Left/>
        {/*  */}
        {/* <Footer/> */}
        {/* <Login/> */}
      </S.Div>
    </ThemeProvider>
  )
}

