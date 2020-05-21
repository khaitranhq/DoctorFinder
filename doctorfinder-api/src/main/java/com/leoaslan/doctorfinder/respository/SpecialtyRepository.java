package com.leoaslan.doctorfinder.respository;

import com.leoaslan.doctorfinder.models.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialtyRepository extends JpaRepository<Specialty, Integer> {
}
