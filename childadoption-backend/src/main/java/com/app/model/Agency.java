package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agencies")
public class Agency {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "agency_name")
	private String agencyName;

	@Column(name = "astate")
	private String astate;
	
	@Column(name = "district")
	private String district;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "contactInfo")
	private String contactInfo;
	
	@Column(name = "totalChilds")
	private Integer totalChilds;
	
	@Column(name = "adoptableChilds")
	private Integer adoptableChilds;
	
	public Agency() {}

	public Agency(String agencyName, String astate, String district, String address, String contactInfo,
			Integer totalChilds, Integer adoptableChilds) {
		super();
		this.agencyName = agencyName;
		this.astate = astate;
		this.district = district;
		this.address = address;
		this.contactInfo = contactInfo;
		this.totalChilds = totalChilds;
		this.adoptableChilds = adoptableChilds;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAgencyName() {
		return agencyName;
	}

	public void setAgencyName(String agencyName) {
		this.agencyName = agencyName;
	}

	public String getAstate() {
		return astate;
	}

	public void setAstate(String astate) {
		this.astate = astate;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public Integer getTotalChilds() {
		return totalChilds;
	}

	public void setTotalChilds(Integer totalChilds) {
		this.totalChilds = totalChilds;
	}

	public Integer getAdoptableChilds() {
		return adoptableChilds;
	}

	public void setAdoptableChilds(Integer adoptableChilds) {
		this.adoptableChilds = adoptableChilds;
	}
}