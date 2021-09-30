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
import com.app.model.Register;
import com.app.repository.RegisterRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RegisterController {

	@Autowired
	private RegisterRepository registerRepository;
	
	// get all registers
	@GetMapping("/registers")
	public List<Register> getAllRegisters(){
		return registerRepository.findAll();
	}		
	
	// create register rest api
	@PostMapping("/registers")
	public Register createRegister(@RequestBody Register register) {
		return registerRepository.save(register);
	}
	
	// get register by id rest api
	@GetMapping("/registers/{id}")
	public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Register not exist with id :" + id));
		return ResponseEntity.ok(register);
	}
	
	// update register rest api
	
	@PutMapping("/registers/{id}")
	public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register registerDetails){
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Register not exist with id :" + id));
		
		register.setChildid(registerDetails.getChildid());
		register.setParentsImg(registerDetails.getParentsImg());
		register.setMartialStatus(registerDetails.getMartialStatus());
		register.setStatus(registerDetails.getStatus());
		register.setGender(registerDetails.getGender());
		register.setMparentName(registerDetails.getMparentName());
		register.setFparentName(registerDetails.getFparentName());
		register.setmAge(registerDetails.getmAge());
		register.setfAge(registerDetails.getfAge());
		register.setmOccupation(registerDetails.getmOccupation());
		register.setfOccupation(registerDetails.getfOccupation());
		register.setmIncome(registerDetails.getmIncome());
		register.setfIncome(registerDetails.getfIncome());
		
		register.setChildrens(registerDetails.getChildrens());
		register.setAddress(registerDetails.getAddress());
		register.setCity(registerDetails.getCity());
		register.setAstate(registerDetails.getAstate());
		register.setDistrict(registerDetails.getDistrict());
		register.setPincode(registerDetails.getPincode());
		register.setMobile(registerDetails.getMobile());	
		register.setEmail(registerDetails.getEmail());
		register.setAadharNo(registerDetails.getAadharNo());
		register.setRegDate(registerDetails.getRegDate());
		register.setIsActive(registerDetails.getIsActive());
		register.setDocument(registerDetails.getDocument());
		register.setHsr(registerDetails.getHsr());
		
		Register updatedRegister = registerRepository.save(register);
		return ResponseEntity.ok(updatedRegister);
	}
	
	// delete register rest api
	@DeleteMapping("/registers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRegister(@PathVariable Long id){
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Register not exist with id :" + id));
		
		registerRepository.delete(register);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
