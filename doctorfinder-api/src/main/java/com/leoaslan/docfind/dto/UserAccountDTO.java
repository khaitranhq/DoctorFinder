package com.leoaslan.docfind.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.Value;

import java.time.LocalDate;
import java.util.Map;

@Getter
@Setter
@Value
public class UserAccountDTO {
    public UserAccountDTO(Map<String, Object> req){
        this.email = (String) req.get("email");
        this.password = (String) req.get("password");
        this.fullName = (String) req.get("fullName");
        this.birthday = LocalDate.parse((String) req.get("birthday"));
        this.avatarFileName = (String) req.get("avatarFileName");
        this.phoneNumber = (Integer) req.get("phoneNumber");
        this.detailAddress = (String) req.get("detailAddress");
        this.gender = (Boolean) req.get("gender");
        this.userTypeID = (Integer) req.get("userTypeID");
        this.cityID = (Integer) req.get("cityID");
        this.specialtyID = (Integer) req.get("specialtyID");
    }

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
}
