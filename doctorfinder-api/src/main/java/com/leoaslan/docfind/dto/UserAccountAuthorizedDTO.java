package com.leoaslan.docfind.dto;

import com.leoaslan.docfind.model.UserAccount;
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
    int userTypeID;
    int cityID;
    LocalDate birthday;
    String avatarFileName;
    int phoneNumber;
    String detailAddress;
    Boolean gender;
    int specialtyID;

    //For doctor
    public UserAccountAuthorizedDTO(UserAccount userAccount, String token) {
        this.userID = userAccount.getUserID();
        this.email = userAccount.getEmail();
        this.password = userAccount.getPassword();
        this.fullName = userAccount.getFullName();
        this.userTypeID = userAccount.getUserType().getUserTypeID();
        this.cityID = userAccount.getCity().getCityID();
        this.birthday = userAccount.getBirthday();
        this.avatarFileName = userAccount.getAvatarFileName();
        this.phoneNumber = userAccount.getPhoneNumber();
        this.detailAddress = userAccount.getDetailAddress();
        this.gender = userAccount.getGender();

        if (userAccount.getSpecialty() != null)
            this.specialtyID = userAccount.getSpecialty().getSpecialtyID();
        this.token = token;
    }

    String token;
}
