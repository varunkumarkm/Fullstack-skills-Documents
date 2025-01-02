package com.countryServcie.project.controller;

import com.countryServcie.project.DAO.AddResponse;
import com.countryServcie.project.bean.Country;
import com.countryServcie.project.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/getAllCountries")
    public List getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/getCountry/{id}")
    public Country getCountryById(@PathVariable(value = "id") int id) {
        return countryService.getCountryById(id);
    }

    @GetMapping("/getCountry/countryName")
    public Country getCountryByName (@RequestParam(value = "countryName" ) String countryName) {
        return countryService.getCountryByName(countryName);
    }

    @PostMapping("/addCountry")
    public Country addCountry (@RequestBody Country country) {
        return countryService.addCountry(country);
    }

    @PutMapping("/updateCountry/{id}")
    public Country updateCountry (@RequestBody Country country, @PathVariable int id) {
        return countryService.updateCountry(country);
    }

    @DeleteMapping("/deleteCountry/{id}")
    public AddResponse deleteCountry (@PathVariable int id) {
        return countryService.deleteCountry(id);
    }
}
