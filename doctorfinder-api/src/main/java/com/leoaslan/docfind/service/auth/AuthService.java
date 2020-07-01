package com.leoaslan.docfind.service.auth;

import com.leoaslan.docfind.dto.UserAccountAuthorizedDTO;
import com.leoaslan.docfind.dto.UserAccountDTO;
import com.leoaslan.docfind.jwt.JwtTokenProvider;
import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import com.leoaslan.docfind.repository.CityRepository;
import com.leoaslan.docfind.repository.SpecialtyRepository;
import com.leoaslan.docfind.repository.UserAccountRepository;
import com.leoaslan.docfind.repository.UserTypeRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class AuthService {
    @Autowired
    UserAccountRepository userAccountRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    SpecialtyRepository specialtyRepository;
    @Autowired
    UserTypeRepository userTypeRepository;
    @Autowired
    CityRepository cityRepository;

    public ResponseEntity<?> validateUser(String email, String password) {
//        log.info(email); log.info(password);
        UserAccount userAccount = userAccountRepository.findByEmailAndPassword(email, password);
//        log.info(userAccount);

        if (userAccount == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        return ResponseEntity.ok().body(new UserAccountAuthorizedDTO(userAccount, jwtTokenProvider.generateToken(userAccount)));
    }

    public ResponseEntity<?> validateUser(String token){
        log.info(token);
        if (jwtTokenProvider.validateToken(token)){
            Integer userID = jwtTokenProvider.getUserIDFromToken(token);
            UserAccount userAccount = userAccountRepository.findByUserID(userID);

            if (userAccount == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            return ResponseEntity.ok().body(userAccount);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    public ResponseEntity<?> signup(UserAccountDTO sPC) {

        String email=userAccountRepository.findEmail(sPC.getEmail());
        log.info(sPC);
        if (email == null) {
            log.info(sPC);
            UserAccount userAccount = new UserAccount();
            userAccount.setDetailAddress(sPC.getDetailAddress());
            userAccount.setAvatarFileName(sPC.getAvatarFileName());
            userAccount.setBirthday(sPC.getBirthday());
            userAccount.setEmail(sPC.getEmail());
            userAccount.setFullName(sPC.getFullName());
            userAccount.setGender(sPC.getGender());
            userAccount.setPassword(sPC.getPassword());
            userAccount.setPhoneNumber(sPC.getPhoneNumber());

            if (sPC.getUserTypeID() == 1) {
                Specialty specialty = specialtyRepository.findBySpecialtyID(sPC.getSpecialtyID());
                userAccount.setSpecialty(specialty);
            }

            UserType userType=userTypeRepository.findByUserTypeID(sPC.getUserTypeID());
            userAccount.setUserType(userType);

            City city = cityRepository.findByCityID(sPC.getCityID());
            userAccount.setCity(city);

            userAccountRepository.save(userAccount);

            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
}