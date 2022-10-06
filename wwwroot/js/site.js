function buscaTurma() {
  var parametros = { idCurso: $("#selCurso").val() };

  var selTurma = $("#selTurma");
  selTurma.html("");

  $.post("/Turma/Lista", parametros)
    .done(function (data) {
      var opcoes = "",
        dataFormat;
      for (var i = 0; i < data.length; i++) {
        dataFormat = new Date(data[i].dataInicio);
        opcoes +=
          "<option value='" +
          data[i].id +
          "'>" +
          dataFormat.toLocaleDateString() +
          "</option>";
      }
      selTurma.html(opcoes);
    })
    .fail(function (data) {
      alert("falha " + data);
    });
}

$(document).ready(function () {
  $("#selCurso").change(buscaTurma);
});

$(document).ready(function () {
  $("#selCurso").change(buscaTurma);
  $("#formCadastro").submit(function (e) {
    e.preventDefault();
    realizaPost();
  });
});

function realizaPost() {
  var parametros = {
    nome: $("#txtNome").val(),
    email: $("#txtEmail").val(),
    telefone: $("#txtFone").val(),
    idCurso: $("#selCurso").val(),
    turmaId: $("#selTurma").val(),
  };
  function validaNome() {
    if (document.getElementById("#txtNome").value.length < 2) {
      alert("Digite seu nome");
      document.getElementById("#txtNome").style.color = "red";
      return false;
    } else {
      document.getElementById("#txtNome").style.color = "black";
      return true;
    }
  }

  function validaEmail() {
    if (document.getElementById("#txtEmail").value.length == "") {
      alert("Por favor, digite seu email para prosseguir");
      document.getElementById("#txtEmail").style.color = "red";
      return false;
    } else {
      document.getElementById("#txtEmail").style.color = "black";
      return true;
    }
  }

  function validaTel() {
    if (document.getElementById("#txtFone").value.length == "") {
      alert("Por favor, digite o seu telefone para prosseguir");
      document.getElementById("#txtFone").style.color = "red";
      return false;
    } else {
      document.getElementById("#txtFone").style.color = "black";
      return true;
    }
  }
  function validaCurso() {
    if (document.getElementById("#selCurso").value.length == "") {
      alert("Por favor, escolha um curso para prosseguir");
      document.getElementById("#selCurso").style.background = "red";
      return false;
    } else {
      document.getElementById("#selCurso").style.background = "black";
      return true;
    }
  }

  $.post("/PreMatricula/Cadastra", parametros).done(function () {
    if (
      validaEmail == true &&
      validaTel == true &&
      validaNome == true &&
      validaCurso == true
    ) {
      $("#modalLoading").modal("hide");
      alert(data.mensagem);
    } else {
      alert(data.mensagem);
    }
  });
}

// O que eu quero fazer com o formulário?
// Quero preencher os campos corretamente
// Se todos os campos forem preenchidos corretamente, ao clicar no botão de enviar o currículo, deve carregar uma mensagem de sucesso
// Senão aparecer mensagem de erro
