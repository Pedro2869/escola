﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

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

function realizaPost() {
  var parametros = {
    nome: $("#txtNome").val(),
    email: $("#txtEmail").val(),
    telefone: $("#txtFone").val(),
    idCurso: $("#selCurso").val(),
    turmaId: $("#selTurma").val(),
  };

  $("#modalLoading").modal("show");
  $.post("/PreMatricula/Cadastra", parametros).done(function () {
    if (data.status == "OK") {
      $("#modalLoading").modal("hide");
      $("#divFormulario").hide();
      $("#divCadastrado").fadeIn();
    } else {
      $("#modalLoading").modal("hide");
      alert(data.mensagem);
    }
  });
}

function validaNome() {
  if(document.getElementById("txtName").value.length < 2)
    {
        alert("Digite seu nome");
        document.getElementById("txtName").style.color = "red";
        return false;
    }
    else
    {
        document.getElementById("txtName").style.color = "black";
        return true;
    }
}

function validaEmail() {
  if(document.getElementById("txtEmail").value.length == "")
  {
    alert("Por favor, digite seu email para prosseguir")
    document.getElementById("txtEmail").style.color = "red";
    return false;
  }
  else
  {
    document.getElementById("txtEmail").style.color = "black";
    return true;
  }
}

function validaTel() {
  if(document.getElementById("txtFone").value.length == "")
  {
    alert("Por favor, digite o seu telefone para prosseguir")
    document.getElementById("txtFone").style.color = "red";
    return false;
  }
  else
  {
    document.getElementById("txtFone").style.color = "black";
    return true;
  }
}

function validaCurso() {
  if(document.getElementById("txtCurso").value.length == "")
  {
    alert("Por favor, escolha um curso para prosseguir")
    document.getElementById("txtCurso").style.background = "red";
    return false;
  }
  else
  {
    document.getElementById("txtCurso").style.background = "black";
  }
}

$(document).ready(function () {
  $("#selCurso").change(buscaTurma);
  $("#formCadastro").submit(function (e) {
    e.preventDefault();
    realizaPost();
  });
});
