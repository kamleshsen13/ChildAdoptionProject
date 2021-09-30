package com.app.model;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "registers")
public class Register {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;       //Rid=registration No
	
//	@OneToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "id")
//	//private Long id;
//	private Child child;

	@Column(name = "childid")
	private Long childid;
	
	@Column(name = "email")
	private String email;

	@Column(name = "parents_img")
	private String parentsImg;
	
	@Column(name = "martial_status")
	private String martialStatus;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "gender")
	private String gender;
	@Column(name = "mparent_name")
	private String mparentName;
	
	@Column(name = "fparent_name")
	private String fparentName;
	
	@Column(name = "mage")
	private Integer mAge;
	
	@Column(name = "fage")
	private Integer fAge;
	
	@Column(name = "moccupation")
	private String mOccupation;
	
	@Column(name = "foccupation")
	private String fOccupation;
	
	@Column(name = "mincome")
	private Integer mIncome;
	
	@Column(name = "fincome")
	private Integer fIncome;
	
	@Column(name = "mwhours")
	private Integer mwHours;
	
	@Column(name = "fwhours")
	private Integer fwHours;
	
	@Column(name = "childrens")
	private Integer childrens;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "astate")
	private String astate;
	
	@Column(name = "district")
	private String district;

	@Column(name = "pincode")
	private Integer pincode;

	@Column(name = "mobile")
	private BigInteger mobile;

	@Column(name = "aadharno")
	private BigInteger aadharNo;

	@Column(name = "reg_date")
	private String regDate;
	
	@Column(name = "is_active")
	private Integer isActive;

	@Column(name = "document")
	private String document;
	
	@Column(name = "hsr")
	private String hsr;
	
	public Register() {}

	public Register(long id, Long childid, String email, String parentsImg, String martialStatus, String status, String gender,
			String mparentName, String fparentName, Integer mAge, Integer fAge, String mOccupation, String fOccupation,
			Integer mIncome, Integer fIncome, Integer mwHours, Integer fwHours, Integer childrens, String address,
			String city, String astate, String district, Integer pincode, BigInteger mobile, BigInteger aadharNo,
			String regDate, Integer isActive, String document, String hsr) {
		super();
		this.id = id;
		this.childid = childid;
		this.email = email;
		this.parentsImg = parentsImg;
		this.martialStatus = martialStatus;
		this.status = status;
		this.gender = gender;
		this.mparentName = mparentName;
		this.fparentName = fparentName;
		this.mAge = mAge;
		this.fAge = fAge;
		this.mOccupation = mOccupation;
		this.fOccupation = fOccupation;
		this.mIncome = mIncome;
		this.fIncome = fIncome;
		this.mwHours = mwHours;
		this.fwHours = fwHours;
		this.childrens = childrens;
		this.address = address;
		this.city = city;
		this.astate = astate;
		this.district = district;
		this.pincode = pincode;
		this.mobile = mobile;
		this.aadharNo = aadharNo;
		this.regDate = regDate;
		this.isActive = isActive;
		this.document = document;
		this.hsr = hsr;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Long getChildid() {
		return childid;
	}

	public void setChildid(Long childid) {
		this.childid = childid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getParentsImg() {
		return parentsImg;
	}

	public void setParentsImg(String parentsImg) {
		this.parentsImg = parentsImg;
	}

	public String getMartialStatus() {
		return martialStatus;
	}

	public void setMartialStatus(String martialStatus) {
		this.martialStatus = martialStatus;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMparentName() {
		return mparentName;
	}

	public void setMparentName(String mparentName) {
		this.mparentName = mparentName;
	}

	public String getFparentName() {
		return fparentName;
	}

	public void setFparentName(String fparentName) {
		this.fparentName = fparentName;
	}

	public Integer getmAge() {
		return mAge;
	}

	public void setmAge(Integer mAge) {
		this.mAge = mAge;
	}

	public Integer getfAge() {
		return fAge;
	}

	public void setfAge(Integer fAge) {
		this.fAge = fAge;
	}

	public String getmOccupation() {
		return mOccupation;
	}

	public void setmOccupation(String mOccupation) {
		this.mOccupation = mOccupation;
	}

	public String getfOccupation() {
		return fOccupation;
	}

	public void setfOccupation(String fOccupation) {
		this.fOccupation = fOccupation;
	}

	public Integer getmIncome() {
		return mIncome;
	}

	public void setmIncome(Integer mIncome) {
		this.mIncome = mIncome;
	}

	public Integer getfIncome() {
		return fIncome;
	}

	public void setfIncome(Integer fIncome) {
		this.fIncome = fIncome;
	}

	public Integer getMwHours() {
		return mwHours;
	}

	public void setMwHours(Integer mwHours) {
		this.mwHours = mwHours;
	}

	public Integer getFwHours() {
		return fwHours;
	}

	public void setFwHours(Integer fwHours) {
		this.fwHours = fwHours;
	}

	public Integer getChildrens() {
		return childrens;
	}

	public void setChildrens(Integer childrens) {
		this.childrens = childrens;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public BigInteger getMobile() {
		return mobile;
	}

	public void setMobile(BigInteger mobile) {
		this.mobile = mobile;
	}

	public BigInteger getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(BigInteger aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}

	public Integer getIsActive() {
		return isActive;
	}

	public void setIsActive(Integer isActive) {
		this.isActive = isActive;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getHsr() {
		return hsr;
	}

	public void setHsr(String hsr) {
		this.hsr = hsr;
	}

	

	
	
}