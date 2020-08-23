using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class AddRACAdmins : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RACAdmins",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false),
                    RACID = table.Column<int>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RACAdmins", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RACAdmins_RACServices_RACID",
                        column: x => x.RACID,
                        principalTable: "RACServices",
                        principalColumn: "RACID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RACAdmins_RACID",
                table: "RACAdmins",
                column: "RACID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RACAdmins");
        }
    }
}
