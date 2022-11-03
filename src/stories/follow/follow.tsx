import './follow.css';

import img from "../assets/follow/followProfile.png"
import Jessie from "../assets/follow/jenny.png"

interface followProps {
  name?: string;
}



export const Follow = ({ name }: followProps) => (
<section className={`follow follow--${name}`}>
  <h3 className={`follow__title follow__title--${name}`}>Who to follow</h3>
  <div className={`follow__border follow__border--${name}`}></div>
  <div className={"follow__content"}>
    <figure className={"content__figure"}>
      <img className={`content__figure__img`} src={img} alt="Photo of a man with long hair and a green shirt"/>
    </figure>
    <div className={"follow__content__div"} >
      <h4 className={`follow__content__name follow__content__name--${name}`} >Bessie Cooper</h4>
      <p className={`follow__content__nick  follow__content__nick--${name}`}>@alessandroveronezi</p>
    </div>
    <div className={"div__button"}>
      <button type={"button"} className={"content__button"}>Follow</button>
    </div>
  </div>
  <div className={`follow__border follow__border--${name}`}></div>
  <div className={"follow__content"}>
    <figure className={"content__figure"}>
      <img className={"content__figure__img"} src={Jessie} alt="Photo of a man with long hair and a green shirt"/>
    </figure>
    <div className={"follow__content__div"}>
      <h4 className={`follow__content__name follow__content__name--${name}`}>Jenny Wilson</h4>
      <p className={`follow__content__nick follow__content__nick--${name}`}>@gabrielcantarin</p>
    </div>
    <div className={"div__button"}>
      <button type={"button"} className={"content__button"}>Follow</button>
    </div>
  </div>
  <div className={`follow__border follow__border--${name}`}></div>
  <a href={"error_404"} className={"follow__link"}>
    <h4 className={"follow__more"}>Show more</h4>
  </a>
</section>
)

//   div.style.display = "flex"
//   div.style.alignItems = "center"
//   div.style.justifyContent = "center"


//   div.innerHTML = `
//   <section className="follow follow--${name}">