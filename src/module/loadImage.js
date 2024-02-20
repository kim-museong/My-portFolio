const loadimage = require.context("../images/", false, /\.(png|jpe?g|svg)$/);

/** 이미지불러오기 함수(이미지이름, 이미지개수 = 1 )
 *  개수값이 1 보다 크면 배열로 반환
 */
export const loadImagesHandler = (name, countNumber = 1) => {
  if (countNumber <= 1) {
    const singleImage = loadimage(`./${name}.png`);
    return singleImage;
  } else {
    if (name !== undefined) {
      const images = Array.from({ length: countNumber }, (_, index) =>
        loadimage(`./${name}${index + 1}.png`)
      );

      return images;
    } else {
      return [];
    }
  }
};
