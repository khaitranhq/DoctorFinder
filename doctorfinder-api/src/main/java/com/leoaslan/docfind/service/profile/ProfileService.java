
package com.leoaslan.docfind.service.profile;

import com.leoaslan.docfind.dto.UserAccountDTO;
import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.model.UserAccount;
import com.leoaslan.docfind.model.UserType;
import com.leoaslan.docfind.repository.CityRepository;
import com.leoaslan.docfind.repository.SpecialtyRepository;
import com.leoaslan.docfind.repository.UserAccountRepository;
import com.leoaslan.docfind.repository.UserTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
public class ProfileService {
    @Autowired  private final UserAccountRepository userAccountRepository;
    @Autowired private final SpecialtyRepository specialtyRepository;
    @Autowired private final UserTypeRepository userTypeRepository;
    @Autowired private final CityRepository cityRepository;

    public ResponseEntity<?> update(Integer userID, UserAccountDTO userAccountDTO){
        log.info(userID);
        log.info(userAccountDTO);
        UserAccount userAccount =userAccountRepository.findByUserID(userID);
        log.info(userAccount);
        if(userAccount==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else{

            userAccount.setDetailAddress(userAccountDTO.getDetailAddress());

            userAccount.setAvatarFileName(userAccountDTO.getAvatarFileName());
            userAccount.setBirthday(userAccountDTO.getBirthday());
            userAccount.setFullName(userAccountDTO.getFullName());
            userAccount.setGender(userAccountDTO.getGender());
            userAccount.setPassword(userAccountDTO.getPassword());
            userAccount.setPhoneNumber(userAccountDTO.getPhoneNumber());

            UserType userType=userTypeRepository.findByUserTypeID(userAccountDTO.getUserTypeID());
            userAccount.setUserType(userType);
            log.info(userAccount);

            Specialty specialty=specialtyRepository.findBySpecialtyID(userAccountDTO.getSpecialtyID());
            if(specialty==null){
                userAccount.setSpecialty(null);
            }
            else{
                userAccount.setSpecialty(specialty);
            }

            City city = cityRepository.findByCityID(userAccountDTO.getCityID());
            userAccount.setCity(city);


            userAccountRepository.save(userAccount);

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    public ResponseEntity<?> get(Integer userID){
        UserAccount userAccount = userAccountRepository.findByUserID(userID);
        return ResponseEntity.ok(userAccount);
    }
}
