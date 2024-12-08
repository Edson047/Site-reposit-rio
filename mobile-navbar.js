class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      // Alterar classes ao clicar no ícone do menu
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  
      // Armazenar o estado do menu no Local Storage
      if (this.navList.classList.contains(this.activeClass)) {
        localStorage.setItem("menuOpen", "true");
      } else {
        localStorage.setItem("menuOpen", "false");
      }
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    // Método para restaurar o estado do menu a partir do Local Storage
    restoreMenuState() {
      const menuState = localStorage.getItem("menuOpen");
      if (menuState === "true") {
        this.navList.classList.add(this.activeClass);
        this.mobileMenu.classList.add(this.activeClass);
        this.animateLinks();
      } else {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
      }
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.restoreMenuState(); // Restaurar o estado do menu
      }
      return this;
    }
  }
  
  // Inicializar a navegação móvel
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();