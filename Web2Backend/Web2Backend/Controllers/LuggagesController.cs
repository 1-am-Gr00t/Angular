using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web2Backend.Data;
using Web2Backend.Model;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LuggagesController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public LuggagesController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/Luggages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Luggage>>> GetLuggage()
        {
            return await _context.Luggage.ToListAsync();
        }

        // GET: api/Luggages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Luggage>> GetLuggage(int id)
        {
            var luggage = await _context.Luggage.FindAsync(id);

            if (luggage == null)
            {
                return NotFound();
            }

            return luggage;
        }

        // PUT: api/Luggages/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLuggage(int id, Luggage luggage)
        {
            if (id != luggage.LuggageID)
            {
                return BadRequest();
            }

            _context.Entry(luggage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LuggageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Luggages
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Luggage>> PostLuggage(Luggage luggage)
        {
            _context.Luggage.Add(luggage);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LuggageExists(luggage.LuggageID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLuggage", new { id = luggage.LuggageID }, luggage);
        }

        // DELETE: api/Luggages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Luggage>> DeleteLuggage(int id)
        {
            var luggage = await _context.Luggage.FindAsync(id);
            if (luggage == null)
            {
                return NotFound();
            }

            _context.Luggage.Remove(luggage);
            await _context.SaveChangesAsync();

            return luggage;
        }

        private bool LuggageExists(int id)
        {
            return _context.Luggage.Any(e => e.LuggageID == id);
        }
    }
}
