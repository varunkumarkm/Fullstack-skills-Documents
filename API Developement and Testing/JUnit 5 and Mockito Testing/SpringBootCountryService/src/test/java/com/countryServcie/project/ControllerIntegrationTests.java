package com.countryServcie.project;

import org.junit.jupiter.api.*;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.assertEquals;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ControllerIntegrationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    @Order(1)
    void getAllCountriesIntegrationTests() throws Exception {

        String url = "http://localhost:" + port + "/getAllDbCountries";

        String expected = """
               [
                    {
                        "id": 1,
                        "countryDbName": "India",
                        "countryDbCapital": "New Delhi"
                    },
                    {
                        "id": 2,
                        "countryDbName": "United States",
                        "countryDbCapital": "Washington DC"
                    }
                ]""";

        ResponseEntity<String> response = testRestTemplate.getForEntity(url, String.class);

        System.out.println("Response Status: " + response.getStatusCode());
        System.out.println("Response Body: " + response.getBody());

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        JSONAssert.assertEquals(expected, response.getBody(), false);
    }
    @Order(2)
    @Test
    void getCountryDbByIdIntegrationTests() throws Exception {

        String url = "http://localhost:" + port + "/getCountryDbById/1";

        String expected =
                """
                {
                    "id": 1,
                    "countryDbName": "India",
                    "countryDbCapital": "New Delhi"
                }
                """;
        ResponseEntity<String> response = testRestTemplate.getForEntity("url", String.class);

        System.out.println("Response Status: " + response.getStatusCode());
        System.out.println("Response Body: " + response.getBody());

        assertEquals(HttpStatus.FOUND, response.getStatusCode());
        JSONAssert.assertEquals(expected, response.getBody(), false);
    }
}