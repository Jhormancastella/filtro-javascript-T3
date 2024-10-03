document.getElementById('Button').addEventListener('click', function() {
    fetch('/json/DCandMArvel.json')
        .then(response => response.json())
        .then(data => {
            const heroesContainer = document.getElementById('heroesContainer');
            heroesContainer.innerHTML = ''; 

            const heroes = data.heroes;
            let currentHeroIndex = 0; 


            function showHero(index) {
                const hero = heroes[index];
                heroesContainer.innerHTML = `
                    <div class="hero">
                        <img src="${hero.img}" alt="${hero.superheroe}">
                        <div class="hero-info">
                            <h2>${hero.superheroe}</h2>
                            <p><strong>Identidad:</strong> ${hero.identidad}</p>
                            <p><strong>Primera aparición:</strong> ${hero.primeraparicion} (${hero.fechadeaparicion})</p>
                            <p><strong>Editorial:</strong> ${hero.editoral}</p>
                            <p><strong>Descripción:</strong> ${hero.descripcion}</p>
                            <p><strong>Habilidades:</strong> ${hero.habilidad}</p>
                        </div>
                    </div>
                `;
            }

            showHero(currentHeroIndex);


            document.getElementById('anterior').addEventListener('click', function() {
                if (currentHeroIndex > 0) {
                    currentHeroIndex--;
                    showHero(currentHeroIndex);
                }
            });

            document.getElementById('siguiente').addEventListener('click', function() {
                if (currentHeroIndex < heroes.length - 1) {
                    currentHeroIndex++;
                    showHero(currentHeroIndex);
                }
            });
        })
});
