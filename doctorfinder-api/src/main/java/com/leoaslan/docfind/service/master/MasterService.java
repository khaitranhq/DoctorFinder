package com.leoaslan.docfind.service.master;

import java.util.List;

import com.leoaslan.docfind.model.City;
import com.leoaslan.docfind.model.Specialty;
import com.leoaslan.docfind.repository.CityRepository;
import com.leoaslan.docfind.repository.SpecialtyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MasterService {
    @Autowired private SpecialtyRepository specialtyRepository;
    @Autowired private CityRepository cityRepository;

    public List<Specialty> getSpecialty(){
        List<Specialty> listSpecialties = specialtyRepository.findAll();
        return listSpecialties;
    }

    public List<City> getCiy(){
        List<City> listCity = cityRepository.findAll();
        return listCity;
    }
}