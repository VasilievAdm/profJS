<template>
  <body>
    <header class="header">
      <div class="container header__flex">
        <section class="header__left">
          <a class="header__logo" href="index.html"
            ><img src="img/main.svg" alt="Главная"
          /></a>
          <a href="#"><img src="img/Search.svg" alt="Поиск" /></a>
        </section>
        <nav class="header__right">
          <input type="checkbox" id="burger" />
          <label class="header__item header__menu" for="burger"
            ><img src="img/Menu.svg" alt="Меню"
          /></label>
          <nav class="header__nav nav">
            <div class="nav__wrap">
              <label class="nav__close" for="burger"
                ><img src="img/x.svg" alt=""
              /></label>
              <h2 class="nav__title">MENU</h2>
              <h3 class="nav__heading">MAN</h3>
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#" class="nav__link">Accesories</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Bags</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Denim</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">T-shirts</a>
                </li>
              </ul>

              <h3 class="nav__heading">WOMAN</h3>
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#" class="nav__link">Accesories</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Jackets & Coats</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Polos</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">T-shirts</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Shirts</a>
                </li>
              </ul>

              <h3 class="nav__heading">KIDS</h3>
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="#" class="nav__link">Accesories</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Jackets & Coats</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Polos</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">T-shirts</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Shirts</a>
                </li>
                <li class="nav__item">
                  <a href="#" class="nav__link">Bags</a>
                </li>
              </ul>
            </div>
          </nav>
          <a class="header__item header__last" href="registration.html"
            ><img src="img/Contacts.svg" alt="Контакты"
          /></a>
          <a class="header__item header__last" href="cart.html"
            ><img src="img/Cart.svg" alt="Корзина"
          /></a>
        </nav>
      </div>
    </header>

    <main>
      <section class="promo">
        <div class="container promo__flex">
          <div class="promo__title">
            <h1>
              <span class="letter__heavy"> THE BRAND </span> <br />
              OF LUXERIOUS <span class="promo__decor">FASHION</span>
            </h1>
          </div>
        </div>
      </section>
      <section class="category">
        <div class="container category__flex">
          <div class="category__item category__women">
            <h2>
              <span>30% OFF <br /></span> FOR WOMEN
            </h2>
          </div>
          <div class="category__item category__men">
            <h2>
              <span>HOT DEAL <br /></span> FOR MEN
            </h2>
          </div>
          <div class="category__item category__kids">
            <h2>
              <span>NEW ARRIVALS <br /></span> FOR KIDS
            </h2>
          </div>
          <div class="category__item category__accesories">
            <h2>
              <span>LUXIROUS & TRENDY<br /></span> ACCESORIES
            </h2>
          </div>
        </div>
      </section>
      <section class="catalog">
        <div class="container">
          <header class="catalog__header">
            <h2>Fetured Items</h2>
            <p>Shop for items based on what we featured in this week</p>
          </header>
          <section>
            <article class="catalog__cards catalog__cards__flex">
              <div class="card card1">
                <img src="img/card1.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>

                <article class="card__text">
                  <a href="product.html">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
              <div class="card card2">
                <img src="img/card2.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>
                <article class="card__text">
                  <a href="#">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
              <div class="card card3">
                <img src="img/card3.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>
                <article class="card__text">
                  <a href="#">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
              <div class="card card4">
                <img src="img/card4.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>
                <article class="card__text">
                  <a href="#">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
              <div class="card card5">
                <img src="img/card5.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>
                <article class="card__text">
                  <a href="#">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
              <div class="card card6">
                <img src="img/card6.png" alt="" />
                <div class="card__background">
                  <button class="card__add">
                    <img
                      class="card__add__cart"
                      src="img/Cart.svg"
                      alt="addtocart"
                    />
                    Add to Cart
                  </button>
                </div>
                <article class="card__text">
                  <a href="#">
                    <h2>ELLERY X M'O CAPSULE</h2>
                    <p class="card__text__content">
                      Known for her sculptural takes on traditional tailoring,
                      Australian arbiter of cool Kym Ellery teams up with Moda
                      Operandi.
                    </p>
                    <p class="catalog__cards__price">$52.00</p>
                  </a>
                </article>
              </div>
            </article>
            <article
              class="
                container
                catalog__button__block catalog__button__block__flex
              "
            >
              <a class="catalog__button" href="catalog.html"
                >Browse All Product</a
              >
              <!-- <form action="#">
                            <button class="catalog__button">Browse All Product</button>
                        </form> -->
            </article>
          </section>
        </div>
      </section>
      <section class="special">
        <div class="container special__flex">
          <div class="special__offer">
            <img class="special__image" src="img/delivery.svg" alt="delivery" />
            <h2>Free Delivery</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div class="special__offer">
            <img src="img/discount.svg" alt="discount" />
            <h2>Free Delivery</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
          <div class="special__offer">
            <img src="img/accesories.svg" alt="accesories" />
            <h2>Free Delivery</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <section class="footer__top">
        <div class="container footer__top__flex">
          <article class="appeal">
            <img src="img/appeal.png" alt="appeal" />
            <p class="appeal__text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,<span
                class="appeal__text__special"
              >
                a pulvinar purus condimentum</span
              >“
            </p>
          </article>
          <article class="subscribe">
            <h2>SUBSCRIBE</h2>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <div class="form">
              <form class="subscribe__btn" action="#">
                <div>
                  <input
                    class="subscribe__print"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div>
                  <button class="subscribe__button" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
      <section class="footer__bottom">
        <div class="container footer__bottom__flex">
          <div class="footer__bottom__left">
            <p class="rights">© 2021 Brand All Rights Reserved.</p>
          </div>
          <div class="footer__bottom__right">
            <a class="footer__bottom__item" href="#"
              ><img src="img/facebook.svg" alt="facebook"
            /></a>
            <a class="footer__bottom__item" href="#"
              ><img src="img/instagram.svg" alt="instagram"
            /></a>
            <a class="footer__bottom__item" href="#"
              ><img src="img/p.svg" alt="p"
            /></a>
            <a class="footer__bottom__item" href="#"
              ><img src="img/twitter.svg" alt="twitter"
            /></a>
          </div>
        </div>
      </section>
    </footer>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
}

