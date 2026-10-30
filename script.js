//your JS code here. If required.
let btn=document.getElementById("submit")
btn.addEventListener("click",()=>storage(e))

function storage(e)
{
	e.preventDefault()
	let password= document.getElementById("password").value
	let confirmPassword= document.getElementById("confirm-password").value
	let name= document.getElementById("name").value
	let email= document.getElementById("email").value
	if(password===confirmPassword)
	{
		sessionStorage.setItem("name",name)
		sessionStorage.setItem("email",email)
		sessionStorage.setItem("password",password)
		alert("Sign up successful!")
	}
	else
	{
		alert("Passwords do not match")
	}
}