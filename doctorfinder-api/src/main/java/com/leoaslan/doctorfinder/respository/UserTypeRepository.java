package com.leoaslan.doctorfinder.respository;

import com.leoaslan.doctorfinder.models.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTypeRepository extends JpaRepository<UserType, Integer> {
}
