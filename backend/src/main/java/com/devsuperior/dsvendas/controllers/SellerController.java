package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SellerDto;
import com.devsuperior.dsvendas.service.SellerService;

@RestController

//caminho
@RequestMapping(value = "/sellers")
public class SellerController {

	//Controlador depende do serviço
	@Autowired
	private SellerService service;
	
	@GetMapping
	public ResponseEntity<List<SellerDto>> findAll(){
		List<SellerDto> list = service.findAll();
		return ResponseEntity.ok(list);
	
	}
	
	
	//No protocolo HTTP "ok" seguinifica que a resposta foi bem sucedida
}
