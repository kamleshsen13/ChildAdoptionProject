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
import com.app.model.Child;
import com.app.repository.ChildRepository;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ChildController {

	@Autowired
	private ChildRepository childRepository;
	
	// get all childes
	@GetMapping("/childes")
	public List<Child> getAllchildes(){
		return childRepository.findAll();
	}		
	
	// create child rest api
	@PostMapping("/childes")
	public Child createChild(@RequestBody Child child) {
		return childRepository.save(child);
	}
	
	// get child by id rest api
	@GetMapping("/childes/{id}")
	public ResponseEntity<Child> getChildById(@PathVariable Long id) {
		Child child = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));
		return ResponseEntity.ok(child);
	}
	


	
	// update child rest api
	
	@PutMapping("/childes/{id}")
	public ResponseEntity<Child> updateChild(@PathVariable Long id, @RequestBody Child childDetails){
		Child child = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));
		
		child.setChildName(childDetails.getChildName());
		child.setGender(childDetails.getGender());
		child.setAge(childDetails.getAge());
		child.setImg(childDetails.getImg());
		child.setHandicaped(childDetails.getHandicaped());
		child.setAgencyNamee(childDetails.getAgencyNamee());
		child.setDescChild(childDetails.getDescChild());
		
		Child updatedChild = childRepository.save(child);
		return ResponseEntity.ok(updatedChild);
	}
	
	// delete child rest api
	@DeleteMapping("/childes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteChild(@PathVariable Long id){
		Child child = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));
		
		childRepository.delete(child);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
