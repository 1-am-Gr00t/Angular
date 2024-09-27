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
    public class RACServicesController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public RACServicesController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/RACServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RACService>>> GetRACServices()
        {
            return await _context.RACServices.ToListAsync();
        }

        // GET: api/RACServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RACService>> GetRACService(int id)
        {
            var rACService = await _context.RACServices.FindAsync(id);

            if (rACService == null)
            {
                return NotFound();
            }

            return rACService;
        }

        // PUT: api/RACServices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRACService(int id, RACService rACService)
        {
            if (id != rACService.RACID)
            {
                return BadRequest();
            }

            _context.Entry(rACService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RACServiceExists(id))
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

        // POST: api/RACServices
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<RACService>> PostRACService(RACService rACService)
        {
            _context.RACServices.Add(rACService);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRACService", new { id = rACService.RACID }, rACService);
        }

        // DELETE: api/RACServices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RACService>> DeleteRACService(int id)
        {
            var rACService = await _context.RACServices.FindAsync(id);
            if (rACService == null)
            {
                return NotFound();
            }

            _context.RACServices.Remove(rACService);
            await _context.SaveChangesAsync();

            return rACService;
        }

        private bool RACServiceExists(int id)
        {
            return _context.RACServices.Any(e => e.RACID == id);
        }
    }
}
