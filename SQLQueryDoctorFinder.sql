create database demoDoctorFinder
use demoDoctorFinder

create table UserType
(
	userTypeID varchar(10) primary key not null,
	userName nvarchar(30) not null
)

create table Specialties
(
	specialtyID varchar(10) primary key not null,
	specialty nvarchar(30) not null
)

create table UserAccounts
(
	userID varchar(10) primary key not null,
	email varchar(30) not null,
	password varchar(30) not null,
	name nvarchar(30) not null,
	userTypeID varchar(10),
	birthday date ,
	avatar image ,
	phoneNumber varchar(10) not null,
	addess nvarchar(30) not null,
	gender bit not null,
	specialtyID varchar(10),
	constraint fk_tID
	foreign key (userTypeID)
	references UserType(userTypeID),
	constraint fk_sID
	foreign key (specialtyID)
	references Specialties(specialtyID)
)

create table DetailAppointment
(
	appointmentID varchar(10) primary key not null,
	doctorID varchar(10) not null,
	patientID varchar(10) not null,
	appointmentDate datetime not null,
	constraint fk_dID
	foreign key (doctorID)
	references UserAccounts(userID),
	constraint fk_pID
	foreign key (patientID)
	references UserAccounts(userID)
)