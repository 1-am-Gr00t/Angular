using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class AddVehicles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RACID = table.Column<int>(nullable: false),
                    Naziv = table.Column<string>(nullable: true),
                    Marka = table.Column<string>(nullable: true),
                    RegBroj = table.Column<int>(nullable: false),
                    GodinaProizvodnje = table.Column<int>(nullable: false),
                    TipVozila = table.Column<string>(nullable: true),
                    ProsecnaOcena = table.Column<double>(nullable: false),
                    CenaZaDan = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vehicles");
        }
    }
}
