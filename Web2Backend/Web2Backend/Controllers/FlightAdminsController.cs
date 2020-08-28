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
    public class FlightAdminsController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public FlightAdminsController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/FlightAdmins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FlightAdmin>>> GetFlightAdmins()
        {
            return await _context.FlightAdmins.ToListAsync();
        }

        // GET: api/FlightAdmins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FlightAdmin>> GetFlightAdmin(string id)
        {
            var flightAdmin = await _context.FlightAdmins.FindAsync(id);

            if (flightAdmin == null)
            {
                return NotFound();
            }

            return flightAdmin;
        }

        // PUT: api/FlightAdmins/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlightAdmin(string id, FlightAdmin flightAdmin)
        {
            if (id != flightAdmin.Email)
            {
                return BadRequest();
            }

            _context.Entry(flightAdmin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightAdminExists(id))
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

        // POST: api/FlightAdmins
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FlightAdmin>> PostFlightAdmin(FlightAdmin flightAdmin)
        {
            _context.FlightAdmins.Add(flightAdmin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FlightAdminExists(flightAdmin.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFlightAdmin", new { id = flightAdmin.Email }, flightAdmin);
        }

        // DELETE: api/FlightAdmins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FlightAdmin>> DeleteFlightAdmin(string id)
        {
            var flightAdmin = await _context.FlightAdmins.FindAsync(id);
            if (flightAdmin == null)
            {
                return NotFound();
            }

            _context.FlightAdmins.Remove(flightAdmin);
            await _context.SaveChangesAsync();

            return flightAdmin;
        }

        private bool FlightAdminExists(string id)
        {
            return _context.FlightAdmins.Any(e => e.Email == id);
        }
    }
}
