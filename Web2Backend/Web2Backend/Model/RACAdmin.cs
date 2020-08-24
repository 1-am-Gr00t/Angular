using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class RACAdmin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }
        public virtual RACService RAC { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }


        /*public RACAdmin()
        {
            this.Password = "changepassword";
        }*/
    }
}
