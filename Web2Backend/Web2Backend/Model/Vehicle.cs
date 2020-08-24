using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web2Backend.Model
{
    public class Vehicle
    {
        public int ID { get; set; }

        public int RACID { get; set; }
        public virtual RACService RAC { get; set; }

        public string Naziv { get; set; }
        public string Marka { get; set; }
        public int RegBroj { get; set; }
        public int GodinaProizvodnje { get; set; }
        public string TipVozila { get; set; }
        public double ProsecnaOcena { get; set; }
        //public string[] ZauzetostVozila { get; set; }
        public int CenaZaDan { get; set; }


    }
}
