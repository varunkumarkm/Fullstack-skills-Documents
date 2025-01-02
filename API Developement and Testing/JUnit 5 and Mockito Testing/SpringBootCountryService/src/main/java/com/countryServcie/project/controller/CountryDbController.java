package com.countryServcie.project.controller;

import com.countryServcie.project.entity.CountryDb;
import com.countryServcie.project.service.CountryDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;


@RestController
public class CountryDbController {

    @Autowired
    private CountryDbService countryDbService;

    @GetMapping("/getAllDbCountries")
    public ResponseEntity<List<CountryDb>> getAllDbCountries() {
        try {
            List<CountryDb> countries = countryDbService.getAllDbCountries();

            return new ResponseEntity<List<CountryDb>>(countries, HttpStatus.FOUND);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getCountryDb/{id}")
    public ResponseEntity<CountryDb> getCountryDbById(@PathVariable(value = "id") int id) {
        try {
            CountryDb countryDbById = countryDbService.getCountryDbById(id);
            return new ResponseEntity<CountryDb>(countryDbById, HttpStatus.FOUND);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getCountryDbByName/countryDbName")
        public ResponseEntity<CountryDb> getCountryDbByName(@RequestParam(value = "countryDbName") String countryDbName) {
        try {
            CountryDb countryDb = countryDbService.getCountryDbByName(countryDbName);
            return new ResponseEntity<>(countryDb, HttpStatus.FOUND);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addCountryDb")
    public ResponseEntity<CountryDb> addCountryDb(@RequestBody CountryDb countryDb) {
        try {
            countryDbService.addCountryDb(countryDb);
            return new ResponseEntity<>(countryDb, HttpStatus.CREATED);
        }
        catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/updateCountryDb/{id}")
    public ResponseEntity<CountryDb> updateCountryDb(@PathVariable int id, @RequestBody CountryDb countryDb) {
        try {
            CountryDb existCountry = countryDbService.getCountryDbById(id);

            existCountry.setCountryDbName(countryDb.getCountryDbName());
            existCountry.setCountryDbCapital(countryDb.getCountryDbCapital());

            CountryDb updatedCountryDb = countryDbService.updateCountryDb(existCountry);
            return new ResponseEntity<>(updatedCountryDb, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/deleteCountryDb/{id}")
    public ResponseEntity<CountryDb> deleteCountryDb(@PathVariable int id) {
        CountryDb countryDb = null;
        try {
            countryDb = countryDbService.getCountryDbById(id);
            countryDbService.deleteCountryDb(countryDb);
        }
        catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(countryDb, HttpStatus.OK);
    }
}
