﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web2Backend.Data;

namespace Web2Backend.Migrations
{
    [DbContext(typeof(FlightDataContext))]
    partial class FlightDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Web2Backend.JoiningTableModels.FlightDestinations", b =>
                {
                    b.Property<int>("FlightId")
                        .HasColumnType("int");

                    b.Property<string>("DestinationId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("FlightId", "DestinationId");

                    b.HasIndex("DestinationId");

                    b.ToTable("FlightDestinations");
                });

            modelBuilder.Entity("Web2Backend.JoiningTableModels.Friends", b =>
                {
                    b.Property<int>("User1")
                        .HasColumnType("int");

                    b.Property<int>("User2")
                        .HasColumnType("int");

                    b.Property<int>("FriendStatus")
                        .HasColumnType("int");

                    b.Property<int>("UserPerformedAction")
                        .HasColumnType("int");

                    b.HasKey("User1", "User2");

                    b.ToTable("Friends");
                });

            modelBuilder.Entity("Web2Backend.Model.AirCompany", b =>
                {
                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("MeanGrade")
                        .HasColumnType("float");

                    b.Property<string>("PromoDescription")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Name");

                    b.ToTable("AirCompanies");
                });

            modelBuilder.Entity("Web2Backend.Model.DateReserved", b =>
                {
                    b.Property<int>("VehicleID")
                        .HasColumnType("int");

                    b.Property<int>("VehicleRACID")
                        .HasColumnType("int");

                    b.Property<int>("VehicleID1")
                        .HasColumnType("int");

                    b.Property<int>("VehicleRACID1")
                        .HasColumnType("int");

                    b.HasKey("VehicleID", "VehicleRACID");

                    b.HasIndex("VehicleID1", "VehicleRACID1");

                    b.ToTable("DatesReserved");
                });

            modelBuilder.Entity("Web2Backend.Model.Destination", b =>
                {
                    b.Property<string>("Dest")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Dest");

                    b.ToTable("Destinations");
                });

