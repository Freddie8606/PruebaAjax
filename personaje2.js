const container = document.getElementById("container");

      function crearUsuario(evento){
        console.log(evento);
      }
      function pintarTablaParaListar(usuarios) {
        if (usuarios && usuarios.length) {
          let htmlFinal = "";
          htmlFinal = `<table>
                        <thead>
                          <tr>
                            <th>nombre</th>
                          </tr>
                        </thead>`;
          htmlFinal += "<tbody>";
          usuarios.forEach(usuario => {
            htmlFinal += `<tr>
                          <td>${usuario.nombre}</td>
                          </tr>`;
          });
          htmlFinal += "</tbody>";
          htmlFinal += "</table>";
          return htmlFinal;
        } else {
          return "<h2>no hay personajes para mostrar</h2>";
        }
      }
      const listarUsuarios = async () => {
        const response = await fetch("https://bootcamp-dia-3-knpy6cukq.now.sh/usuarios");
        const myJson = await response.json();
        const usuarios = myJson;
        container.innerHTML = pintarTablaParaListar(usuarios);
        //console.log(personajes);
      };
      listarUsuarios();