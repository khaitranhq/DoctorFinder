package com.leoaslan.docfind.dto;

import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserAccountAuthorizedDTO {
    int userID;
    String email;
    String password;
    String fullName;
    UserType userType;
    City city;
    LocalDate birthday;
    String avatarFileName;
    int phoneNumber;
    String detailAddress;
    Boolean gender;
    Specialty specialty;

    //For doctor
    public UserAccountAuthorizedDTO(UserAccount userAccount, String token) {
        this.userID = userAccount.getUserID();
        this.email = userAccount.getEmail();
        this.password = userAccount.getPassword();
        this.fullName = userAccount.getFullName();
        this.userType = userAccount.getUserType();
        this.city = userAccount.getCity();
        this.birthday = userAccount.getBirthday();
        this.avatarFileName = userAccount.getAvatarFileName();
        this.phoneNumber = userAccount.getPhoneNumber();
        this.detailAddress = userAccount.getDetailAddress();
        this.gender = userAccount.getGender();

        if (userAccount.getSpecialty() != null)
            this.specialty = userAccount.getSpecialty();
        this.token = token;
    }

    String token;
}
