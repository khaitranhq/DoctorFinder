package com.leoaslan.docfind.service.login;

import com.leoaslan.docfind.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    private UserAccountRepository userAccountRepository;

    public Boolean validateUser(String email, String password) {
        List<Integer> listUser = userAccountRepository.findUserID(email, password);
        return listUser.size() > 0;
    }
}
