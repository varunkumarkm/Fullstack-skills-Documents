package com.example.employeesystem;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.employeesystem.entity.Employee;
import com.example.employeesystem.service.EmployeeService;

@SpringBootApplication
public class EmployeesystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeesystemApplication.class, args);
	}

	@Bean
	CommandLineRunner demo(EmployeeService employeeService) {
		return (args) -> {
			// save few employee
			Employee emp1 = new Employee();
			emp1.setName("Adam");
			emp1.setEmail("adam@cg.com");
			emp1.setDesignation("Developer");
			Employee emp2 = new Employee();
			emp2.setName("Robert");
			emp2.setEmail("robert@cg.com");
			emp2.setDesignation("Tester");
			Employee emp3 = new Employee();
			emp3.setName("John");
			emp3.setEmail("john@cg.com");
			emp3.setDesignation("Designer");
			Employee emp4 = new Employee();
			emp4.setName("William");
			emp4.setEmail("william@cg.com");
			emp4.setDesignation("Server Admin");
			Employee emp5 = new Employee();
			emp5.setName("Robin");
			emp5.setEmail("robin@cg.com");
			emp5.setDesignation("Team Lead");
			Employee emp6 = new Employee();
			emp6.setName("Peter");
			emp6.setEmail("peter@cg.com");
			emp6.setDesignation("Developer");
			Employee emp7 = new Employee();
			emp7.setName("Jack");
			emp7.setEmail("jack@cg.com");
			emp7.setDesignation("Tester");
			Employee emp8 = new Employee();
			emp8.setName("Sam");
			emp8.setEmail("sam@cg.com");
			emp8.setDesignation("SEO Executive");
			Employee emp9 = new Employee();
			emp9.setName("Ronnie");
			emp9.setEmail("ronnie@cg.com");
			emp9.setDesignation("Developer");
			Employee emp10 = new Employee();
			emp10.setName("Ricky");
			emp10.setEmail("ricky@cg.com");
			emp10.setDesignation("Project Lead");
			employeeService.save(emp1);
			employeeService.save(emp2);
			employeeService.save(emp3);
			employeeService.save(emp4);
			employeeService.save(emp5);
			employeeService.save(emp6);
			employeeService.save(emp7);
			employeeService.save(emp8);
			employeeService.save(emp9);
			employeeService.save(emp10);
		};
	}
}
