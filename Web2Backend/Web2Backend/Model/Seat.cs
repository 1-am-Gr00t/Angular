using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class Seat
    {        
        public String SeatID { get; set; }
        public SeatState SeatAvailability { get; set; }
        
        public int FlightID { get; set; }
        public virtual Flight Flight { get; set; }
    }
    public enum SeatState
    {
        Unavailable,
        Available,
        Reserved
    }
}
