using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class addKeysUserAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RegisteredUsers_RegisteredUsers_RegisteredUserEmail",
                table: "RegisteredUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RegisteredUsers",
                table: "RegisteredUsers");

            migrationBuilder.DropIndex(
                name: "IX_RegisteredUsers_RegisteredUserEmail",
                table: "RegisteredUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FlightAdmins",
                table: "FlightAdmins");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "RegisteredUsers",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegisteredUserPassword",
                table: "RegisteredUsers",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "FlightAdmins",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RegisteredUsers",
                table: "RegisteredUsers",
                columns: new[] { "Email", "Password" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_FlightAdmins",
                table: "FlightAdmins",
                columns: new[] { "Email", "Password" });

            migrationBuilder.CreateIndex(
                name: "IX_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                table: "RegisteredUsers",
                columns: new[] { "RegisteredUserEmail", "RegisteredUserPassword" });

            migrationBuilder.AddForeignKey(
                name: "FK_RegisteredUsers_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                table: "RegisteredUsers",
                columns: new[] { "RegisteredUserEmail", "RegisteredUserPassword" },
                principalTable: "RegisteredUsers",
                principalColumns: new[] { "Email", "Password" },
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RegisteredUsers_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                table: "RegisteredUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RegisteredUsers",
                table: "RegisteredUsers");

            migrationBuilder.DropIndex(
                name: "IX_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                table: "RegisteredUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FlightAdmins",
                table: "FlightAdmins");

            migrationBuilder.DropColumn(
                name: "RegisteredUserPassword",
                table: "RegisteredUsers");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "RegisteredUsers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "FlightAdmins",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
                name: "PK_RegisteredUsers",
                table: "RegisteredUsers",
                column: "Email");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FlightAdmins",
                table: "FlightAdmins",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_RegisteredUsers_RegisteredUserEmail",
                table: "RegisteredUsers",
                column: "RegisteredUserEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_RegisteredUsers_RegisteredUsers_RegisteredUserEmail",
                table: "RegisteredUsers",
                column: "RegisteredUserEmail",
                principalTable: "RegisteredUsers",
                principalColumn: "Email",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
