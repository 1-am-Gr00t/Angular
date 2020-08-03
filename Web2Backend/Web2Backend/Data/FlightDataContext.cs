using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Model;

namespace Web2Backend.Data
{
    public class FlightDataContext : DbContext
    {
        public FlightDataContext(DbContextOptions<FlightDataContext> options)
           : base(options)
        {
        }

        public DbSet<Flight> Flights { get; set; }
    }
}
