//AJAX = Asynchronous Javascript and XML

const listarPersonajes = async () =>
{
    const response = await fetch("https://swapi.co/api/people/");
    const myJson = await response.json();
    //console.log(JSON.stringify(myJson));
    console.log(myJson);
};

listarPersonajes();