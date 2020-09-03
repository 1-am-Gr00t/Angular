using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class merge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "RACAdmins");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "RACAdmins",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "RACAdmins");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "RACAdmins",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
