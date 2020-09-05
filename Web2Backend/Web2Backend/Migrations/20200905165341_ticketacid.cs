using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class ticketacid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SoldTickets_AirCompanies_AirCompanyId",
                table: "SoldTickets");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "SoldTickets",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SoldTickets_AirCompanies_AirCompanyId",
                table: "SoldTickets",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SoldTickets_AirCompanies_AirCompanyId",
                table: "SoldTickets");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "SoldTickets",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_SoldTickets_AirCompanies_AirCompanyId",
                table: "SoldTickets",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
