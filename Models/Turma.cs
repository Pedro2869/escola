using System;

namespace etapa_5.Models
{
    public class Turma
    {
        public int Id {get; set;}
        public DateTime dataInicio {get; set;}
        public DateTime DataFim {get; set;}
        public int CursoId {get; set;}
        public Curso Curso {get; set;}
    }
}

