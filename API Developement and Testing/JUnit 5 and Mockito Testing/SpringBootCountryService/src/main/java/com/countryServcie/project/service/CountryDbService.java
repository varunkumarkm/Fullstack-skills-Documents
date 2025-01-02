package com.countryServcie.project.service;

import com.countryServcie.project.bean.Country;
import com.countryServcie.project.entity.CountryDb;
import com.countryServcie.project.repository.CountryDbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;


@Service
public class CountryDbService {

   @Autowired
   private CountryDbRepository countryDbRepository;

    public List<CountryDb> getAllDbCountries() {
       return countryDbRepository.findAll();
    }

    public CountryDb getCountryDbById(int id) {
        List<CountryDb> countries = countryDbRepository.findAll();
        CountryDb countryDb = null;
        for (CountryDb con : countries) {
            if (con.getId() == id)
                countryDb = con;
        }
        return countryDb;
    }

    public CountryDb getCountryDbByName(String countryDbName) {
        List<CountryDb> countries = countryDbRepository.findAll();
        CountryDb countryDb = null;
        for (CountryDb con : countries) {
            if (con.getCountryDbName().equalsIgnoreCase(countryDbName))
                countryDb = con;
        }
        return countryDb;
    }

        public CountryDb addCountryDb(CountryDb countryDb) {
//        countryDb.setId(getMaxId());
        return countryDbRepository.save(countryDb);
    }

//    public int getMaxId () {
//        return countryDbRepository.findAll().size()+1;
//    }

    public CountryDb updateCountryDb(CountryDb countryDb) {
        return countryDbRepository.save(countryDb);
    }

        public void deleteCountryDb(CountryDb countryDb ) {
        countryDbRepository.delete(countryDb);
    }
}

