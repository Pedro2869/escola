using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using etapa_5.Models;

namespace etapa_5.Controllers
{
    public class PreMatriculaController : Controller
    {
        [HttpPost]
        public IActionResult Cadastra(PreMatricula preMatricula)
        {
            try
            {
            EscolaDataServices eds = new EscolaDataServices();
            eds.InserePreMatricula(preMatricula);

            return Json(new { Status = "OK"});
            }
            catch(Exception e)
            {
                return Json(new { Status = "FALHA", Mensagem = e.Message});
            }
        }
    }
}