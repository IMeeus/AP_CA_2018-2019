using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FanTheoryAPI.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public string Writer { get; set; }
        public string Text { get; set; }    
        [JsonIgnore]
        public Theory MovieTheory { get; set; }
    }
}
