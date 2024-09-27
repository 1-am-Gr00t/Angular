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
    public class SeatsController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public SeatsController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/Seats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Seat>>> GetSeats()
        {
            return await _context.Seats.ToListAsync();
        }

        // GET: api/Seats/5
        [HttpGet("{id1}+{id2}")]
        public async Task<ActionResult<Seat>> GetSeat(string id1, int id2)
        {
            var seat = await _context.Seats.FindAsync(id1, id2);

            if (seat == null)
            {
                return NotFound();
            }

            return seat;
        }

        // PUT: api/Seats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id1}+{id2}")]
        public async Task<IActionResult> PutSeat(string id1, int id2, Seat seat)
        {
            if (id1 != seat.SeatID)
            {
                return BadRequest();
            }
            if(id2 != seat.FlightID)
            {
                return BadRequest();
            }

            _context.Entry(seat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeatExists(id1, id2))
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

        // POST: api/Seats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Seat>> PostSeat(Seat seat)
        {
            _context.Seats.Add(seat);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SeatExists(seat.SeatID, seat.FlightID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSeat", new { id = seat.SeatID + "+" + seat.FlightID }, seat);
        }

        // DELETE: api/Seats/5
        [HttpDelete("{id1}+{id2}")]
        public async Task<ActionResult<Seat>> DeleteSeat(string id1, int id2)
        {
            var seat = await _context.Seats.FindAsync(id1,id2);
            if (seat == null)
            {
                return NotFound();
            }

            _context.Seats.Remove(seat);
            await _context.SaveChangesAsync();

            return seat;
        }

        private bool SeatExists(string id1, int id2)
        {
            return _context.Seats.Any(e => e.SeatID == id1 && e.FlightID == id2);
        }
    }
}
