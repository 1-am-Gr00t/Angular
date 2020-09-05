using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class fkacid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flights_AirCompanies_AirCompanyId",
                table: "Flights");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "Flights",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Flights_AirCompanies_AirCompanyId",
                table: "Flights",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flights_AirCompanies_AirCompanyId",
                table: "Flights");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "Flights",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Flights_AirCompanies_AirCompanyId",
                table: "Flights",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
