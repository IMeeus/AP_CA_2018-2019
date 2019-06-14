using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FanTheoryAPI.Model
{
    public class Theory
    {
        public int Id { get; set; }
        [Required]
        public string ImdbID { get; set; }
        public string Writer { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        [JsonIgnore]
        public List<Comment> Comments { get; set; }
    }
}   