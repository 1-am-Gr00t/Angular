﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.JoiningTableModels;

namespace Web2Backend.Model
{
    public class Flight
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int FlightID { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime LandingTime { get; set; }
        public string TravelTime { get; set; }
        public int TravelLength { get; set; }
        public int TicketPrice { get; set; }
        public int NumberOfChangeovers { get; set; }

        public bool TicketDisctount { get; set; }
        [AllowNull]
        public int NewTicketPrice { get; set; }

        public virtual ICollection<Seat> Seats { get; set; }
        public virtual ICollection<FlightDestinations> FlightDestionations { get; set; }//Presedanja

        public Flight()
        {
            this.Seats = new HashSet<Seat>();
            this.FlightDestionations = new HashSet<FlightDestinations>();
        }
    }
}