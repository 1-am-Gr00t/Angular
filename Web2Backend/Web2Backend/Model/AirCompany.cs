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
        public String Name { get; set; }

        public String Address { get; set; }
        public String PromoDescription { get; set; }

        public double MeanGrade { get; set; }
         
        //arrays: flightGrade, soldtickets, dests, flights, seats, luggage, admins
    }
}
