using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class DateReserved
    {
        public int VehicleID { get; set; }

        public int VehicleRACID { get; set; }
        public virtual Vehicle Vehicle { get; set; }

        public DateTime from;
        public DateTime to;
    }
}
