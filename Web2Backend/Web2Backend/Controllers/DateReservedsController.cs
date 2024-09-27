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
    public class DateReservedsController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public DateReservedsController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/DateReserveds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DateReserved>>> GetDatesReserved()
        {
            return await _context.DatesReserved.ToListAsync();
        }

        // GET: api/DateReserveds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DateReserved>> GetDateReserved(int id)
        {
            var dateReserved = await _context.DatesReserved.FindAsync(id);

            if (dateReserved == null)
            {
                return NotFound();
            }

            return dateReserved;
        }

        // PUT: api/DateReserveds/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDateReserved(int id, DateReserved dateReserved)
        {
            if (id != dateReserved.VehicleID)
            {
                return BadRequest();
            }

            _context.Entry(dateReserved).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DateReservedExists(id))
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

        // POST: api/DateReserveds
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DateReserved>> PostDateReserved(DateReserved dateReserved)
        {
            _context.DatesReserved.Add(dateReserved);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DateReservedExists(dateReserved.VehicleID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDateReserved", new { id = dateReserved.VehicleID }, dateReserved);
        }

        // DELETE: api/DateReserveds/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DateReserved>> DeleteDateReserved(int id)
        {
            var dateReserved = await _context.DatesReserved.FindAsync(id);
            if (dateReserved == null)
            {
                return NotFound();
            }

            _context.DatesReserved.Remove(dateReserved);
            await _context.SaveChangesAsync();

            return dateReserved;
        }

        private bool DateReservedExists(int id)
        {
            return _context.DatesReserved.Any(e => e.VehicleID == id);
        }
    }
}
