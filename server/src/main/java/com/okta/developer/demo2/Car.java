package com.okta.developer.demo2;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
// @Getter @Setter
@NoArgsConstructor
/* @ToString */ @EqualsAndHashCode
public class Car {
	@Id
	@GeneratedValue
	private Long id;

	private @NonNull String name;

	private Long managerId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getManagerId() {
		return managerId;
	}

	public void setManagerId(Long managerId) {
		this.managerId = managerId;
	}

	@Override
	public String toString() {
		return "Car [id=" + id + ", name=" + name + ", managerId=" + managerId + "]";
	}

}