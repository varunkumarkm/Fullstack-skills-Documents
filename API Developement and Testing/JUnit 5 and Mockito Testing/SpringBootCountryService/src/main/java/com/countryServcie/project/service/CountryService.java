package com.countryServcie.project.service;

import com.countryServcie.project.DAO.AddResponse;
import com.countryServcie.project.bean.Country;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class CountryService {

    static HashMap<Integer, Country> countryIdMap;

    public CountryService() {

        countryIdMap = new HashMap<Integer, Country>();

        Country indiacountry = new Country(1, "India", "New Delhi");
        Country uscountry = new Country(2, "United States", "Washington DC");
        Country ukcountry = new Country(3, "United Kingdom", "London");

        countryIdMap.put(1, indiacountry);
        countryIdMap.put(2, uscountry);
        countryIdMap.put(3, ukcountry);
    }

    public List getAllCountries() {
        List countries = new ArrayList(countryIdMap.values());
        return countries;
    }

    public Country getCountryById (int id) {
       Country country = countryIdMap.get(id);
       return country;
    }

    public Country getCountryByName (String countryName) {
        Country country = null;
        for (int i : countryIdMap.keySet()) {
            if (countryIdMap.get(i).getCountryName().equals(countryName))
                country = countryIdMap.get(i);
        }
        return country;
    }

    public Country addCountry (Country country) {
        country.setId(getMaxId());
        countryIdMap.put(country.getId(), country);
     return country;
    }
    //Utility method get max id
    public static int getMaxId () {
        int max = 0;
        for (int id : countryIdMap.keySet())
            if (max <= id)
                max = id;
        return max + 1;
    }

    public Country updateCountry (Country country) {
        if(country.getId()>0)
            countryIdMap.put(country.getId(), country);
        return country;
    }

    public AddResponse deleteCountry (int id) {
        countryIdMap.remove(id);
        AddResponse response = new AddResponse();
        response.setId(id);
        response.setMsg("Country deleted successfully.");
        return response;
    }
}
