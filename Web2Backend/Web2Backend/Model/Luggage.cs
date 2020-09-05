using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class Luggage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LuggageID { get; set; }

        public double LuggagePrice { get; set; }
        public String LuggageDescription { get; set; }

        public int AirCompanyId { get; set; }
        public AirCompany AirCompany { get; set; }

    }
}
