using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class AddRACService : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RACServices",
                columns: table => new
                {
                    RACID = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RACServices", x => x.RACID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_RACID",
                table: "Vehicles",
                column: "RACID");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_RACServices_RACID",
                table: "Vehicles",
                column: "RACID",
                principalTable: "RACServices",
                principalColumn: "RACID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_RACServices_RACID",
                table: "Vehicles");

            migrationBuilder.DropTable(
                name: "RACServices");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_RACID",
                table: "Vehicles");
        }
    }
}
