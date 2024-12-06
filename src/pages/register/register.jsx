
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import imgLogo from '../../assets/imgAcuaterra.jpeg';
import '../../Styles/Styles.css';

function Register() {
    const handleInputChange = (value) => {
      console.log('Valor del input:', value);
    };
  
    return (
      <div>
        <h1>Registrate</h1>
        <img
          src={imgLogo}
          alt='logo acuaTerra'
        />
  
        <h3>AcuaTerra</h3>
        <InputComponent
          label="Nombre de Usuario: "
          placeholder="Escribe aquí tu usuario"
          onChange={handleInputChange}
        />
  
        <InputComponent
          label="Correo Electronico: "
          placeholder="Escribe aquí tu correo"
          onChange={handleInputChange}
        />
  
        <InputComponent
          label="Contraseña: "
          placeholder="Escribe aquí tu contraseña"
          onChange={handleInputChange}
        />
  
        <ButtonComponent 
          label="Registrar Usuario" 
          
        />
  
      
      </div>
    );
  };
  
  export default Register
  