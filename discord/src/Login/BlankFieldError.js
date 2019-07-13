class BlankFieldError extends Error {
	constructor(token, username, password) {
		super()
		this.fields = [token, username, password]
		this.errorMessage = ["This field is required", "This field is required", "This field is required"];
	}

	setErrorMessage(id, message) {
		this.errorMessage[id] = message;
	}

	getErrorMessage(id) {
		if (id === "token") {
			return this.errorMessage[0]
		}
		if (id === "username") {
			return this.errorMessage[1]
		}
		if (id === "password") {
			return this.errorMessage[2]
		}
	}

	token() {
		return this.fields[0]
	}

	username() {
		return this.fields[1]
	}

	password() {
		return this.fields[2]
	}
}
export default BlankFieldError;