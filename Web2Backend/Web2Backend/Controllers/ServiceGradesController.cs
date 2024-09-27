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
    public class ServiceGradesController : ControllerBase
    {
        private readonly FlightDataContext _context;

        public ServiceGradesController(FlightDataContext context)
        {
            _context = context;
        }

        // GET: api/ServiceGrades
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceGrade>>> GetServiceGrades()
        {
            return await _context.ServiceGrades.ToListAsync();
        }

        // GET: api/ServiceGrades/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceGrade>> GetServiceGrade(int id)
        {
            var serviceGrade = await _context.ServiceGrades.FindAsync(id);

            if (serviceGrade == null)
            {
                return NotFound();
            }

            return serviceGrade;
        }

        // PUT: api/ServiceGrades/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServiceGrade(int id, ServiceGrade serviceGrade)
        {
            if (id != serviceGrade.GradeId)
            {
                return BadRequest();
            }

            _context.Entry(serviceGrade).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceGradeExists(id))
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

        // POST: api/ServiceGrades
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ServiceGrade>> PostServiceGrade(ServiceGrade serviceGrade)
        {
            _context.ServiceGrades.Add(serviceGrade);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServiceGrade", new { id = serviceGrade.GradeId }, serviceGrade);
        }

        // DELETE: api/ServiceGrades/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceGrade>> DeleteServiceGrade(int id)
        {
            var serviceGrade = await _context.ServiceGrades.FindAsync(id);
            if (serviceGrade == null)
            {
                return NotFound();
            }

            _context.ServiceGrades.Remove(serviceGrade);
            await _context.SaveChangesAsync();

            return serviceGrade;
        }

        private bool ServiceGradeExists(int id)
        {
            return _context.ServiceGrades.Any(e => e.GradeId == id);
        }
    }
}
