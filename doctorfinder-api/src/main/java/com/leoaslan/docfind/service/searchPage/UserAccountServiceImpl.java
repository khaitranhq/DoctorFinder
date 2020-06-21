package com.leoaslan.docfind.service.searchPage;

import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.repository.UserAccountRepository;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService{

    @Autowired
    private UserAccountRepository userAccountRepository;

    public ResponseEntity<?> findDoctor(String FullName, int CityID, int SpecialtyID){
        Optional<List<UserAccount>> userAccountOptional = Optional.ofNullable(userAccountRepository.findDoctor(FullName, CityID, SpecialtyID));
        return userAccountOptional.map(userAccount -> ResponseEntity.ok().body(userAccount)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @Override
    public List<UserAccount> ListUserAccount(){
        return userAccountRepository.findAll();
    }

}
