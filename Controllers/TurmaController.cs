using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using etapa_5.Models;

namespace etapa_5.Controllers
{
    public class TurmaController : Controller
    {
        //retorna Json com turmas para preenchimento na página de pré-matrícula
        [HttpPost]
        public IActionResult Lista(int idCurso)
        {
            EscolaDataServices eds = new EscolaDataServices();
            ICollection<Turma> turmas = eds.ListaTurmaPorCurso(idCurso);
            return Json(turmas);
        }    
    }
}