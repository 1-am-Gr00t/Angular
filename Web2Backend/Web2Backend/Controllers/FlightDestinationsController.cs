using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Web2Backend.Data;
using Web2Backend.JoiningTableModels;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightDestinationsController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public FlightDestinationsController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/FlightDestinations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FlightDestinations>>> GetFlightDestinations()
        {
            return await _context.FlightDestinations.ToListAsync();
        }

        // GET: api/FlightDestinations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FlightDestinations>> GetFlightDestinations(int id)
        {
            var flightDestinations = await _context.FlightDestinations.FindAsync(id);

            if (flightDestinations == null)
            {
                return NotFound();
            }

            return flightDestinations;
        }

        // PUT: api/FlightDestinations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlightDestinations(int id, FlightDestinations flightDestinations)
        {
            if (id != flightDestinations.FlightId)
            {
                return BadRequest();
            }

            _context.Entry(flightDestinations).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightDestinationsExists(id))
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

        // POST: api/FlightDestinations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FlightDestinations>> PostFlightDestinations(FlightDestinations flightDestinations)
        {
            _context.FlightDestinations.Add(flightDestinations);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FlightDestinationsExists(flightDestinations.FlightId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFlightDestinations", new { id = flightDestinations.FlightId }, flightDestinations);
        }

        // DELETE: api/FlightDestinations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FlightDestinations>> DeleteFlightDestinations(int id)
        {
            var flightDestinations = await _context.FlightDestinations.FindAsync(id);
            if (flightDestinations == null)
            {
                return NotFound();
            }

            _context.FlightDestinations.Remove(flightDestinations);
            await _context.SaveChangesAsync();

            return flightDestinations;
        }

        private bool FlightDestinationsExists(int id)
        {
            return _context.FlightDestinations.Any(e => e.FlightId == id);
        }
    }
}
