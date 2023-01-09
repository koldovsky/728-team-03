(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".navigation-wrapper");
  const socialNetworkList = document.querySelector(
    ".header__social__networks__list"
  );
  const alonium = document.querySelector(".alonium_refresh");
  const aloniumPoint = document.querySelector(".alonium_point_refresh");
  const phone = document.querySelector(".header_top_phone_number");

  iconBurger.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
    socialNetworkList.classList.toggle("active");
    alonium.classList.toggle("active");
    aloniumPoint.classList.toggle("active");
    phone.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
        socialNetworkList.classList.remove("active");
        alonium.classList.remove("active");
        aloniumPoint.classList.remove("active");
        phone.classList.remove("active");
      }
    });
  });
})();
