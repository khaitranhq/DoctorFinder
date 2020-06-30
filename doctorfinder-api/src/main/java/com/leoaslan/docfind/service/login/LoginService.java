package com.leoaslan.docfind.service.login;

import com.leoaslan.docfind.dto.UserAccountAuthorizedDTO;
import com.leoaslan.docfind.jwt.JwtTokenProvider;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.repository.UserAccountRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class LoginService {
    @Autowired
    UserAccountRepository userAccountRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;

    public ResponseEntity<?> validateUser(String email, String password) {
        log.info(email); log.info(password);
        UserAccount userAccount = userAccountRepository.findByEmailAndPassword(email, password);
        log.info(userAccount);

        if (userAccount == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        return ResponseEntity.ok().body(new UserAccountAuthorizedDTO(userAccount, jwtTokenProvider.generateToken(userAccount)));
    }

    public ResponseEntity<?> validateUser(String token){
        if (jwtTokenProvider.validateToken(token)){
            Integer userID = jwtTokenProvider.getUserIDFromToken(token);
            UserAccount userAccount = userAccountRepository.findByUserID(userID);

            if (userAccount == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            return ResponseEntity.ok().body(userAccount);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}