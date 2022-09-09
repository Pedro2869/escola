﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function buscaTurma() {
  var parametros = { idCurso: $("#selCurso").val() };

  var selTurma = $("#selTurma");
  selTurma.html("");

  $.post("/Turma/Lista", parametros)
    .done(function (data) {
      var opcoes = "";
      for (var i = 0; i < data.length; i++) {
        dataFormat = new Date(data[i].dataInicio);
        opcoes += "<option value= "+ data[i].id + ">" + dataFormat.toLocaleDateString() + "</option>";
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

function realizaPost()
{
  var parametros = 
  {
    nome: $("#txtNome").val(),
    email: $("#txtEmail").val(),
    telefone: $("#txtFone").val(),
    idCurso: $("#selCurso").val(),
    turmaId: $("#selTurma").val()
  };

  $('#modalLoading').modal('show');
  $.post("/PreMatricula/Cadastra", parametros)
      .done(function()
      {
        $('#modalLoading').modal('hide');
        $('#divFormulario').hide();
        $('#divCadastrado').fadeIn();
      });
}

$(document).ready(
  function(){
    $("#selCurso").change(buscaTurma);
    $("#formCadastro").submit(function(e){
      e.preventDefault();
      realizaPost();
    })
  }
);