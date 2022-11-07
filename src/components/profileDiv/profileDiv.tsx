import { Helmet } from "react-helmet";
import Left from "../aside-left/left";
import Right from "../aside-right/right";
import Profile from "../profile/profile";
import * as S from "./profileDivStyle"
export default function ProfileDiv(){
    return(
        <S.Div>
            <Helmet>
                <title>Profile / Twitter</title>
            </Helmet>
            <Left/>
            <Profile/>
            <Right/>
        </S.Div>
    )
}