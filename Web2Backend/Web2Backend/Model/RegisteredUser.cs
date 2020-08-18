using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class RegisteredUser
    {
        [Key]
        [Column(Order = 1)]
        public String Email { get; set; }
        [Key]
        [Column(Order = 2)]
        public String Password { get; set; }

        public String Name { get; set; }
        public String LastName { get; set; }
        public String City { get; set; }
        public String PhoneNumber { get; set; }

        //FriendList Array
    }
}
