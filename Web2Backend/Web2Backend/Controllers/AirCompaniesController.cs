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
    public class AirCompaniesController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public AirCompaniesController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/AirCompanies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AirCompany>>> GetAirCompanies()
        {
            return await _context.AirCompanies.ToListAsync();
        }

        // GET: api/AirCompanies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AirCompany>> GetAirCompany(int id)
        {
            var airCompany = await _context.AirCompanies.FindAsync(id);

            if (airCompany == null)
            {
                return NotFound();
            }

            return airCompany;
        }

        // PUT: api/AirCompanies/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAirCompany(int id, AirCompany airCompany)
        {
            if (id != airCompany.AirCompanyId)
            {
                return BadRequest();
            }

            _context.Entry(airCompany).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirCompanyExists(id))
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

        // POST: api/AirCompanies
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AirCompany>> PostAirCompany(AirCompany airCompany)
        {
            _context.AirCompanies.Add(airCompany);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAirCompany", new { id = airCompany.AirCompanyId }, airCompany);
        }

        // DELETE: api/AirCompanies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AirCompany>> DeleteAirCompany(int id)
        {
            var airCompany = await _context.AirCompanies.FindAsync(id);
            if (airCompany == null)
            {
                return NotFound();
            }

            _context.AirCompanies.Remove(airCompany);
            await _context.SaveChangesAsync();

            return airCompany;
        }

        private bool AirCompanyExists(int id)
        {
            return _context.AirCompanies.Any(e => e.AirCompanyId == id);
        }
    }
}
