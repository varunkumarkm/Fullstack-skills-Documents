package com.example.employeesystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.employeesystem.entity.Employee;
import com.example.employeesystem.exception.EmployeeNotFound;
import com.example.employeesystem.repository.EmployeeDao;
import com.example.employeesystem.repository.EmployeeRepository;
import com.example.employeesystem.to.EmployeeSearchCriteriaTo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository empRepo;
	
	@Autowired
	EmployeeDao empDao;

	@Override
	public Employee save(Employee employee) {
		return empRepo.save(employee);
	}

	@Override
	public Page<Employee> getEmployeePagination(Integer pageNumber, Integer pageSize, String sort) {
		Pageable pageable = null;
		if (sort != null) {
			// with sorting
			pageable = PageRequest.of(pageNumber, pageSize, Sort.Direction.ASC, sort);
		} else {
			// without sorting
			pageable = PageRequest.of(pageNumber, pageSize);
		}
		return empRepo.findAll(pageable);
	}

	@Override
	public Page<Employee> getEmployeePaginated(EmployeeSearchCriteriaTo employeeSearchCriteriaTo) {
		return empDao.findByCriteriaQuery(employeeSearchCriteriaTo);
	}

	@Override
	public List<Employee> getEmployeeList() {
		return empRepo.findAll();
	}

	@Override
	public void delete(Integer id) {
		
		empRepo.deleteById(id);
	}

	@Override
	public Employee getEmployee(Integer id) {
		return empRepo.findById(id).get();
	}

	@Override
	public Employee updateEmployee(Integer id, Employee employeeToUpdate) throws EmployeeNotFound {
		
		Optional<Employee> emp = empRepo.findById(id);
		if(emp.isPresent()) {
			if(employeeToUpdate.getName() != null && !employeeToUpdate.getName().isBlank()) {
				emp.get().setName(employeeToUpdate.getName());
			}
			
			if(employeeToUpdate.getEmail() != null && !employeeToUpdate.getEmail().isBlank()) {
				emp.get().setEmail(employeeToUpdate.getEmail());
			}
			
			if(employeeToUpdate.getDesignation() != null && !employeeToUpdate.getDesignation().isBlank()) {
				emp.get().setDesignation(employeeToUpdate.getDesignation());
			}
		} else {
			throw new EmployeeNotFound("Employee does not exists");
		}
		
		
		return empRepo.save(emp.get());
	}

	@Override
	public void updateEmployees(List<Employee> employeeListToUpdate) {
		
		for(Employee employeeToUpdate : employeeListToUpdate) {
			try {
				updateEmployee(employeeToUpdate.getId(), employeeToUpdate);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}		
	}

}
