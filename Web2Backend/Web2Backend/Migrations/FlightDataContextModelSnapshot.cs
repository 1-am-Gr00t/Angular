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

                    b.Property<string>("DestionationId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("FlightId", "DestionationId");

                    b.HasIndex("DestionationId");

                    b.ToTable("FlightDestinations");
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

                    b.ToTable("Flights");
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

            modelBuilder.Entity("Web2Backend.Model.SoldTicket", b =>
                {
                    b.Property<int>("TicketId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateSold")
                        .HasColumnType("datetime2");

                    b.Property<int>("TicketPrice")
                        .HasColumnType("int");

                    b.HasKey("TicketId");

                    b.ToTable("SoldTickets");
                });

            modelBuilder.Entity("Web2Backend.JoiningTableModels.FlightDestinations", b =>
                {
                    b.HasOne("Web2Backend.Model.Destination", "Destination")
                        .WithMany("FlightDestionations")
                        .HasForeignKey("DestionationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Web2Backend.Model.Flight", "Flight")
                        .WithMany("FlightDestionations")
                        .HasForeignKey("FlightId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Web2Backend.Model.Seat", b =>
                {
                    b.HasOne("Web2Backend.Model.Flight", "Flight")
                        .WithMany("Seats")
                        .HasForeignKey("FlightID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
