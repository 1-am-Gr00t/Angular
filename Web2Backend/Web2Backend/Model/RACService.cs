using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class RACService
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int RACID { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        //public string[] Branches { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
        public virtual ICollection<RACAdmin> RACAdmins { get; set; }

        public RACService()
        {
            this.Vehicles = new HashSet<Vehicle>();
            this.RACAdmins = new HashSet<RACAdmin>();
        }


    }
}
