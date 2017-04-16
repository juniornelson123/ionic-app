export class Session{
	key = "currentUser"

	create(user){
		console.log(user)
		localStorage.setItem(this.key,JSON.stringify(user))
	}

	currentUser(){
		return JSON.parse(localStorage.getItem(this.key))
	}

	setCurrentUser(user){
		this.remove()
		this.create(user)
		return this.currentUser()
	}

	remove(){
		localStorage.removeItem(this.key)
	}
}