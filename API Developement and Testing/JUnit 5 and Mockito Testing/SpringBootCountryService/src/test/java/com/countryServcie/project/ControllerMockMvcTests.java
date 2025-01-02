package com.countryServcie.project;

import com.countryServcie.project.controller.CountryDbController;
import com.countryServcie.project.entity.CountryDb;
import com.countryServcie.project.service.CountryDbService;
import org.junit.jupiter.api.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ComponentScan(basePackages = "com.countryServcie.project")
@AutoConfigureMockMvc
@ContextConfiguration
@SpringBootTest(classes = {ControllerMockMvcTests.class})
public class ControllerMockMvcTests {

    @Autowired
    MockMvc mockMvc;

    @Mock
    CountryDbService countryDbService;

    @InjectMocks
    CountryDbController countryDbController;

    List<CountryDb> myCountries;
    CountryDb countryDb;

    @BeforeEach
    public void setUp(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(countryDbController).build();
    }

    @Test
    @Order(1)
    public void test_getAllDbCountries() throws Exception {

        myCountries = new ArrayList<CountryDb>();
        myCountries.add(new CountryDb(1, "India", "New Delhi"));
        myCountries.add(new CountryDb(2, "United States", "Washington DC"));

        when(countryDbService.getAllDbCountries()).thenReturn(myCountries);

        this.mockMvc.perform(get("/getAllDbCountries"))
                .andExpect(status().isFound()).andDo(print());
    }

    @Test
    @Order(2)
    public void test_getCountryDbById() throws Exception {
        countryDb = new CountryDb(3, "India", "New Delhi");
        int countryId = 3;

        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);

        this.mockMvc.perform(get("/getCountryDb/" + countryId))
                .andExpect(status().isFound()).andDo(print());
    }

    @Test
    @Order(3)
    public void test_getCountryDbByName() throws Exception {
        countryDb = new CountryDb(3, "India", "New Delhi");
        String countryName = "India";

        when(countryDbService.getCountryDbByName(countryName)).thenReturn(countryDb);

        this.mockMvc.perform(get("/getCountryDbByName/countryDbName").param("countryDbName", "India"))
                .andExpect(status().isFound())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(3))
//                .andExpect(MockMvcResultMatchers.jsonPath("$.countryDbName").value("India"))
//                .andExpect(MockMvcResultMatchers.jsonPath("$.countryDbCapital").value("New Delhi"))
                .andDo(print());
    }

//    @Test
//    @Order(4)
//    public void test_addCountryDb() throws Exception {
//
//        CountryDb CountryDb = new CountryDb(3, "India", "New Delhi");
//
//        when(countryDbService.addCountryDb(CountryDb)).thenReturn(CountryDb);
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String json = objectMapper.writeValueAsString(CountryDb);
//
//        this.mockMvc.perform(post("/addCountryDb")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json))
//                .andExpect(status().isCreated());
//    }

//    @Test
//    @Order(5)
//    public void test_updateCountryDb() throws Exception {
//
//        countryDb = new CountryDb(3, "Japan", "Tokyo");
//        int countryId = 3;
//
//        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);
//        when(countryDbService.updateCountryDb(countryDb)).thenReturn(countryDb);
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String json = objectMapper.writeValueAsString(countryDb);
//
//        this.mockMvc.perform(post("/updateCountryDb/" + countryId)
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json))
//                .andExpect(status().isOk());
//    }

    @Test
    @Order(6)
    public void test_deleteCountryDb() throws Exception {

        int countryId = 2;

        // Success Case
        CountryDb countryDb = new CountryDb(countryId, "India", "New Delhi");
        when(countryDbService.getCountryDbById(countryId)).thenReturn(countryDb);

        this.mockMvc.perform(delete("/deleteCountryDb/{id}", countryId))
                .andExpect(status().isOk());

        // Failure Case
        when(countryDbService.getCountryDbById(countryId)).thenThrow(new NoSuchElementException());
        mockMvc.perform(delete("/deleteCountryDb/{id}", countryId))
                .andExpect(status().isNotFound());
    }
}



