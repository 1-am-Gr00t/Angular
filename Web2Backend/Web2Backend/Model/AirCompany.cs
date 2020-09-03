using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class AirCompany
    {
        [Key]
        public int AirCompanyId { get; set; }
        public String Name { get; set; }

        public String Address { get; set; }
        public String PromoDescription { get; set; }

        public double MeanGrade { get; set; }

        public ICollection<FlightAdmin> FlightAdmins { get; set; }
        public ICollection<SoldTicket> SoldTickets { get; set; }
        public ICollection<Flight> Flights { get; set; }
        public ICollection<Luggage> Luggage { get; set; }
        public AirCompany()
        {
            this.FlightAdmins = new HashSet<FlightAdmin>();
            this.SoldTickets = new HashSet<SoldTicket>();
            this.Flights = new HashSet<Flight>();
            this.Luggage = new HashSet<Luggage>();

        }
        //arrays: flightGrade
    }
}
