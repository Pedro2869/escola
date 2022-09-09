namespace etapa_5.Models
{
    public class PreMatricula
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public int TurmaId { get; set; }
        public Turma Turma { get; set; }
    }
}

