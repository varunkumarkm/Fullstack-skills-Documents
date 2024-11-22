package com.example.employeesystem.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Component;

import com.example.employeesystem.entity.Employee;
import com.example.employeesystem.to.EmployeeSearchCriteriaTo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

@Component
public class EmployeeDao {

	private static final String NAME = "name";
	private static final String DESIGNATION = "designation";
	private static final String EMAIL = "email";
	
	@Autowired
	private EntityManager entityManager;

	public Page<Employee> findByCriteriaQuery(EmployeeSearchCriteriaTo criteria) {
		
		CriteriaBuilder criteriaBuilder = this.entityManager.getCriteriaBuilder();

        CriteriaQuery<Employee> query = criteriaBuilder.createQuery(Employee.class);

        Root<Employee> root = query.from(Employee.class);

        Predicate userSelectionPredicates = getPredicatesOnUserSelectionCriteria(criteriaBuilder,
                root, criteria);

        query.where(userSelectionPredicates);

        if (criteria.getPageable() != null) {
            addOrderBy(criteriaBuilder, query, root, criteria.getPageable().getSort());
        }

        TypedQuery<Employee> createdQuery = this.entityManager.createQuery(query);

        setPagination(createdQuery, criteria);

        Long totalRecords = getTotalCount(criteriaBuilder, criteria);

        return new PageImpl<>(createdQuery.getResultList(), criteria.getPageable(), totalRecords);
	}
	
	
	private Long getTotalCount(CriteriaBuilder criteriaBuilder, EmployeeSearchCriteriaTo criteria) {

		CriteriaQuery<Long> countCriteriaQuery = criteriaBuilder.createQuery(Long.class);
        Root<Employee> countRoot = countCriteriaQuery.from(Employee.class);
        Predicate userSelectionPredicates = getPredicatesOnUserSelectionCriteria(criteriaBuilder,
        		countRoot, criteria);
        countCriteriaQuery.where(userSelectionPredicates);

        countCriteriaQuery.select(criteriaBuilder.count(countRoot));

        return this.entityManager.createQuery(countCriteriaQuery).getSingleResult();
	}


	private void setPagination(TypedQuery<Employee> createdQuery, EmployeeSearchCriteriaTo criteria) {
		
		if (criteria.getPageable() != null) {
            createdQuery.setFirstResult(criteria.getPageable().getPageNumber() * criteria
                    .getPageable().getPageSize());
            createdQuery.setMaxResults(criteria.getPageable().getPageSize());

        } else {
            createdQuery.setFirstResult(0);
            createdQuery.setMaxResults(Integer.MAX_VALUE);
            criteria.setPageable(PageRequest.of(0, Integer.MAX_VALUE));
        }
		
	}


	private void addOrderBy(CriteriaBuilder criteriaBuilder, CriteriaQuery<Employee> query, Root<Employee> root, Sort sort) {
		
		if (!sort.isEmpty()) {
            for (Order order : sort) {
                Expression<String> orderProperty = null;
                switch (order.getProperty()) {
                case NAME:
                    orderProperty = root.get(NAME);
                    break;
                case EMAIL:
                    orderProperty = root.get(EMAIL);
                    break;
                case DESIGNATION:
                    orderProperty = root.get(DESIGNATION);
                    break;
                default:
                    throw new IllegalArgumentException("Sorted by the unknown property '" + order.getProperty() + "'");  
                }
                
                if (orderProperty != null) {
                	if (order.isAscending()) {
                		query.orderBy(criteriaBuilder.asc(orderProperty));
                	} else {
                        query.orderBy(criteriaBuilder.desc(orderProperty));

                    }
                }
            }
		}
	}


	private Predicate getPredicatesOnUserSelectionCriteria(CriteriaBuilder criteriaBuilder,
	        Root<Employee> employee, EmployeeSearchCriteriaTo criteria) {

	        List<Predicate> filteredData = new ArrayList<>();

	        String name = criteria.getName();
	        if (name != null && !name.isEmpty()) {
	            filteredData.add(criteriaBuilder.like(criteriaBuilder.lower(employee.get(NAME)), 
	            		"%" + name.toLowerCase() + "%"));
	        }
	        String designation = criteria.getDesignation();
	        if (designation != null && !designation.isEmpty()) {
	            filteredData.add(criteriaBuilder.like(criteriaBuilder.lower(
	                    employee.get(DESIGNATION)), "%" + designation.toLowerCase() + "%"));
	        }
	        
	        String email = criteria.getEmail();
	        if (email != null && !email.isEmpty()) {
	            filteredData.add(criteriaBuilder.like(criteriaBuilder.lower(
	                    employee.get(EMAIL)), "%" + email.toLowerCase() + "%"));
	        }

	        if (!filteredData.isEmpty()) {

	            return criteriaBuilder.and(filteredData.toArray(new Predicate[0]));
	        }

	        return criteriaBuilder.isTrue(criteriaBuilder.literal(true));

	    }
}
