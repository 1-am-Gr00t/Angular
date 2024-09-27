using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Web2Backend.JoiningTableModels;

namespace Web2Backend.Model
{
    public class Destination
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String Dest { get; set; }//Destination

        public virtual ICollection<FlightDestinations> FlightDestinations { get; set; }
        public Destination()
        {
            this.FlightDestinations = new HashSet<FlightDestinations>();
        }
    }
}
