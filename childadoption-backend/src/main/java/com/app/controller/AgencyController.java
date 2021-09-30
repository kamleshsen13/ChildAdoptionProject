package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.ResourceNotFoundException;
import com.app.model.Agency;
import com.app.repository.AgencyRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AgencyController {

	@Autowired
	private AgencyRepository agencyRepository;
	
	// get all agencies
	@GetMapping("/agencies")
	public List<Agency> getAllAgencies(){
		return agencyRepository.findAll();
	}		
	
	// create agency rest api
	@PostMapping("/agencies")
	public Agency createAgency(@RequestBody Agency agency) {
		return agencyRepository.save(agency);
	}
	
	// get agency by id rest api
	@GetMapping("/agencies/{id}")
	public ResponseEntity<Agency> getAgencyById(@PathVariable Long id) {
		Agency agency = agencyRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Agency not exist with id :" + id));
		return ResponseEntity.ok(agency);
	}
	
	// update agency rest api
	
	@PutMapping("/agencies/{id}")
	public ResponseEntity<Agency> updateAgency(@PathVariable Long id, @RequestBody Agency agencyDetails){
		Agency agency = agencyRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Agency not exist with id :" + id));
		
		agency.setAgencyName(agencyDetails.getAgencyName());
		agency.setAstate(agencyDetails.getAstate());
		agency.setDistrict(agencyDetails.getDistrict());
		agency.setAddress(agencyDetails.getAddress());
		agency.setContactInfo(agencyDetails.getContactInfo());
		agency.setTotalChilds(agencyDetails.getTotalChilds());
		agency.setAdoptableChilds(agencyDetails.getAdoptableChilds());
		
		Agency updatedAgency = agencyRepository.save(agency);
		return ResponseEntity.ok(updatedAgency);
	}
	
	// delete agency rest api
	@DeleteMapping("/agencies/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAgency(@PathVariable Long id){
		Agency agency = agencyRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Agency not exist with id :" + id));
		
		agencyRepository.delete(agency);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
