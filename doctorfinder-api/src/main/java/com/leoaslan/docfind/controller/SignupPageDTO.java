package com.leoaslan.docfind.controller;

import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserType;
import lombok.Value;

import java.util.Date;

@Value
public class SignupPageDTO {
    String email;
    String password;
    String fullName;
    String userTypeName;
    Date birthdate;
    String avatarFileName;
    int phoneNumber;
    String address;
    Boolean gender;
    String specialtyName;
}
