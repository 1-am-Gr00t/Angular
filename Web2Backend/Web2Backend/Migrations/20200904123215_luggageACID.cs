using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class luggageACID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Luggage_AirCompanies_AirCompanyId",
                table: "Luggage");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "Luggage",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Luggage_AirCompanies_AirCompanyId",
                table: "Luggage",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Luggage_AirCompanies_AirCompanyId",
                table: "Luggage");

            migrationBuilder.AlterColumn<int>(
                name: "AirCompanyId",
                table: "Luggage",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Luggage_AirCompanies_AirCompanyId",
                table: "Luggage",
                column: "AirCompanyId",
                principalTable: "AirCompanies",
                principalColumn: "AirCompanyId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
