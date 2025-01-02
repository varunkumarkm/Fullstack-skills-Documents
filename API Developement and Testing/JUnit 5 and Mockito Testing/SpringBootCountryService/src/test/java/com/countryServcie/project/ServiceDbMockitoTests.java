package com.countryServcie.project;

import com.countryServcie.project.entity.CountryDb;
import com.countryServcie.project.repository.CountryDbRepository;
import com.countryServcie.project.service.CountryDbService;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest(classes = {SpringBootCountryServiceApplication.class})
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ServiceDbMockitoTests {

    @Mock
    CountryDbRepository countryDbRepository;

    @InjectMocks
    CountryDbService countryDbService;

    @Test @Order(1)
    public void test_getAllCountries() {

        List<CountryDb> mycountries = new ArrayList<CountryDb>();
        mycountries.add(new CountryDb(1, "India", "New Delhi"));
        mycountries.add(new CountryDb(2, "China", "Beijing"));

        when(countryDbRepository.findAll()).thenReturn(mycountries);
        assertEquals(2,countryDbService.getAllDbCountries().size());
    }

    @Test @Order(2)
    public void test_getCountryDbById() {

        List<CountryDb> mycountries = new ArrayList<CountryDb>();
        mycountries.add(new CountryDb(1, "India", "New Delhi"));
        mycountries.add(new CountryDb(2, "China", "Beijing"));

        int countryDbId = 1;

        when(countryDbRepository.findAll()).thenReturn(mycountries);
        assertEquals(countryDbId,countryDbService.getCountryDbById(countryDbId).getId());
    }

    @Test @Order(3)
    public void test_getCountryDbByName() {

        List<CountryDb> mycountries = new ArrayList<CountryDb>();
        mycountries.add(new CountryDb(1, "India", "New Delhi"));
        mycountries.add(new CountryDb(2, "China", "Beijing"));

        String countryDbName = "India";

        when(countryDbRepository.findAll()).thenReturn(mycountries);
        assertEquals(countryDbName,countryDbService.getCountryDbByName(countryDbName).getCountryDbName());
    }

    @Test @Order(4)
    public void test_addCountryDb() {

        CountryDb countryDb = new CountryDb(4, "Germany", "Berlin");

        when(countryDbRepository.save(countryDb)).thenReturn(countryDb);
        assertEquals(countryDb, countryDbService.addCountryDb(countryDb));
    }

    @Test @Order(5)
    public void test_updateCountryDb() {

        CountryDb countryDb = new CountryDb(4, "India", "New Delhi");

        when(countryDbRepository.save(countryDb)).thenReturn(countryDb);
        assertEquals(countryDb, countryDbService.updateCountryDb(countryDb));
    }

    @Test @Order(6)
    public void test_deleteCountryDb() {

        CountryDb countryDb = new CountryDb(4, "India", "New Delhi");

        countryDbService.deleteCountryDb(countryDb);
        verify(countryDbRepository, times(1)).delete(countryDb);//void method mocking
    }
}
