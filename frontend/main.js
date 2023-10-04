/*fetch('http://localhost:1337/articles')
    .then(response => response.json())
    .then(data => console.log(data));*/


// affichage de la page principale
// récupération des données du serveur
fetch('http://localhost:1337/articles')
    .then(response => response.json())
    .then(response => {
        data = response
        console.log(data)
        dataDiv = "";

        // affichage des données voulues + bouton pour accéder à la page dédiée à 1 article
        for (i = 0; i < data.length; i++) {
            console.log(data[i])

            dataDiv += `
                    <div class="col-md-4 text-center"> 
                        <div>
                            <h1>${data[i].Title}</h1>
                            <p>${data[i].Description}</p>
                            <h5>${data[i].Autor}</h5>
                            <h6>${data[i].updated_at}</h6>
                        </div>
                        <div>
                            <a class="btn btn-primary" href="article${data[i].id}.html">Full article</a>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.getElementById('articlesList').innerHTML = dataDiv;
    });


// affichage des pages dédiées à chaque article
// récupération des données du serveur
fetch('http://localhost:1337/articles')
    .then(response => response.json())
    .then(response => {
        anArticle = response
        console.log(anArticle)
        anArticleDiv = "";

        // récupération de la position de l'article dans le tableau de données  
        articleNumber = document.getElementById('article_number').innerText - 1;
        console.log(articleNumber);

        // affichage des données suivant la position de l'article dans le tableau de données
        for (j = 0; j < anArticle.length; j++) {
            // console.log(anArticle[j])

            if (articleNumber == j) {
                anArticleDiv = `
                    <div class="col-md-12 text-center">
                        <div> 
                            <h1>${anArticle[j].Title}</h1>
                            <p>${anArticle[j].Content}</p>
                            <h5>${anArticle[j].Autor}</h5>
                            <h6>${anArticle[j].updated_at}</h6>
                        </div>
                        <div>
                            <a class="btn btn-primary " href="index.html">Main page</a>
                        </div>
                    </div>
                </div>
            </div>`

                document.getElementById('article').innerHTML = anArticleDiv;
                break;
            };
        }
    });