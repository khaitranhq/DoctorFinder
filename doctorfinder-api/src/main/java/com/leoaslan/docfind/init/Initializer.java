package com.leoaslan.docfind.init;

import java.time.Month;
import java.util.ArrayList;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Stream;

import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import com.leoaslan.docfind.repository.CityRepository;
import com.leoaslan.docfind.repository.SpecialtyRepository;
import com.leoaslan.docfind.repository.UserAccountRepository;
import com.leoaslan.docfind.repository.UserTypeRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {
    private final UserAccountRepository userAccountRepository;
    private final SpecialtyRepository specialtyRepository;
    private final CityRepository cityRepository;
    private final UserTypeRepository userTypeRepository;

    public Initializer(UserAccountRepository userAccountRepository, SpecialtyRepository specialtyRepository,
                       CityRepository cityRepository, UserTypeRepository userTypeRepository) {
        this.userAccountRepository = userAccountRepository;
        this.specialtyRepository = specialtyRepository;
        this.cityRepository = cityRepository;
        this.userTypeRepository = userTypeRepository;
    }

    @Override
    public void run(String... strings) {
//        List<City> listCity = new ArrayList<City>();
//        List<Specialty> listSpecialty = new ArrayList<Specialty>();
//        List<UserType> listUserType = new ArrayList<UserType>();
//
//        // Initialize for City
//        Stream.of("Hà Nội", "Đà Nẵng", "Thành Phố Hồ Chí Minh").forEach(cityName -> listCity.add(new City(cityName)));
//        listCity.forEach(city -> cityRepository.save(city));
//        cityRepository.findAll().forEach(System.out::println);
//
//        // Initialize for Specialty
//        Stream.of("Khoa Thần Kinh", "Khoa nhi", "Khoa ung bướu")
//                .forEach(specialtyName -> listSpecialty.add(new Specialty(specialtyName)));
//        listSpecialty.forEach(specialty -> specialtyRepository.save(specialty));
//        specialtyRepository.findAll().forEach(System.out::println);
//
//        // Initialize for User Type
//        Stream.of("Doctor", "Patient", "Admin").forEach(userTypeName -> listUserType.add(new UserType(userTypeName)));
//        listUserType.forEach(userType -> userTypeRepository.save(userType));
//        userTypeRepository.findAll().forEach(System.out::println);
//
//        // Initialize for User Account
//        // For doctor
//        LocalDate doctorBirthday = LocalDate.of(2000, Month.JULY, 5);
//        UserAccount doctor1 = new UserAccount("doctor1@gmail.com", "123", "Bác sĩ Khải", listUserType.get(0),
//                doctorBirthday, "doctor1.png", 889112834, listCity.get(0), "17 Phần Lăng 15, Hải Châu, Đà Nẵng", true,
//                listSpecialty.get(0));
//
//        // For patient
//        LocalDate patientBirthday = LocalDate.of(2000, Month.JULY, 5);
//        UserAccount patient1 = new UserAccount("patient1@gmail.com", "123", "Bệnh nhân Khải", listUserType.get(1),
//                patientBirthday, "patient1.png", 348840993, listCity.get(0), "17 Phần Lăng 15", true);
//        userAccountRepository.save(doctor1);
//        userAccountRepository.save(patient1);
    }
}