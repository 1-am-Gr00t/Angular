using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.Model;

namespace Web2Backend.JoiningTableModels
{
    public class FlightDestinations
    {
        public int FlightId { get; set; }
        public string DestionationId { get; set; }
        public Flight Flight { get; set; }
        public Destination Destination { get; set; }
    }
}
