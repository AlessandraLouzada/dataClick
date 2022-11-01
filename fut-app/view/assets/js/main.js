const uri = 'http://localhost/api_restful/public_html/api/tarefas/';

$(document).ready(function () {

  $('#tagDetalhes').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("detalhes").style.display = "block";
    document.getElementById("associar").style.display = "none";
    document.getElementById("clube").style.display = "none";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("usuario").style.display = "none";
  });

  $('#tagAssociar').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("associar").style.display = "block";
    document.getElementById("detalhes").style.display = "none";
    document.getElementById("clube").style.display = "none";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("usuario").style.display = "none";
  });
  
  $('#tagClube').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("clube").style.display = "block";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("detalhes").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("associar").style.display = "none";
    document.getElementById("usuario").style.display = "none";
    document.getElementById("inserir_submit").value = "Inserir clube";
    document.getElementById("editar_submit").value = "Editar clube";
    document.getElementById("remover_submit").value = "Remover clube";

  });
  
  $('#tagUsuario').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("usuario").style.display = "block";
    document.getElementById("detalhes").style.display = "none";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("associar").style.display = "none";
    document.getElementById("clube").style.display = "none";
    document.getElementById("inserir_submit").value = "Inserir usuário";
    document.getElementById("editar_submit").value = "Editar usuário";
    document.getElementById("remover_submit").value = "Remover usuário";
  });

  $('#inserir, #inserirUsuario').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("inserirNome").style.display = "block";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("removerNome").style.display = "none";
  });

  $('#editar, #editarUsuario').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("editarNome").style.display = "block";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("removerNome").style.display = "none";
  });

  $('#remover, #removerUsuario').on('click', () => {
    document.getElementById('lista').innerHTML = "";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("removerNome").style.display = "block";
  });

  $('#remover_submit').on('click', () => {

    if( document.getElementById("remover_submit").value === 'Remover clube'){
      const idTextbox = document.getElementById('idRemover');

      const item = {
        id: idTextbox.value.trim(),
        tabela: 'clube'
      };
    
      fetch(uri, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          idTextbox.value = '';
          alert("Clube removido com sucesso");
        })
        .catch(error => console.error('Nao foi possivel remover item.', error));

    }
    else if( document.getElementById("remover_submit").value === 'Remover usuário'){

      const idTextbox = document.getElementById('idRemover');

      const item = {
        id: idTextbox.value.trim(),
        tabela: 'usuario'
      };
    
      fetch(uri, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          idTextbox.value = '';
          alert("Usuário removido com sucesso");
        })
        .catch(error => console.error('Nao foi possivel remover item.', error));
       
    }
  });

  $('#editar_submit').on('click', () => {

    if( document.getElementById("editar_submit").value === 'Editar clube'){
      const nameTextbox = document.getElementById('nameEditar');
      const idTextbox = document.getElementById('id');

      const item = {
        name: nameTextbox.value.trim(),
        id: idTextbox.value.trim(),
        tabela: 'clube'
      };
    
      fetch(uri, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          nameTextbox.value = '';
          idTextbox.value = '';
          alert("Clube editado com sucesso");
        })
        .catch(error => console.error('Nao foi possivel editar item.', error));

    }
    else if( document.getElementById("editar_submit").value === 'Editar usuário'){

      const nameTextbox = document.getElementById('nameEditar');
      const idTextbox = document.getElementById('id');

      const item = {
        name: nameTextbox.value.trim(),
        id: idTextbox.value.trim(),
        tabela: 'usuario'
      };
    
      fetch(uri, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          nameTextbox.value = '';
          idTextbox.value = '';
          alert("Usuário editado com sucesso");
        })
        .catch(error => console.error('Nao foi possivel editar item.', error));
       
    }
  });

  $('#inserir_submit').on('click', () => {

    if( document.getElementById("inserir_submit").value === 'Inserir clube'){
      const nameTextbox = document.getElementById('name');

      const item = {
        name: nameTextbox.value.trim(),
        tabela: 'clube'
      };
    
      fetch(uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          nameTextbox.value = '';
          alert("Clube cadastrado com sucesso");
        })
        .catch(error => console.error('Nao foi possivel add item.', error));

    }
    else if( document.getElementById("inserir_submit").value === 'Inserir usuário'){

      const nameTextbox = document.getElementById('name');

      const item = {
        name: nameTextbox.value.trim(),
        tabela: 'usuario'
      };
    
      fetch(uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(() => {
          nameTextbox.value = '';
          alert("Usuário cadastrado com sucesso");
        })
        .catch(error => console.error('Nao foi possivel add item.', error));
       
    }

        

  });

  $('#listar').on('click', () => {
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("removerNome").style.display = "none";
    let url = uri.substring(0, uri.length - 1)+"?tabela=clube"
    fetch(url)
    .then(response => response.json())
    .then(data => _displayItems(data.dados, 'Clubes'))
    .catch(error => console.error('Unable to get items.', error));

  });

  $('#listarUsuario').on('click', () => {
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("removerNome").style.display = "none";
    let url = uri.substring(0, uri.length - 1)+"?tabela=usuario"
    fetch(url)
    .then(response => response.json())
    .then(data => _displayItems(data.dados, 'Usuários'))
    .catch(error => console.error('Unable to get items.', error));

  });

  $('#detalhes_submit').on('click', () => {
    document.getElementById("inserirNome").style.display = "none";
    document.getElementById("editarNome").style.display = "none";
    document.getElementById("removerNome").style.display = "none";
    const idUsuarioTextbox = document.getElementById('idUsuarioDetalhes');
    let url = uri.substring(0, uri.length - 1)+"?tabela="+idUsuarioTextbox.value;
    fetch(url)
    .then(response => response.json())
    .then(data => _displayUsuarios(data.dados))
    .catch(error => console.error('Unable to get items.', error));

  });
  
  $('#botao_submit').on('click', () => {

    const idUsuarioTextbox = document.getElementById('idUsuario');
    const idClubeTextbox = document.getElementById('idClube');

    const item = {
      idUsuario: idUsuarioTextbox.value.trim(),
      idClube: idClubeTextbox.value.trim(),
      tabela: 'associar'
    };
  
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(() => {
        idClubeTextbox.value = '';
        idUsuarioTextbox.value = '';
        alert("Usuário associado com sucesso");
      })
      .catch(error => alert('Nao foi possivel associar item.'));    

  });

});

