using FanTheoryAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace FanTheoryAPI.Controllers
{
    [Route("api/v1/theories")]
    public class TheoriesController : Controller
    {
        private readonly LibraryContext context;

        public TheoriesController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<Theory>> GetAllTheories(string imdb, string writer, string title, string sort, int? page, int length = 10, string dir = "asc")
        {
            IQueryable<Theory> query = context.Theories;

            if (!string.IsNullOrWhiteSpace(imdb))
                query = query.Where(t => t.ImdbID == imdb);
            if (!string.IsNullOrWhiteSpace(writer))
                query = query.Where(t => t.Writer == writer);
            if (page.HasValue)
                query = query.Skip(page.Value * length);

            query = query.Take(length);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "writer":
                        if (dir == "asc")
                            query = query.OrderBy(t => t.Writer);
                        if (dir == "desc")
                            query = query.OrderByDescending(t => t.Writer);
                        break;
                    case "title":
                        if (dir == "asc")
                            query = query.OrderBy(t => t.Title);
                        if (dir == "desc")
                            query = query.OrderByDescending(t => t.Title);
                        break;
                }
            }

            var theories = query.ToList();

            if (theories.Count == 0)
                return NotFound();

            return theories;
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Theory> GetTheory(int id)
        {
            var theory = context.Theories
                .Include(t => t.Comments)
                .SingleOrDefault(t => t.Id == id);
            if (theory == null)
                return NotFound();
            return theory;
        }

        [Route("{id}/comments")]
        [HttpGet]
        public ActionResult<List<Comment>> GetCommentsOfTheory(int id)
        {
            var theory = context.Theories
                .Include(t => t.Comments)
                .SingleOrDefault(t => t.Id == id);
            if (theory == null)
                return NotFound();

            return theory.Comments;
        }

        [HttpPost]
        public IActionResult CreateTheory([FromBody] Theory newTheory)
        {
            if (string.IsNullOrWhiteSpace(newTheory.ImdbID))
                return BadRequest("imdbId is not allowed to be null or empty.");
            if (string.IsNullOrWhiteSpace(newTheory.Title))
                return BadRequest("title is not allowed to be null or empty");
            if (string.IsNullOrWhiteSpace(newTheory.Writer))
                newTheory.Writer = "anonymous";

            context.Theories.Add(newTheory);
            context.SaveChanges();
            return Created("", newTheory);
        }

        [Route("{id}/comments")]
        [HttpPost]
        public IActionResult CreateCommentOfTheory(int id, [FromBody] Comment newComment)
        {
            var theorie = context.Theories
                .Include(t => t.Comments)
                .SingleOrDefault(t => t.Id == id);
            if (theorie == null)
                return NotFound();

            theorie.Comments.Add(newComment);
            context.SaveChanges();
            return Created("", newComment);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteTheory(int id)
        {
            var theory = context.Theories.Find(id);
            if (theory == null)
                return NotFound();
            context.Theories.Remove(theory);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateTheory([FromBody] Theory uTheory)
        {
            var oTheory = context.Theories.Find(uTheory.Id);
            if (oTheory == null)
                return NotFound();

            oTheory.ImdbID = uTheory.ImdbID;
            oTheory.Writer = uTheory.Writer;
            oTheory.Title = uTheory.Title;
            oTheory.Description = uTheory.Description;
            oTheory.Comments = uTheory.Comments;

            context.SaveChanges();
            return Ok(oTheory);
        }


    }
}