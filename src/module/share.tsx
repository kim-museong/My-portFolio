import { scroller } from "react-scroll";

/** 원하는 Element위치로 이동하는 함수 */
export const onClickButton = (name: string) => {
  scroller.scrollTo(name, {
    duration: 800,
    smooth: "easeInOutQuint",
  });
};
