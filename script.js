let mainBlock = document.createElement("div");
mainBlock.className = "container";
mainBlock.innerHTML =
  "Раскладка по складам<br><strong>Алексин: 33 час. ✩</strong><div class='hr'></div></div><br><div class='grid'><span>Шушары:</span><span class='watch'>56 ч.</span><span>1111 шт.</span><span>Алексин:</span><span class='watch'>33 ч.</span><span>67 шт.</span></div>";

setTimeout(() => {
  const upperBlock = document.querySelector(".product-page__aside-sticky");
  upperBlock.appendChild(mainBlock);
}, "1000");

let mainBlockTwo = document.createElement("div");
mainBlockTwo.className = "containerTwo";
mainBlockTwo.innerHTML =
  "🌠 СПП: <strong class='percent'>23%</strong> <i>До СПП</i>: <span class='price'>2 099Р</span>";

setTimeout(() => {
  const bottomBlock = document.querySelector(
    ".product-page__aside-container.j-price-block"
  );
  bottomBlock.appendChild(mainBlockTwo);
}, "2000");
