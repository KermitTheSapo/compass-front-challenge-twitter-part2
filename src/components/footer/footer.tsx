import * as S from "./footerStyle"

export default function Footer() {
    return (
        <S.footer>
            <S.footer__content>
                <S.footer__title >Don't miss what's happening</S.footer__title>
                <S.footer__paragraph>People on Twitter are the first to know.</S.footer__paragraph>
            </S.footer__content>
            <S.footer__btn>
                <S.footer__link href="/" >
                    <S.btn__login type="button" >Log in</S.btn__login>
                </S.footer__link>
                <S.footer__link href="/">
                    <S.btn__sign type="button" >Sign up</S.btn__sign>
                </S.footer__link>
            </S.footer__btn>
        </S.footer>
    )
}