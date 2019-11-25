//AJAX = Asynchronous Javascript and XML

const container = document.getElementById("container");

function crearTablaParaListar(personajes)
{
   /*  if(personajes && personajes.length)
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
        personajes.forEach(personaje => {
            htmlFinal +=  `<tr>
                                <td>${personaje.name}</td>
                                <td>${personaje.hair_color}</td>
                                </td>${personaje.eye_color}</td>
                            </tr>`;
        });
        htmlFinal += `</tbody>`
        htmlFinal += `</table>`;
        return htmlFinal;
    }
    else
    {
        return `<h2>No hay personajes que mostrar</h2>`
    } */
    if (personajes && personajes.length) {
        let htmlFinal = "";
        htmlFinal = `<table>
                      <thead>
                        <tr>
                          <th>nombre</th>
                          <th>color pelo</th>
                          <th>color ojos</th>
                        </tr>
                      </thead>`;
        htmlFinal += "<tbody>";
        personajes.forEach(personaje => {
          htmlFinal += `<tr>
                        <td>${personaje.name}</td>
                        <td>${personaje.hair_color}</td>
                        <td>${personaje.eye_color}</td>
                        </tr>`;
        });
        htmlFinal += "</tbody>";
        htmlFinal += "</table>";
        return htmlFinal;
      } else {
        return "<h2>no hay personajes para mostrar</h2>";
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