body {
  font-family: Lato;
}

.header {
  background-color: #222222;
  color: rgb(236, 223, 223);
  padding: 19px 0;
  position: relative;
  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    margin-right: 41px;
  }
  &__item {
    cursor: pointer;
    transition: 1s;
    &:not(:last-child) {
      margin-right: 33px;
    }
  }
  &__item:hover img {
    transform: scale(1.2);
  }
  &__nav {
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 10;
  }
}

.nav {
  width: 232px;
  background-color: #fff;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  &__wrap {
    position: relative;
    padding-left: 34px;
    & h2 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      margin-top: 37px;
      margin-bottom: 4px;
    }
    & h3 {
      margin-top: 20px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #f16d7f;
    }
  }

  &__link {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6f6e6e;
    text-decoration: none;
  }

  &__item {
    list-style-type: none;
    margin-top: 11px;
    margin-left: 21px;
  }

  &__close {
    position: absolute;
    right: 15px;
    top: -23px;
    cursor: pointer;
  }
}

#burger {
  display: none;
}

#burger:checked ~ .header__nav {
  display: block;
}

#burger:not(checked) ~ .header__nav {
  display: none;
}

.container {
  max-width: 1160px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
}

main {
  min-height: 100vh;
  display: grid;
}

.promo {
  height: calc(100vh - 80px);
  background: #f1e4e6;
  margin-bottom: 65px;
  &__flex {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 105px;
    height: 100%;
    background: url(img/promo.png) no-repeat;
    background-size: contain;
    background-position: left bottom;
  }
  &__title {
    max-width: 405px;
    padding-left: 16px;
    border-left: 12px solid #f16d7f;
    & h1 {
      font-family: Lato;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: #222222;
    }
  }
  &__decor {
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #f16d7f;
  }
}

.letter {
  &__heavy {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
  }
  &__red {
    color: #ef5b70;
  }
}

