async function getPosts() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        let lista = ``
        for (let i = 0; i < 19; i++) {
            dataTitle = data[i].title;
            dataBody = data[i].body;
            lista += `<ul>
            <li>
            <h2>${dataTitle}</h2>
            <p>${dataBody}</p>
            </li>
            </ul>`
        }
        listaPost.innerHTML = lista
    } catch (error) {
        console.log("Ha ocurrido un error", error.stack);
    }
}
let listaPost = document.getElementById('post-data');