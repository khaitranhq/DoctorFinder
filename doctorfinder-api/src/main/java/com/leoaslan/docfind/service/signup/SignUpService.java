package com.leoaslan.docfind.service.signup;

import com.leoaslan.docfind.controller.SignupPageDTO;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import com.leoaslan.docfind.repository.SpecialtyRepository;
import com.leoaslan.docfind.repository.UserAccountRepository;
import com.leoaslan.docfind.repository.UserTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Log4j2
@RequiredArgsConstructor
public class SignUpService {
    private final UserAccountRepository userAccountRepository;
    private final UserTypeRepository userTypeRepository;
    private final SpecialtyRepository specialtyRepository;

//    @Transactional
    public ResponseEntity<?> signup(SignupPageDTO sPC) {

        String email=userAccountRepository.findEmail(sPC.getEmail());
        log.info(sPC);
        if (email == null) {
            log.info(sPC);
            UserAccount userAccount = new UserAccount();
            userAccount.setAddress(sPC.getAddress());
            userAccount.setAvatarFileName(sPC.getAvatarFileName());
            userAccount.setBirthdate(sPC.getBirthdate());
            userAccount.setEmail(sPC.getEmail());
            userAccount.setFullName(sPC.getFullName());
            userAccount.setGender(sPC.getGender());
            userAccount.setPassword(sPC.getPassword());
            userAccount.setPhoneNumber(sPC.getPhoneNumber());

            Specialty specialty=specialtyRepository.findBySpecialtyName(sPC.getSpecialtyName());
            userAccount.setSpecialty(specialty);

            UserType userType=userTypeRepository.findByUserTypeName(sPC.getUserTypeName());
            userAccount.setUserType(userType);

            userAccountRepository.save(userAccount);

            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

}
