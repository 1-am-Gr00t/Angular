using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class Flight
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int FlightID { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime LandingTime { get; set; }
        public TimeSpan TravelTime { get; set; }
        public int TravelLength { get; set; }
        public int TicketPrice { get; set; }
        public int NumberOfChangeovers { get; set; }
        //public List<string> ChageoverDests { get; set; }
    }
}
