package com.leoaslan.docfind.repository;


import com.leoaslan.docfind.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAccountRepository  extends JpaRepository<UserAccount, Integer> {
    @Query("SELECT ua.userID FROM UserAccount ua WHERE ua.email=:email AND ua.password=:password")
    List<Integer> findUserID(@Param("email") String email, @Param("password") String password);
    //searchPage
    @Query(value = "SELECT ua.* FROM user_accounts ua WHERE ua.full_name=:FullName AND ua.cityid=:CityID AND ua.specialtyid=:SpecialtyID AND ua.user_typeid=1", nativeQuery = true)
    List<UserAccount> findDoctor(@Param("FullName") String FullName, @Param("CityID") int cityid, @Param("SpecialtyID") int specialtyID);
}
