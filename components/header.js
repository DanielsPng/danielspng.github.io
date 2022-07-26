class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
                <a href="/" class="logo">Daniel's</a>
                <div class="mobile-menu">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-list">
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="./portfolio/">Portfólio</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    `
  }
}

customElements.define('header-component', Header)

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'
    this.body = document.body

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
    this.body.classList.toggle(this.activeClass)
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)
mobileNavbar.init()