function _displayItems(data, tipo) {
  document.getElementById('lista').innerHTML = "";
  const button = document.createElement('button');
  var html = '<h2> Lista '+ tipo +'</h2> <br>' ;
  data.forEach(item => {
    html += 'Id: '+item.id+ ' Nome: '+item.nome + '<br>';
  });
  document.getElementById('lista').innerHTML = html;

}
function _displayUsuarios(data){
  document.getElementById('lista').innerHTML = "";
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById('lista').appendChild(table);

  let tr_cabecalho = document.createElement('tr');
  let cabecalho_id_user = document.createElement('th');
  let cabecalho_nome_user = document.createElement('th');
  let cabecalho_id_clube = document.createElement('th');
  let cabecalho_nome_clube = document.createElement('th');
  let cabecalho_vencimento = document.createElement('th');
  let cabecalho_status = document.createElement('th');
  let cabecalho_button = document.createElement('th');
  cabecalho_id_user.innerHTML = "Id Usuário";
  cabecalho_nome_user.innerHTML = "Nome Usuário";
  cabecalho_id_clube.innerHTML = "Id Clube";
  cabecalho_nome_clube.innerHTML = "Nome Clube";
  cabecalho_vencimento.innerHTML = "Vencimento";
  cabecalho_status.innerHTML = "Status";
  cabecalho_button.innerHTML = "Fazer Pagamento";
  tr_cabecalho.appendChild(cabecalho_id_user);
  tr_cabecalho.appendChild(cabecalho_nome_user);
  tr_cabecalho.appendChild(cabecalho_id_clube);
  tr_cabecalho.appendChild(cabecalho_nome_clube);
  tr_cabecalho.appendChild(cabecalho_vencimento);
  tr_cabecalho.appendChild(cabecalho_status);
  tr_cabecalho.appendChild(cabecalho_button);
  thead.appendChild(tr_cabecalho);
  let button = '';
  data.forEach(item => {  
    if(item.status == "pago") {
      button = '<button type="button" id="status_pago">Pagar</button>';
    }   
    else{
      button = '<button type="button" onClick="setStatus('+item.id_fatura+')" id="status_submit">Pagar</button>';
    }      
    let tr_linhas = document.createElement('tr');
    let linhas_id_user = document.createElement('td');
    let linhas_nome_user = document.createElement('td');
    let linhas_id_clube = document.createElement('td');
    let linhas_nome_clube = document.createElement('td');
    let linhas_vencimento = document.createElement('td');
    let linhas_status = document.createElement('td');
    let linhas_button = document.createElement('td');
    linhas_id_user.innerHTML = item.user_id;
    linhas_nome_user.innerHTML = item.user_nome;
    linhas_id_clube.innerHTML = item.clube_id;
    linhas_nome_clube.innerHTML = item.clube_nome;
    linhas_vencimento.innerHTML = item.vencimento;
    var dataAtual = new Date();
    dataAtual = dataAtual.toISOString();
    var resultado = dataAtual.substring(10, 0);
    if(item.status == 'em_aberto' && item.vencimento < resultado){
      linhas_status.innerHTML = 'Inadimplente'
    }
    else{
      linhas_status.innerHTML = 'Ativo'
    }
    linhas_button.innerHTML = button;
    tr_linhas.appendChild(linhas_id_user);
    tr_linhas.appendChild(linhas_nome_user);
    tr_linhas.appendChild(linhas_id_clube);
    tr_linhas.appendChild(linhas_nome_clube);
    tr_linhas.appendChild(linhas_vencimento);
    tr_linhas.appendChild(linhas_status);
    tr_linhas.appendChild(linhas_button);
    tbody.appendChild(tr_linhas);
  
  });
}
