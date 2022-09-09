using Microsoft.EntityFrameworkCore;

namespace etapa_5.Models
{
    public class AppDBContext: DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=localhost;DataBase=Escola;Uid=root;Pwd=;");
        }

        public DbSet<Curso> Cursos {get; set;}
        public DbSet<Turma> Turmas {get; set;}
        public DbSet<PreMatricula> PreMatriculas {get; set;}
    }
}