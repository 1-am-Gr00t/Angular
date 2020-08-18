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
    public class SoldTicketsController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public SoldTicketsController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/SoldTickets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SoldTicket>>> GetSoldTickets()
        {
            return await _context.SoldTickets.ToListAsync();
        }

        // GET: api/SoldTickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SoldTicket>> GetSoldTicket(int id)
        {
            var soldTicket = await _context.SoldTickets.FindAsync(id);

            if (soldTicket == null)
            {
                return NotFound();
            }

            return soldTicket;
        }

        // PUT: api/SoldTickets/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSoldTicket(int id, SoldTicket soldTicket)
        {
            if (id != soldTicket.TicketId)
            {
                return BadRequest();
            }

            _context.Entry(soldTicket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SoldTicketExists(id))
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

        // POST: api/SoldTickets
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SoldTicket>> PostSoldTicket(SoldTicket soldTicket)
        {
            _context.SoldTickets.Add(soldTicket);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSoldTicket", new { id = soldTicket.TicketId }, soldTicket);
        }

        // DELETE: api/SoldTickets/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SoldTicket>> DeleteSoldTicket(int id)
        {
            var soldTicket = await _context.SoldTickets.FindAsync(id);
            if (soldTicket == null)
            {
                return NotFound();
            }

            _context.SoldTickets.Remove(soldTicket);
            await _context.SaveChangesAsync();

            return soldTicket;
        }

        private bool SoldTicketExists(int id)
        {
            return _context.SoldTickets.Any(e => e.TicketId == id);
        }
    }
}
