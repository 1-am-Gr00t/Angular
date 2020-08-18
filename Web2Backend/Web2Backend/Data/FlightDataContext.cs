using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Web2Backend.JoiningTableModels;
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
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Destination> Destinations { get; set; }
        public DbSet<SoldTicket> SoldTickets { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Seat>().HasKey(s => new { s.SeatID, s.FlightID }); //pravi se kljuc od 2 polja

            //Mapping many-to-many relationship
            modelBuilder.Entity<FlightDestinations>()
                .HasKey(fd => new { fd.FlightId, fd.DestionationId });
            modelBuilder.Entity<FlightDestinations>()
                .HasOne(fd => fd.Flight)
                .WithMany(f => f.FlightDestionations)
                .HasForeignKey(fd => fd.FlightId);
            modelBuilder.Entity<FlightDestinations>()
                .HasOne(fd => fd.Destination)
                .WithMany(d => d.FlightDestionations)
                .HasForeignKey(fd => fd.DestionationId);
            
        }
    }
}
