(function () {
  const textSloganName = "PEOPLE TRUST US";
  const textSloganTitle = "Giving your business a fresh start";
  const textSloganSubtitle =
    "We are passionate about turning any clients' needs into brilliant solutions that drive value!";
  const textHeaderButtonMoreInfo = "LEARN MORE";
  const textHeaderButtonRequest = "REQUEST A QUOTE";

  const containerForSloganButton = document.querySelector(
    ".container_for_js_inner"
  );
  containerForSloganButton.innerHTML = `
            <div class="container__slogan">
            <div class="company__slogan">
              <p class="company__slogan__name">${textSloganName}</p>
              <h1 class="company__slogan__title">${textSloganTitle}</h1>
              <p class="company__slogan__subtitle">${textSloganSubtitle}</p>
            </div>
            <div class="header__buttons">
              <div class="button__learn__more">
                <a href="#learn-more" class="learn__more header_a_class">${textHeaderButtonMoreInfo}</a>
              </div>
              <div class="button__request__quote">
                <a href="#request-quote" class="request__quote header_a_class">${textHeaderButtonRequest}</a>
              </div>
            </div>
          </div>
  `;
})();
