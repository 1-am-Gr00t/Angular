﻿using Microsoft.EntityFrameworkCore;
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
        public DbSet<FlightDestinations> FlightDestinations { get; set; }
        public DbSet<AirCompany> AirCompanies { get; set; }
        public DbSet<Luggage> Luggage { get; set; }
        public DbSet<Friends> Friends { get; set; }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<RegisteredUser> RegisteredUsers { get; set; }
        public DbSet<FlightAdmin> FlightAdmins { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Destination> Destinations { get; set; }
        public DbSet<SoldTicket> SoldTickets { get; set; }
        public DbSet<ServiceGrade> ServiceGrades { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<RACService> RACServices { get; set; }
        public DbSet<RACAdmin> RACAdmins { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Seat>().HasKey(s => new { s.SeatID, s.FlightID }); //pravi se kljuc od 2 polja
            modelBuilder.Entity<FlightAdmin>().HasKey(fa => new { fa.Email, fa.Password });
            modelBuilder.Entity<RegisteredUser>().HasKey(ru => new { ru.Email, ru.Password });
            modelBuilder.Entity<Friends>().HasKey(id => new { id.User1, id.User2 });
           

            //Mapping many-to-many relationship
            modelBuilder.Entity<FlightDestinations>()
                .HasKey(fd => new { fd.FlightId, fd.DestinationId });
            modelBuilder.Entity<FlightDestinations>()
                .HasOne(fd => fd.Flight)
                .WithMany(f => f.FlightDestinations)
                .HasForeignKey(fd => fd.FlightId);
            modelBuilder.Entity<FlightDestinations>()
                .HasOne(fd => fd.Destination)
                .WithMany(d => d.FlightDestinations)
                .HasForeignKey(fd => fd.DestinationId);
            
        }
    }
}
