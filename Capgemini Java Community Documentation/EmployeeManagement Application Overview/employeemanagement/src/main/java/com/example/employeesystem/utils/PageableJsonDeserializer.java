package com.example.employeesystem.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.boot.jackson.JsonComponent;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

@JsonComponent
public class PageableJsonDeserializer extends JsonDeserializer<Pageable> {

	static final String PROPERTY_DIRECTION = "direction";

	static final String PROPERTY_PROPERTY = "property";

	static final String PROPERTY_SORT = "sort";

	static final String PROPERTY_PAGE_SIZE = "pageSize";

	static final String PROPERTY_PAGE_NUMBER = "pageNumber";

	@Override
	public Pageable deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JacksonException {
		JsonNode node = jp.getCodec().readTree(jp);
		Sort sort = null;
		int pageNumber = 0;
		int pageSize = 1;
		if (node.get(PROPERTY_PAGE_NUMBER) != null) {
			pageNumber = node.get(PROPERTY_PAGE_NUMBER).asInt();
		}
		if (node.get(PROPERTY_PAGE_SIZE) != null) {
			pageSize = node.get(PROPERTY_PAGE_SIZE).asInt();
		}

		JsonNode sortNode = node.get(PROPERTY_SORT);
		if ((sortNode != null) && !sortNode.isNull() && sortNode.isArray()) {
			Iterator<JsonNode> iterator = sortNode.iterator();
			List<Order> sortingOrders = new ArrayList<>();
			while (iterator.hasNext()) {
				JsonNode next = iterator.next();
				String property = getRequiredValue(next, PROPERTY_PROPERTY);
				String direction = getRequiredValue(next, PROPERTY_DIRECTION);
				sortingOrders.add(new Order(Direction.fromString(direction), property));
			}
			sort = Sort.by(sortingOrders);
		}

		return PageRequest.of(pageNumber, pageSize, sort);
	}

	private static String getRequiredValue(JsonNode node, String property) {

		String value = getValue(node, property);
		if (value == null) {
			throw new IllegalStateException("Missing required property: " + property);
		}
		return value;
	}

	private static String getValue(JsonNode node, String property) {

		JsonNode childNode = node.get(property);
		if ((childNode != null) && !childNode.isNull()) {
			return childNode.asText();
		}
		return null;
	}

}
