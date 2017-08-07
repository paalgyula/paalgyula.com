package com.paalgyula.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="comments")
public class Comment implements Serializable {

	/**
	 * Serial version UID (OLD Style)
	 */
	private static final long serialVersionUID = 8705453956708953850L;
	
	@Id
	@Column(name="ID")
	private Long id;
	
	@Lob
	@Column(name="COMMENT")
	private String comment;
	
	@Column(name="POST_DATE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	
	
}
