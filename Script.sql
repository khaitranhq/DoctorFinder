create database DoctorFinder;
use DoctorFinder;

create table UserTypes (
	userTypeID int not null identity(1,1),
	userTypeName nvarchar(10),
	
	primary key(userTypeID)
);

create table Specialties (
	specialtyID int not null identity(1,1),
	specialtyName nvarchar(5),
	
	primary key(specialtyID),
);

create table UserAccounts (
	userID int not null identity(1,1),
	userTypeID int not null,
	email nvarchar(255) not null,
	password nvarchar(255) not null,
	name nvarchar(255),
	birthday datetime,
	avatar image,
	phoneNumber Bigint not null,
	address nvarchar(255),
	gender Bit,
	specialtyID int,
	
	primary key(userID),
	foreign key(userTypeID) references UserTypes(userTypeID),
	foreign key(specialtyID) references Specialties(specialtyID)
);

create table DetailAppointment (
	appointmentID int not null identity(1, 1),
	doctorID int not null,
	patientID int not null,
	appointmentDate datetime not null,
	
	primary key(appointmentID),
	foreign key(doctorID) references UserAccounts(userID),
	foreign key(patientID) references UserAccounts(userID)
);