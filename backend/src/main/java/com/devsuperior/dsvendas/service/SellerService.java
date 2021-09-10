package com.devsuperior.dsvendas.service;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDto;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service //Para registrar que né um elemento do sistema, e assim pode ser injetado em outros componentes
public class SellerService {
	
	@Autowired //vai injetar essa dependencia de maneira transparente, ou seja a instância é feita automaticamente pelo frameworko  
	private SellerRepository repository; //Precisa disso pq a camada de serviço se conceta com a de acesso a dados (repositórios)
	
	public List<SellerDto> findAll(){ 
		List<Seller> result = repository.findAll();// Converter essa lista de "Seller" para um de "SellerDto"
		return result.stream().map(x -> new SellerDto(x)).collect(Collectors.toList());//"Map" converte coleções, então para cada "x"/ para cada um dessa lista vai converte-lo para coleção SellerDto
		
	}


}
