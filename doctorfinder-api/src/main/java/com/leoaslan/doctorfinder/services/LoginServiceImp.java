package com.leoaslan.doctorfinder.services;

import com.leoaslan.doctorfinder.respository.UserAccountRepository;
import com.leoaslan.doctorfinder.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImp implements LoginService {
    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public Boolean validateUser(String email, String password){
        return true;
        // return userAccountRepository.findUserID(email, password).size() > 0;
    }
}