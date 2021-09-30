package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "childes")
public class Child {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "child_name")
	private String childName;

	@Column(name = "gender")
	private String gender;
	
	@Column(name = "age")
	private Integer age;
	
	@Column(name = "img")
	private String img;
	
	@Column(name = "handicaped")
	private String handicaped;
	
	@Column(name = "agency_namee")
	private String agencyNamee;
	
	@Column(name = "desc_child")
	private String descChild;
	
	public Child() {}

	public Child(String childName, String gender, Integer age, String img, String handicaped, String agencyNamee,
			String descChild) {
		super();
		this.childName = childName;
		this.gender = gender;
		this.age = age;
		this.img = img;
		this.handicaped = handicaped;
		this.agencyNamee = agencyNamee;
		this.descChild = descChild;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getChildName() {
		return childName;
	}

	public void setChildName(String childName) {
		this.childName = childName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getHandicaped() {
		return handicaped;
	}

	public void setHandicaped(String handicaped) {
		this.handicaped = handicaped;
	}


	public String getAgencyNamee() {
		return agencyNamee;
	}

	public void setAgencyNamee(String agencyNamee) {
		this.agencyNamee = agencyNamee;
	}

	public String getDescChild() {
		return descChild;
	}

	public void setDescChild(String descChild) {
		this.descChild = descChild;
	}

	
}