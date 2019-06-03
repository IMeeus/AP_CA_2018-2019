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
    [Route("api/v1/comments")]
    public class CommentsController : Controller
    {
        private readonly LibraryContext context;

        public CommentsController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<Comment>> GetAllComments(string w, int? page, int length = 2)
        {
            IQueryable<Comment> query = context.Comments;

            if (!string.IsNullOrWhiteSpace(w))
                query = query.Where(c => c.Writer == w);
            if (page.HasValue)
                query = query.Skip(page.Value * length);

            query = query.Take(length);

            var comments = query.ToList();

            if (comments.Count == 0)
                return NotFound();

            return comments;
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Comment> GetComment(int id)
        {
            var comment = context.Comments
                .Include(c => c.MovieTheory)
                .SingleOrDefault(c => c.Id == id);
            if (comment == null)
                return NotFound();
            return comment;
        }

        [Route("{id}/theory")]
        [HttpGet]
        public ActionResult<Theory> GetTheoryOfComment(int id)
        {
            var comment = context.Comments
                .Include(c => c.MovieTheory)
                .SingleOrDefault(c => c.Id == id);
            if (comment == null)
                return NotFound();
            return comment.MovieTheory;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteComment(int id)
        {
            var comment = context.Comments.Find(id);
            if (comment == null)
                return NotFound();

            context.Comments.Remove(comment);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateComment([FromBody] Comment uComment)
        {
            var oComment = context.Comments.Find(uComment.Id);
            if (oComment == null)
                return NotFound();

            oComment.Writer = uComment.Writer;
            oComment.Text = uComment.Text;
            oComment.MovieTheory = uComment.MovieTheory;

            context.SaveChanges();
            return Ok(oComment);
        }
    }
}