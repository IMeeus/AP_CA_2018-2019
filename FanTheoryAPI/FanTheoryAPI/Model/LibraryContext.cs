using FanTheoryAPI.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FanTheoryAPI
{
    public class LibraryContext: DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options): base(options) {}

        public DbSet<Theory> Theories { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
