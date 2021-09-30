package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "user_name")
	private String userName;
	
	
	@Column(name = "email", unique=true)
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "cpassword")
	private String cpassword;
	
	@Column(name = "sequrity_que")
	private String sequrityQue;
	
	@Column(name = "answer")
	private String answer;
	
	public User() {}

	public User(String userName, String email, String password, String cpassword,
			String sequrityQue, String answer) {
		super();
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.cpassword = cpassword;
		this.sequrityQue = sequrityQue;
		this.answer = answer;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCpassword() {
		return cpassword;
	}

	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}

	public String getSequrityQue() {
		return sequrityQue;
	}

	public void setSequrityQue(String sequrityQue) {
		this.sequrityQue = sequrityQue;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	
}