using System.Collections.Generic;
using System.Linq;
using etapa_5.Models;
using Microsoft.EntityFrameworkCore;

namespace etapa_5.Models
{
    public class EscolaDataServices
    {
        public void InserePreMatricula(PreMatricula preMatricula)
        {
            using(var context = new AppDBContext())
            {
                context.PreMatriculas.Add(preMatricula);
                context.SaveChanges();
            }
        }

        public ICollection<Curso> ListaCursos()
        {
            using(var context = new AppDBContext())
            {
                return context.Cursos.OrderBy(c => c.Nome).ToList();
            }            
        }

        public ICollection<Turma> ListaTurmaPorCurso(int idCurso)
        {
            using(var context = new AppDBContext())
            {
                return context.Turmas.Where(t => t.CursoId == idCurso) .OrderBy(t => t.dataInicio).ToList();
            }
        }

        public ICollection<PreMatricula> ListaPreMatriculas()
        {
            using(var context = new AppDBContext())
            {
                return context.PreMatriculas
                            .Include(pm => pm.Turma)
                            .ThenInclude(t => t.Curso)
                            .ToList();
            }
        }
    }
}