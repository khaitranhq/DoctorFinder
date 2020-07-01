package com.leoaslan.docfind.repository;

import com.leoaslan.docfind.model.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialtyRepository extends JpaRepository<Specialty, Integer> {
    Specialty findBySpecialtyID(Integer specialtyName);

    Specialty findBySpecialtyName(String specialtyName);

}
