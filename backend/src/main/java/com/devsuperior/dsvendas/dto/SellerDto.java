package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDto implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	
	public SellerDto() {}

	public SellerDto(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	//Para copiar facilmente os dados de uma entidade para um DTO
	public SellerDto(Seller entity) {
		id = entity.getId();
		name = entity.getName();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	

}
