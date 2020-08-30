using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Web2Backend.Migrations
{
    public partial class Relations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AirCompanies",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    PromoDescription = table.Column<string>(nullable: true),
                    MeanGrade = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AirCompanies", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Destinations",
                columns: table => new
                {
                    Dest = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinations", x => x.Dest);
                });

            migrationBuilder.CreateTable(
                name: "Friends",
                columns: table => new
                {
                    User1 = table.Column<int>(nullable: false),
                    User2 = table.Column<int>(nullable: false),
                    FriendStatus = table.Column<int>(nullable: false),
                    UserPerformedAction = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friends", x => new { x.User1, x.User2 });
                });

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

            migrationBuilder.CreateTable(
                name: "RegisteredUsers",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    RegisteredUserEmail = table.Column<string>(nullable: true),
                    RegisteredUserPassword = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisteredUsers", x => new { x.Email, x.Password });
                    table.ForeignKey(
                        name: "FK_RegisteredUsers_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                        columns: x => new { x.RegisteredUserEmail, x.RegisteredUserPassword },
                        principalTable: "RegisteredUsers",
                        principalColumns: new[] { "Email", "Password" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FlightAdmins",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    AirCompanyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightAdmins", x => new { x.Email, x.Password });
                    table.ForeignKey(
                        name: "FK_FlightAdmins_AirCompanies_AirCompanyName",
                        column: x => x.AirCompanyName,
                        principalTable: "AirCompanies",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Flights",
                columns: table => new
                {
                    FlightID = table.Column<int>(nullable: false),
                    DepartureTime = table.Column<DateTime>(nullable: false),
                    LandingTime = table.Column<DateTime>(nullable: false),
                    TravelTime = table.Column<string>(nullable: true),
                    TravelLength = table.Column<int>(nullable: false),
                    TicketPrice = table.Column<int>(nullable: false),
                    NumberOfChangeovers = table.Column<int>(nullable: false),
                    TicketDisctount = table.Column<bool>(nullable: false),
                    NewTicketPrice = table.Column<int>(nullable: false),
                    AirCompanyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flights", x => x.FlightID);
                    table.ForeignKey(
                        name: "FK_Flights_AirCompanies_AirCompanyName",
                        column: x => x.AirCompanyName,
                        principalTable: "AirCompanies",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Luggage",
                columns: table => new
                {
                    LuggageID = table.Column<int>(nullable: false),
                    LuggagePrice = table.Column<double>(nullable: false),
                    LuggageDescription = table.Column<string>(nullable: true),
                    AirCompanyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Luggage", x => x.LuggageID);
                    table.ForeignKey(
                        name: "FK_Luggage_AirCompanies_AirCompanyName",
                        column: x => x.AirCompanyName,
                        principalTable: "AirCompanies",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SoldTickets",
                columns: table => new
                {
                    TicketId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateSold = table.Column<DateTime>(nullable: false),
                    TicketPrice = table.Column<int>(nullable: false),
                    AirCompanyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoldTickets", x => x.TicketId);
                    table.ForeignKey(
                        name: "FK_SoldTickets_AirCompanies_AirCompanyName",
                        column: x => x.AirCompanyName,
                        principalTable: "AirCompanies",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RACAdmins",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false),
                    RACID = table.Column<int>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RACAdmins", x => new { x.ID, x.RACID });
                    table.ForeignKey(
                        name: "FK_RACAdmins_RACServices_RACID",
                        column: x => x.RACID,
                        principalTable: "RACServices",
                        principalColumn: "RACID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false),
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
                    table.PrimaryKey("PK_Vehicles", x => new { x.ID, x.RACID });
                    table.ForeignKey(
                        name: "FK_Vehicles_RACServices_RACID",
                        column: x => x.RACID,
                        principalTable: "RACServices",
                        principalColumn: "RACID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlightDestinations",
                columns: table => new
                {
                    FlightId = table.Column<int>(nullable: false),
                    DestinationId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightDestinations", x => new { x.FlightId, x.DestinationId });
                    table.ForeignKey(
                        name: "FK_FlightDestinations_Destinations_DestinationId",
                        column: x => x.DestinationId,
                        principalTable: "Destinations",
                        principalColumn: "Dest",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FlightDestinations_Flights_FlightId",
                        column: x => x.FlightId,
                        principalTable: "Flights",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Seats",
                columns: table => new
                {
                    SeatID = table.Column<string>(nullable: false),
                    FlightID = table.Column<int>(nullable: false),
                    SeatAvailability = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seats", x => new { x.SeatID, x.FlightID });
                    table.ForeignKey(
                        name: "FK_Seats_Flights_FlightID",
                        column: x => x.FlightID,
                        principalTable: "Flights",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceGrades",
                columns: table => new
                {
                    GradeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Grade = table.Column<int>(nullable: false),
                    FlightID = table.Column<int>(nullable: true),
                    AirCompanyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceGrades", x => x.GradeId);
                    table.ForeignKey(
                        name: "FK_ServiceGrades_AirCompanies_AirCompanyName",
                        column: x => x.AirCompanyName,
                        principalTable: "AirCompanies",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ServiceGrades_Flights_FlightID",
                        column: x => x.FlightID,
                        principalTable: "Flights",
                        principalColumn: "FlightID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DatesReserved",
                columns: table => new
                {
                    VehicleID = table.Column<int>(nullable: false),
                    VehicleRACID = table.Column<int>(nullable: false),
                    VehicleID1 = table.Column<int>(nullable: false),
                    VehicleRACID1 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DatesReserved", x => new { x.VehicleID, x.VehicleRACID });
                    table.ForeignKey(
                        name: "FK_DatesReserved_Vehicles_VehicleID1_VehicleRACID1",
                        columns: x => new { x.VehicleID1, x.VehicleRACID1 },
                        principalTable: "Vehicles",
                        principalColumns: new[] { "ID", "RACID" },
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DatesReserved_VehicleID1_VehicleRACID1",
                table: "DatesReserved",
                columns: new[] { "VehicleID1", "VehicleRACID1" });

            migrationBuilder.CreateIndex(
                name: "IX_FlightAdmins_AirCompanyName",
                table: "FlightAdmins",
                column: "AirCompanyName");

            migrationBuilder.CreateIndex(
                name: "IX_FlightDestinations_DestinationId",
                table: "FlightDestinations",
                column: "DestinationId");

            migrationBuilder.CreateIndex(
                name: "IX_Flights_AirCompanyName",
                table: "Flights",
                column: "AirCompanyName");

            migrationBuilder.CreateIndex(
                name: "IX_Luggage_AirCompanyName",
                table: "Luggage",
                column: "AirCompanyName");

            migrationBuilder.CreateIndex(
                name: "IX_RACAdmins_RACID",
                table: "RACAdmins",
                column: "RACID");

            migrationBuilder.CreateIndex(
                name: "IX_RegisteredUsers_RegisteredUserEmail_RegisteredUserPassword",
                table: "RegisteredUsers",
                columns: new[] { "RegisteredUserEmail", "RegisteredUserPassword" });

            migrationBuilder.CreateIndex(
                name: "IX_Seats_FlightID",
                table: "Seats",
                column: "FlightID");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceGrades_AirCompanyName",
                table: "ServiceGrades",
                column: "AirCompanyName");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceGrades_FlightID",
                table: "ServiceGrades",
                column: "FlightID");

            migrationBuilder.CreateIndex(
                name: "IX_SoldTickets_AirCompanyName",
                table: "SoldTickets",
                column: "AirCompanyName");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_RACID",
                table: "Vehicles",
                column: "RACID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DatesReserved");

            migrationBuilder.DropTable(
                name: "FlightAdmins");

            migrationBuilder.DropTable(
                name: "FlightDestinations");

            migrationBuilder.DropTable(
                name: "Friends");

            migrationBuilder.DropTable(
                name: "Luggage");

            migrationBuilder.DropTable(
                name: "RACAdmins");

            migrationBuilder.DropTable(
                name: "RegisteredUsers");

            migrationBuilder.DropTable(
                name: "Seats");

            migrationBuilder.DropTable(
                name: "ServiceGrades");

            migrationBuilder.DropTable(
                name: "SoldTickets");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "Destinations");

            migrationBuilder.DropTable(
                name: "Flights");

            migrationBuilder.DropTable(
                name: "RACServices");

            migrationBuilder.DropTable(
                name: "AirCompanies");
        }
    }
}
