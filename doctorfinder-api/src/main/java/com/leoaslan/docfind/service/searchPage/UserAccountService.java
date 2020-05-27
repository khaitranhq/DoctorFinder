package com.example.demo.service;

import com.example.demo.model.UserAccount;
import lombok.Getter;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserAccountService {
    //String getFullName();
    //String getCity();
    //String getSpecialtyID();
    List<UserAccount> ListUserAccount();
    ResponseEntity<?> findDoctor(String FullName, String City, int SpecialtyID);
}