            modelBuilder.Entity("Web2Backend.Model.Flight", b =>
                {
                    b.Property<int>("FlightID")
                        .HasColumnType("int");

                    b.Property<string>("AirCompanyName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DepartureTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("LandingTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("NewTicketPrice")
                        .HasColumnType("int");

                    b.Property<int>("NumberOfChangeovers")
                        .HasColumnType("int");

                    b.Property<bool>("TicketDisctount")
                        .HasColumnType("bit");

                    b.Property<int>("TicketPrice")
                        .HasColumnType("int");

                    b.Property<int>("TravelLength")
                        .HasColumnType("int");

                    b.Property<string>("TravelTime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FlightID");

                    b.HasIndex("AirCompanyName");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("Web2Backend.Model.FlightAdmin", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AirCompanyName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Email", "Password");

                    b.HasIndex("AirCompanyName");

                    b.ToTable("FlightAdmins");
                });

            modelBuilder.Entity("Web2Backend.Model.Luggage", b =>
                {
                    b.Property<int>("LuggageID")
                        .HasColumnType("int");

                    b.Property<string>("AirCompanyName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LuggageDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("LuggagePrice")
                        .HasColumnType("float");

                    b.HasKey("LuggageID");

                    b.HasIndex("AirCompanyName");

                    b.ToTable("Luggage");
                });

            modelBuilder.Entity("Web2Backend.Model.RACAdmin", b =>
                {
                    b.Property<int>("ID")
                        .HasColumnType("int");

                    b.Property<int>("RACID")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID", "RACID");

                    b.HasIndex("RACID");

                    b.ToTable("RACAdmins");
                });

            modelBuilder.Entity("Web2Backend.Model.RACService", b =>
                {
                    b.Property<int>("RACID")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RACID");

                    b.ToTable("RACServices");
                });

            modelBuilder.Entity("Web2Backend.Model.RegisteredUser", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegisteredUserEmail")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RegisteredUserPassword")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Email", "Password");

                    b.HasIndex("RegisteredUserEmail", "RegisteredUserPassword");

                    b.ToTable("RegisteredUsers");
                });

            modelBuilder.Entity("Web2Backend.Model.Seat", b =>
                {
                    b.Property<string>("SeatID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("FlightID")
                        .HasColumnType("int");

                    b.Property<int>("SeatAvailability")
                        .HasColumnType("int");

                    b.HasKey("SeatID", "FlightID");

                    b.HasIndex("FlightID");

                    b.ToTable("Seats");
                });

            modelBuilder.Entity("Web2Backend.Model.ServiceGrade", b =>
                {
                    b.Property<int>("GradeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AirCompanyName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("FlightID")
                        .HasColumnType("int");

                    b.Property<int>("Grade")
                        .HasColumnType("int");

                    b.HasKey("GradeId");

                    b.HasIndex("AirCompanyName");

                    b.HasIndex("FlightID");

                    b.ToTable("ServiceGrades");
                });

            modelBuilder.Entity("Web2Backend.Model.SoldTicket", b =>
                {
                    b.Property<int>("TicketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AirCompanyName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DateSold")
                        .HasColumnType("datetime2");

                    b.Property<int>("TicketPrice")
                        .HasColumnType("int");

                    b.HasKey("TicketId");

                    b.HasIndex("AirCompanyName");

                    b.ToTable("SoldTickets");
                });

            modelBuilder.Entity("Web2Backend.Model.Vehicle", b =>
                {
                    b.Property<int>("ID")
                        .HasColumnType("int");

                    b.Property<int>("RACID")
                        .HasColumnType("int");

                    b.Property<int>("CenaZaDan")
                        .HasColumnType("int");

                    b.Property<int>("GodinaProizvodnje")
                        .HasColumnType("int");

                    b.Property<string>("Marka")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("ProsecnaOcena")
                        .HasColumnType("float");

                    b.Property<int>("RegBroj")
                        .HasColumnType("int");

                    b.Property<string>("TipVozila")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID", "RACID");

                    b.HasIndex("RACID");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("Web2Backend.JoiningTableModels.FlightDestinations", b =>
                {
                    b.HasOne("Web2Backend.Model.Destination", "Destination")
                        .WithMany("FlightDestinations")
                        .HasForeignKey("DestinationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Backend.Model.Flight", "Flight")
                        .WithMany("FlightDestinations")
                        .HasForeignKey("FlightId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2Backend.Model.DateReserved", b =>
                {
                    b.HasOne("Web2Backend.Model.Vehicle", "Vehicle")
                        .WithMany("DatesReserved")
                        .HasForeignKey("VehicleID1", "VehicleRACID1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2Backend.Model.Flight", b =>
                {
                    b.HasOne("Web2Backend.Model.AirCompany", "AirCompany")
                        .WithMany("Flights")
                        .HasForeignKey("AirCompanyName");
                });

            modelBuilder.Entity("Web2Backend.Model.FlightAdmin", b =>
                {
                    b.HasOne("Web2Backend.Model.AirCompany", "AirCompany")
                        .WithMany("FlightAdmins")
                        .HasForeignKey("AirCompanyName");
                });

            modelBuilder.Entity("Web2Backend.Model.Luggage", b =>
                {
                    b.HasOne("Web2Backend.Model.AirCompany", "AirCompany")
                        .WithMany("Luggage")
                        .HasForeignKey("AirCompanyName");
                });

            modelBuilder.Entity("Web2Backend.Model.RACAdmin", b =>
                {
                    b.HasOne("Web2Backend.Model.RACService", "RAC")
                        .WithMany("RACAdmins")
                        .HasForeignKey("RACID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2Backend.Model.RegisteredUser", b =>
                {
                    b.HasOne("Web2Backend.Model.RegisteredUser", null)
                        .WithMany("Friends")
                        .HasForeignKey("RegisteredUserEmail", "RegisteredUserPassword");
                });

            modelBuilder.Entity("Web2Backend.Model.Seat", b =>
                {
                    b.HasOne("Web2Backend.Model.Flight", "Flight")
                        .WithMany("Seats")
                        .HasForeignKey("FlightID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2Backend.Model.ServiceGrade", b =>
                {
                    b.HasOne("Web2Backend.Model.AirCompany", "AirCompany")
                        .WithMany()
                        .HasForeignKey("AirCompanyName");

                    b.HasOne("Web2Backend.Model.Flight", "Flight")
                        .WithMany("ServiceGrades")
                        .HasForeignKey("FlightID");
                });

            modelBuilder.Entity("Web2Backend.Model.SoldTicket", b =>
                {
                    b.HasOne("Web2Backend.Model.AirCompany", "AirCompany")
                        .WithMany("SoldTickets")
                        .HasForeignKey("AirCompanyName");
                });

            modelBuilder.Entity("Web2Backend.Model.Vehicle", b =>
                {
                    b.HasOne("Web2Backend.Model.RACService", "RAC")
                        .WithMany("Vehicles")
                        .HasForeignKey("RACID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
