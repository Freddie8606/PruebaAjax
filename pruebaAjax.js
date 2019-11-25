//AJAX = Asynchronous Javascript and XML

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
        htmlFinal += `</table>`
    }
}

const listarPersonajes = async () =>
{
    const response = await fetch("https://swapi.co/api/people/");
    const myJson = await response.json();
    //console.log(JSON.stringify(myJson));
    console.log(myJson);
    const personajes = myJson.results;
    console.log(personajes);
};

listarPersonajes();