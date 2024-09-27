using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class ServiceGrade
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GradeId { get; set; }
        public int Grade { get; set; }
        [AllowNull]
        public Flight Flight { get; set; }
        [AllowNull]
        public AirCompany AirCompany { get; set; }
    }
}