.category {
  margin-bottom: 96px;
  &__flex {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 30px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &:not(:last-child) {
      width: 360px;
      height: 260px;
      /* margin-bottom: 30px; */
    }
    &:last-child {
      width: 100%;
      height: 180px;
    }
    & h2 {
      color: #f16d7f;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
      & span {
        color: white;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
  &__women {
    background: url(img/women.jpg);
  }
  &__men {
    background: url(img/men.jpg);
  }
  &__kids {
    background: url(img/kids.jpg);
  }
  &__accesories {
    background: url(img/accesories.jpg);
  }
}

.catalog {
  margin-bottom: 95px;
  &__header {
    text-align: center;
    margin-bottom: 48px;
    & h2 {
      margin-bottom: 6px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 36px;
      color: #222222;
    }
    & p {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #9f9f9f;
    }
  }
  &__cards {
    &__flex {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
    &__price {
      margin-top: 18px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #f16d7f;
    }
  }
  &__button {
    padding: 15px 39px;
    background: white;
    border: 1px solid #f26376;
    color: #f26376;
    text-decoration: none;
    &__block {
      margin-top: 48px;
      &__flex {
        display: flex;
        justify-content: center;
      }
    }
  }

  &__button:hover {
    background: #f26376;
    color: #ffffff;
  }

  &__items {
    margin-bottom: 96px;
    &__header {
      display: flex;
      margin-bottom: 64px;
    }
  }
  &__list {
    padding: 15px 13px;
    background: white;
    border: 1px solid #ebebeb;
    &__block {
      margin-top: 48px;
      &__flex {
        display: flex;
        justify-content: center;
      }
    }
  }
}

.card {
  width: 360px;
  min-height: 582px;
  background: #f8f8f8;
  position: relative;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 420px;
    background-color: rgba(58, 56, 56, 0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }
  &__add {
    background-color: rgba(58, 56, 56, 0.01);
    cursor: pointer;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    border: 1px solid #ffffff;
    color: #ffffff;
    width: 139px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__cart {
      height: 26px;
      width: 23px;
      margin: 0 11px 0 0;
    }
  }

  &__add:hover {
    border: 1px solid #f26376;
    color: #f26376;
  }

  &__text {
    margin: 25px 28px 20px 16px;
    & a {
      text-decoration: none;
    }
    & h2 {
      margin-top: 25px;
      margin-bottom: 12px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: #000000;
    }
    &__content {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #5d5d5d;
    }
  }
}

.card:hover .card__background {
  opacity: 1;
}

.special {
  background: #222224;
  height: 100%;
  &__flex {
    display: flex;
    justify-content: space-between;
  }
  &__offer {
    width: 360px;
    padding: 0 25px;
    min-height: 134px;
    margin: 93px 0 103px;
    text-align: center;
    color: #fbfbfb;
    & h2 {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      margin: 28px 0 16px 0;
    }
    & p {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
    }
  }
  &__image {
    margin: 0 auto;
    height: 40px;
  }
}

.footer {
  &__top {
    background: url(img/footer.jpg) no-repeat center;
    background-size: cover;
    height: 448px;
    padding: 97px 0 117px;
    &__flex {
      display: flex;
      align-items: center;
    }
  }
  &__bottom {
    background: #222224;
    height: 80px;
    align-items: center;
    &__flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 24px;
    }
    &__right {
      height: 32px;
    }
    &__item {
      padding-top: 18px;
      background-color: white;
      fill: #e8e8e8;
      &:not(:last-child) {
        margin-right: 7px;
      }
    }
    &__item:hover {
      fill: #f26376;
      background-color: #f26376;
    }
  }
}

.appeal {
  width: 360px;
  text-align: center;
  &__text {
    margin-top: 30px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222224;
    &__special {
      font-style: italic;
    }
  }
}

.subscribe {
  width: 557px;
  margin-left: 223px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  & h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #222224;
  }
  & p {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #222224;
  }
  &__btn {
    display: flex;
    margin-top: 32px;
  }
  &__print {
    background: #e1e1e1;
    height: 49px;
    width: 256px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #222224;
    opacity: 0.67;
    border: 0px;
    padding-left: 22px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  &__button {
    height: 49px;
    width: 100px;
    background: #f16d7f;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    border: 0px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;
  }
}

.rights {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fbfbfb;
}

/* ----------catalog------------ */

.newarrivals {
  height: 148px;
  background: #f8f3f4;
  margin-bottom: 51px;
  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  &__left {
    &__text {
      font-family: Lato;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #f16d7f;
    }
  }
  &__right {
    &__text {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #636363;
      & span {
        font-weight: 700;
        color: #f16d7f;
      }
    }
  }
}

.filter {
  margin-right: 30px;
  display: flex;
  background: #ffffff;
  position: relative;
  width: 360px;

  &__title {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ef5b70;
    margin-left: 17px;
    margin-top: 24px;
    margin-bottom: 16px;
    & summary {
      padding: 20px;
      border-bottom: 1px solid #ebebeb;
      border-left: 5px solid #ef5b70;
    }
  }

  & p {
    margin-left: 16px;
    margin-right: 11px;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  &__content {
    z-index: 10;
    position: absolute;
    background: #ffffff;
    width: 360px;
    left: 0;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  }
  &__item {
    list-style-type: none;
    margin-top: 11px;
  }
  &__link {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6f6e6e;
    text-decoration: none;
    margin-left: 17px;
  }
}
.filter[open] {
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

.order {
  display: flex;
}

.parametrs {
  display: flex;
  margin-right: 28px;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6f6e6e;
  &__text {
    margin-right: 10px;
  }
}

.list {
  &__number {
    margin-right: 17px;
    text-decoration: none;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #c4c4c4;
  }
}

/* ------------product------------ */

.product {
  margin-bottom: 128px;
  &__item {
    background: #f7f7f7;
    margin-top: -51px;
    max-height: 777px;
    max-width: 1600px;
    &__flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__pic {
    margin-bottom: 42px;
  }
  &__cart {
    margin-right: 23px;
    &__button {
      display: flex;
      align-items: center;
    }
  }
}

.arrow {
  background: rgba(42, 42, 42, 0.15);
}

.item {
  &__description {
    background: #ffffff;
    width: 1114px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 65px 0;
    margin-top: -44px;
    margin-bottom: 128px;
    border: 1px solid #eaeaea;
    &__category {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #f16d7f;
    }
    &__name {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #4d4d4d;
    }
    &__text {
      margin: 48px 0 32px;
      max-width: 555px;
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #5e5e5e;
    }
    // & line {
    //     &__
    // }
  }
}

.line {
  &__red {
    margin: 12px 0;
    width: 63px;
    border-bottom: 3px solid #ef5b70;
  }

  &__gray {
    width: 642px;
    border: 1px solid #eaeaea;
    margin: 64px 0;
  }
}

.price {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #ef5b70;
}

/* --------------------------cart------------------------- */

.main {
  &__content {
    display: flex;
    justify-content: space-between;
    padding-top: 45px;
    &__left {
      width: 652px;
      margin-bottom: 128px;
    }
    &__left {
      &__buttons {
        display: flex;
        justify-content: space-between;
      }
      &__btn {
        padding: 17px 40px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        border: 1px solid#A4A4A4;
        text-decoration: none;
      }
    }
    &__right {
      padding-top: 17px;
      &__shipping {
        & h2 {
          font-family: Lato;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          color: #222222;
        }
      }
    }
    &__send {
      width: 360px;
      height: 214px;
      background: #f5f3f3;
      margin-top: 57px;
      padding-top: 39px;
      padding-left: 44px;
      & p {
        text-align: right;
        padding-right: 34px;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #4a4a4a;
        & span {
          margin-left: 25px;
        }
      }
      &__total {
        margin-top: 12px;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
        & span {
          font-weight: 700;
          color: #f16d7f;
        }
      }
      &__line {
        margin-top: 21px;
        width: 275px;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 17px;
      }
      &__btn {
        width: 273px;
        height: 50px;
        background: #f16d7f;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
  }
}

.cart {
  &__card {
    display: flex;
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
    height: 306px;
    width: 652px;
    margin-bottom: 72px;
    &__img {
      & img {
        height: 306px;
        width: 262px;
      }
    }
    &__description {
      margin: 22px 1px 97px 31px;
      &__text {
        width: 262px;
      }
      & h2 {
        margin-bottom: 42px;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #222222;
      }
      & p {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
        color: #575757;
        margin-bottom: 6px;
      }
    }
    &__delete {
      margin-left: 57px;
      margin-top: 22px;
    }
  }
  &__price {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: #ef5b70;
  }
}

.quantity {
  &__number {
    padding: 2px 16px;
    border: 1px solid#EAEAEA;
    margin-left: 24px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #656565;
    background: #ffffff;
  }
}

.print {
  width: 360px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #222222;
  padding: 13px 0 16px 17px;
  margin-top: 20px;
  border: 1px solid #a4a4a4;
  box-sizing: border-box;
  &__quote {
    padding: 10px 0 12px 15px;
    margin-top: 23px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #4a4a4a;
    border: 1px solid #a4a4a4;
  }
}

.input {
  &__first {
    color: #b1b1b1;
  }
}

.registration {
  margin-top: 13px;
  margin-bottom: 96px;
  &__flex {
    display: flex;
  }
  &__form {
    width: 360px;
    & form {
      & p {
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #222222;
      }
    }
  }
  &__gender {
    border: none;
  }
  &__input {
    width: 100%;
    margin-top: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
    height: 45px;
    border: 1px solid #a4a4a4;
    padding: 13px 0 16px 17px;
  }

  &__password {
    &__text {
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      color: #b1b1b1;
      margin-top: 14px;
    }
  }

  &__gender {
    margin: 32px 0;
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
    & input {
      margin-right: 10px;
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }

  &__join {
    margin-top: 40px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    background-color: #f16d7f;
    padding: 16px 30px;
    & img {
      margin-left: 20px;
    }
    border: none;
    cursor: pointer;
  }

  &__join:hover {
    transition: 1s;
    transform: rotate(360deg) scale(1.2);
  }

  &__loyality {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    & p {
      margin: 22px 0;
    }
    &__offers {
      &__flex {
        display: flex;
        margin-bottom: 16px;
        & p {
          margin: 0 0 0 23px;
        }
      }
    }
  }

  & aside {
    width: 652px;
    margin-left: 128px;
  }
}

// -------------------table------------------------
@media (max-width: 1024px) {
  .container {
    width: 755px;
  }
  .promo {
    &__flex {
      background-position: -65px;
    }
    &__title {
      max-width: 311px;
      & h1 {
        font-size: 24px;
        line-height: 28px;
        color: #222222;
      }
    }
    &__decor {
      font-size: 24px;
      line-height: 28px;
      color: #f16d7f;
    }
  }
  .letter {
    &__heavy {
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: 44px;
      line-height: 53px;
      color: #222222;
    }
  }

  .category {
    margin-bottom: 154px;
    &__flex {
      gap: 19px;
    }
    &__item:not(:last-child) {
      width: 232px;
      height: 167px;
      /* margin-bottom: 30px; */
    }
    &__item:last-child {
      width: 100%;
      height: 116px;
    }
  }

  .catalog {
    margin-bottom: 64px;
    &__cards {
      &__flex {
        gap: 15px;
      }
    }
    &__button {
      &__block {
        margin: 32px -10px 0;
      }
    }
  }

  .special {
    padding-bottom: 64px;
    &__flex {
      flex-direction: column;
      align-items: center;
    }
    &__offer {
      margin-top: 39px;
      margin-bottom: 0;
    }
  }

  .footer {
    &__top {
      padding: 64px 0 140px 0;
      height: 612px;
      background-size: cover;
      background-position: -364px;
      &__flex {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .subscribe {
    margin: 0;
  }

  .appeal {
    &__text {
      margin-bottom: 64px;
    }
  }
}

@media (max-width: 668px) {
  .container {
    width: 100%;
  }

  .header {
    &__last {
      display: none;
    }
    &__item {
      padding-right: 10px;
    }
    &__item:not(:last-child) {
      margin-right: 0px;
    }
  }
  .promo {
    &__flex {
      background-image: none;
      justify-content: center;
      padding-right: 10px;
    }
    &__title {
      max-width: 263px;
      & h1 {
        font-size: 20px;
        line-height: 24px;
        color: #222222;
      }
    }
    &__decor {
      font-size: 20px;
      line-height: 24px;
      color: #f16d7f;
    }
  }
  .letter {
    &__heavy {
      font-family: Lato;
      font-style: normal;
      font-weight: 900;
      font-size: 38px;
      line-height: 45px;
      color: #222222;
    }
  }
  .category {
    margin-bottom: 64px;
    &__flex {
      gap: 32px;
      justify-content: center;
    }
    &__item:not(:last-child) {
      width: 343px;
      height: 247px;
      /* margin-bottom: 30px; */
    }
    &__item:last-child {
      width: 100%;
      height: 111px;
    }
  }
  .catalog {
    & .container {
      padding: 0;
    }
    margin-bottom: 90px;
    &__button {
      &__block {
        margin: 40px 0 0;
      }
    }
    &__cards {
      &__flex {
        justify-content: center;
      }
    }
  }
  .footer {
    &__bottom {
      height: 170px;
      &__left {
        margin-bottom: 8px;
      }
      &__right {
        order: -1;
        margin: 42px 0;
      }
      &__flex {
        flex-direction: column;
      }
    }
  }
  .subscribe {
    width: 375px;
  }
  .special {
    min-width: 375px;
  }
}
</style>
