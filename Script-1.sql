drop database  DoctorFinder
create database DoctorFinder;
use DoctorFinder;

create table user_types (
	userTypeID int not null identity(1,1),
	userTypeName nvarchar(10),
	
	primary key(userTypeID)
);

create table specialties (
	specialtyID int not null identity(1,1),
	specialtyName nvarchar(5),
	
	primary key(specialtyID),
);

create table user_accounts (
	userID int not null identity(1,1),
	userTypeID int not null,
	specialtyID int,
	email nvarchar(255) not null,
	password nvarchar(255) not null,
	name nvarchar(255),
	birthday datetime,
	avatar image,
	phoneNumber Bigint not null,
	address nvarchar(255),
	gender Bit,
	
	primary key(userID),
	foreign key(userTypeID) references user_types(userTypeID),
	foreign key(specialtyID) references specialties(specialtyID)
);

create table detail_appointment (
	appointmentID int not null identity(1, 1),
	doctorID int not null,
	patientID int not null,
	appointmentDate datetime not null,
	
	primary key(appointmentID),
	foreign key(doctorID) references user_accounts(userID),
	foreign key(patientID) references user_accounts(userID)
);

insert into specialties values ('Khoa')
insert into user_types values 
	('Doctor'),
	('Patient')
insert into user_accounts (userTypeID, specialtyID, email, password, phoneNumber) values 
	(1, 1, 'ezteam@ezteam.net', '123456', 889112834)

select
        useraccoun0_.userID as col_0_0_ 
    from
        dbo.user_accounts useraccoun0_ 
    where
        useraccoun0_.email='ezteam@ezteam.net'
        and useraccoun0_.password='123456'
