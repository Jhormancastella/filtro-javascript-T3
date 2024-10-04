// HeroDC Component
class HeroDC extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currentHeroIndex = 0;
      this.heroes = [];
    }
  
    connectedCallback() {
      this.render();
      this.fetchHeroes();
    }
  
    async fetchHeroes() {
      try {
        const response = await fetch('/json/DC.json');
        if (!response.ok) throw new Error('Error al cargar los héroes de DC');
        const data = await response.json();
        this.heroes = data.heroes;
        this.showHero(this.currentHeroIndex);
      } catch (error) {
        this.shadowRoot.innerHTML = `<div>Error: ${error.message}</div>`;
      }
    }
  
    showHero(index) {
      const hero = this.heroes[index];
      const shadowRoot = this.shadowRoot;

      shadowRoot.querySelector(".imgns").src = hero.img;
      shadowRoot.querySelector(".imgns").alt = hero.superheroe;
      shadowRoot.querySelector("h2").textContent = hero.superheroe;
      shadowRoot.querySelector(".hero-info p:nth-child(2)").innerHTML = `<strong>Identidad:</strong> ${hero.identidad}`;
      shadowRoot.querySelector(".hero-info p:nth-child(3)").innerHTML = `<strong>Primera aparición:</strong> ${hero.primeraparicion} (${hero.fechadeaparicion})`;
      shadowRoot.querySelector(".hero-info p:nth-child(4)").innerHTML = `<strong>Editorial:</strong> ${hero.editoral}`;
      shadowRoot.querySelector(".hero-info p:nth-child(5)").innerHTML = `<strong>Descripción:</strong> ${hero.descripcion}`;
      shadowRoot.querySelector(".hero-info p:nth-child(6)").innerHTML = `<strong>Habilidades:</strong> ${hero.habilidad}`;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding:2em;
            width:250px;
            display: flex;
            flex-direction: column;
            align-items: center;
             box-shadow: 0px 0px 10px white;
            background: rgb(0, 153, 255);
          }
          h2 {
            color: white;
          }
          .imgns {
            width: 150px;
             box-shadow: 0px 0px 10px white;
          }
          .hero-info {
            text-align: center;
            color: white;
          }
          .bnt {
            margin-top: 20px;
          }
        </style>
        <div class="hero">
          <img class="imgns" src="" alt="">
          <div class="hero-info">
            <h2></h2>
            <p><strong>Identidad:</strong></p>
            <p><strong>Primera aparición:</strong></p>
            <p><strong>Editorial:</strong></p>
            <p><strong>Descripción:</strong></p>
            <p><strong>Habilidades:</strong></p>
          </div>
          <div class="bnt">
            <button id="anterior">Anterior</button>
            <button id="siguiente">Siguiente</button>
          </div>
        </div>
      `;
  
      this.shadowRoot.querySelector('#anterior').addEventListener('click', () => {
        if (this.currentHeroIndex > 0) {
          this.currentHeroIndex--;
          this.showHero(this.currentHeroIndex);
        }
      });
  
      this.shadowRoot.querySelector('#siguiente').addEventListener('click', () => {
        if (this.currentHeroIndex < this.heroes.length - 1) {
          this.currentHeroIndex++;
          this.showHero(this.currentHeroIndex);
        }
      });
    }
  }
  
  customElements.define('hero-viewer-dc', HeroDC);
  
  
  // HeroMarvel Component
  class HeroMarvel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currentHeroIndex = 0;
      this.heroes = [];
    }
  
    connectedCallback() {
      this.render();
      this.fetchHeroes();
    }
  
    async fetchHeroes() {
      try {
        const response = await fetch('/json/Marvel.json');
        if (!response.ok) throw new Error('Error al cargar los héroes de Marvel');
        const data = await response.json();
        this.heroes = data.heroes;
        this.showHero(this.currentHeroIndex);
      } catch (error) {
        this.shadowRoot.innerHTML = `<div>Error: ${error.message}</div>`;
      }
    }
  
    showHero(index) {
      const hero = this.heroes[index];
      const shadowRoot = this.shadowRoot;
  
      // Actualizamos el contenido sin sobrescribir todo el shadowRoot
      shadowRoot.querySelector(".imgns").src = hero.img;
      shadowRoot.querySelector(".imgns").alt = hero.superheroe;
      shadowRoot.querySelector("h2").textContent = hero.superheroe;
      shadowRoot.querySelector(".hero-info p:nth-child(2)").innerHTML = `<strong>Identidad:</strong> ${hero.identidad}`;
      shadowRoot.querySelector(".hero-info p:nth-child(3)").innerHTML = `<strong>Primera aparición:</strong> ${hero.primeraparicion} (${hero.fechadeaparicion})`;
      shadowRoot.querySelector(".hero-info p:nth-child(4)").innerHTML = `<strong>Editorial:</strong> ${hero.editoral}`;
      shadowRoot.querySelector(".hero-info p:nth-child(5)").innerHTML = `<strong>Descripción:</strong> ${hero.descripcion}`;
      shadowRoot.querySelector(".hero-info p:nth-child(6)").innerHTML = `<strong>Habilidades:</strong> ${hero.habilidad}`;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .hero {
            padding:2em;
            width:250px;
            display: flex;
            flex-direction: column;
            align-items: center;
              box-shadow: 0px 0px 10px white;
                background: rgba(255, 0, 0, 0.623);
          }
          h2 {
            color: white;
          }
          .imgns {
            width: 150px;
            box-shadow: 0px 0px 55px white;
        
          }
          .hero-info {
            text-align: center;
            color: white;
          }
          .bnt {
            margin-top: 20px;
          }
        </style>
        <div class="hero">
          <img class="imgns" src="" alt="">
          <div class="hero-info">
            <h2></h2>
            <p><strong>Identidad:</strong></p>
            <p><strong>Primera aparición:</strong></p>
            <p><strong>Editorial:</strong></p>
            <p><strong>Descripción:</strong></p>
            <p><strong>Habilidades:</strong></p>
          </div>
          <div class="bnt">
            <button id="anterior">Anterior</button>
            <button id="siguiente">Siguiente</button>
          </div>
        </div>
      `;
  
      this.shadowRoot.querySelector('#anterior').addEventListener('click', () => {
        if (this.currentHeroIndex > 0) {
          this.currentHeroIndex--;
          this.showHero(this.currentHeroIndex);
        }
      });
  
      this.shadowRoot.querySelector('#siguiente').addEventListener('click', () => {
        if (this.currentHeroIndex < this.heroes.length - 1) {
          this.currentHeroIndex++;
          this.showHero(this.currentHeroIndex);
        }
      });
    }
  }
  
  customElements.define('hero-viewer-marvel', HeroMarvel);
  
// para el los eventos de click para selecionar cada json y mostarlo en pantlla 

document.addEventListener('DOMContentLoaded', () => {
    const dcButton = document.getElementById('dc-comics');
    const marvelButton = document.getElementById('marvel-comics');
    const heroContainer = document.getElementById('hero-container');
 
    dcButton.addEventListener('click', () => {
      heroContainer.innerHTML = ''; // Limpiar el contenedor
      const heroViewerDC = document.createElement('hero-viewer-dc');
      heroContainer.appendChild(heroViewerDC);
    });
  

    marvelButton.addEventListener('click', () => {
      heroContainer.innerHTML = ''; // Limpiar el contenedor
      const heroViewerMarvel = document.createElement('hero-viewer-marvel');
      heroContainer.appendChild(heroViewerMarvel);
    });
  });
  