//AJAX = Asynchronous Javascript and XML

const container = document.getElementById("container");

function crearTablaParaListar(personajes)
{
    if(personajes && personajes.lenght)
    {
        let htmlFinal = "";
        htmlFinal = `<table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Color Pelo</th>
                                <th>Color Ojos</th>
                            </tr>
                        </thead>`;
        htmlFinal += `<tbody>`;
        personajes.foreach(personaje => {
            htmlFinal +=  `<tr>
                                <td>${personaje.name}</td>
                                <td>${personaje.hair_color}</td>
                                </td>${personaje.eye_color}</td>
                            </tr>`;
        });
        htmlFinal += `</tbody>
                    </table>`;
        return htmlFinal;
    }
    else
    {
        return `<h2>No hay personajes que mostrar</h2>`
    }
}

const listarPersonajes = async () =>
{
    const response = await fetch("https://swapi.co/api/people/");
    const myJson = await response.json();
    //console.log(JSON.stringify(myJson));
    //console.log(myJson);
    const personajes = myJson.results;
    container.innerHTML = crearTablaParaListar(personajes);
    //console.log(personajes);
};

listarPersonajes();