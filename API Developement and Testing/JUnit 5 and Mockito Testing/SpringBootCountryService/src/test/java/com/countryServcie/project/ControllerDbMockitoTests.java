package com.countryServcie.project;

import com.countryServcie.project.controller.CountryDbController;
import com.countryServcie.project.entity.CountryDb;
import com.countryServcie.project.service.CountryDbService;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {ControllerDbMockitoTests.class})
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ControllerDbMockitoTests {

    @Mock
    CountryDbService countryDbService;

    @InjectMocks
    CountryDbController countryDbController;

    List<CountryDb> myCountries;
    CountryDb countryDb;

    @Test
    @Order(1)
    public void test_getAllDbCountries() {

        myCountries = new ArrayList<CountryDb>();
        myCountries.add(new CountryDb(1, "India", "New Delhi"));
        myCountries.add(new CountryDb(2, "United States", "Washington DC"));

        when(countryDbService.getAllDbCountries()).thenReturn(myCountries);
        ResponseEntity<List<CountryDb>> response = countryDbController.getAllDbCountries();

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(2, response.getBody().size());
    }

    @Test
    @Order(2)
    public void test_getCountryDbById() {

        countryDb = new CountryDb(1, "India", "New Delhi");
        int countryId = 1;

        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);
        ResponseEntity<CountryDb> response = countryDbController.getCountryDbById(countryId);

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(countryId, response.getBody().getId());
    }

    @Order(3)
    @Test
    public void test_getCountryDbByName() {

        countryDb = new CountryDb(1, "India", "New Delhi");
        String countryName = "India";

        when(countryDbService.getCountryDbByName(countryName)).thenReturn(countryDb);
        ResponseEntity<CountryDb> response = countryDbController.getCountryDbByName(countryName);

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        assertEquals(countryName, response.getBody().getCountryDbName());
    }

    @Test
    @Order(4)
    public void test_addCountryDb() {

        countryDb = new CountryDb(1, "India", "New Delhi");

        when(countryDbService.addCountryDb(countryDb)).thenReturn(countryDb);
        ResponseEntity<CountryDb> response = countryDbController.addCountryDb(countryDb);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(countryDb, response.getBody());
    }

    @Test
    @Order(5)
    public void test_updateCountryDb() {

        countryDb = new CountryDb(3, "Japan", "Tokyo");
        int countryId = 3;

        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);
        when(countryDbService.updateCountryDb(countryDb)).thenReturn(countryDb);

        ResponseEntity<CountryDb> response = countryDbController.updateCountryDb(countryId, countryDb);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(3, response.getBody().getId());
        assertEquals("Japan", response.getBody().getCountryDbName());
        assertEquals("Tokyo", response.getBody().getCountryDbCapital());
    }

    @Test
    @Order(6)
    public void test_deleteCountryDb() {

        countryDb = new CountryDb(3, "Japan", "Tokyo");
        int countryId = 3;

        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);
        ResponseEntity<CountryDb> response = countryDbController.deleteCountryDb(countryId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
