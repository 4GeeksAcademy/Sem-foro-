import React from "react";
import { useState } from "react"; //importar el hooks 




//create your first component
const Home = () => {

	// declaración de estados 
	const [rojo, setRojo] = useState("red")
	const [amarillo, setAmarillo] = useState("yellow")
	const [verde, setVerde] = useState("green")

	function lightred () {

		setRojo("glow")
		setAmarillo("yellow")
		setVerde("verde")

	}
	function lightamarillo () {

		setRojo("red")
		setAmarillo("glow")
		setVerde("verde")

	}
	function lightverde () {

		setRojo("red")
		setAmarillo("yellow")
		setVerde("glow")

	}



	return (

		<div className="body">
			<div className=" barra ">
			</div>
			<div className="cuerpo bg-black ">
				<div className= {"rounded-circle bg-danger luz " + rojo} onClick={lightred}>
					
				</div>
				<div className={" rounded-circle bg-warning luz " + amarillo } onClick={lightamarillo}><p> </p> </div>
				<div className={" light rounded-circle bg-success luz " + verde } onClick={lightverde} > <p> </p></div>
			</div>
		</div>
		





	);
};

export default Home;
