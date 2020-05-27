package com.leoaslan.docfind.service.searchPage;

import com.leoaslan.docfind.model.UserAccount;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserAccountService {
    List<UserAccount> ListUserAccount();
    ResponseEntity<?> findDoctor(String FullName, int CityID, int SpecialtyID);
}
