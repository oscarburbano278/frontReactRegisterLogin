import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import imgLogo from '../../assets/imgAcuaterra.jpeg';
import '../../Styles/Styles.css';
import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    // Función para validar un campo específico
    const validateField = (field, value) => {
      let error = '';
  
      switch (field) {
        case 'username':
          if (!value.trim()) {
            error = 'El nombre de usuario es obligatorio.';
          }
          break;
  
        case 'email':
          if (!value.trim()) {
            error = 'El correo electrónico es obligatorio.';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'El correo electrónico no es válido.';
          }
          break;
  
        case 'password':
          if (!value.trim()) {
            error = 'La contraseña es obligatoria.';
          } else if (value.length < 8) {
            error = 'La contraseña debe tener al menos 8 caracteres.';
          } else if (!/[!@#$%^&*]/.test(value)) {
            error = 'La contraseña debe contener al menos un carácter especial (!@#$%^&*).';
          }
          break;
  
        default:
          break;
      }
  
      return error;
    };
  
    // Función para manejar los cambios en los inputs
    const handleInputChange = (field, value) => {
      // Actualiza el estado del formulario
      setFormData({
        ...formData,
        [field]: value,
      });
  
      // Valida el campo en tiempo real
      const fieldError = validateField(field, value);
      setErrors({
        ...errors,
        [field]: fieldError,
      });
    };
  
    // Función para validar todos los campos al presionar el botón
    const validateForm = () => {
      const newErrors = {
        username: validateField('username', formData.username),
        email: validateField('email', formData.email),
        password: validateField('password', formData.password),
      };
  
      setErrors(newErrors);
  
      // Devuelve `true` si no hay errores
      return Object.values(newErrors).every((error) => error === '');
    };
  
    // Función para manejar el envío del formulario
    const handleSubmit = () => {
      if (validateForm()) {
        alert('Formulario enviado con éxito');
        console.log('Datos del formulario:', formData);
        // Aquí puedes enviar los datos a un servidor o realizar otra acción
      }
    };
  
    return (
      <div>
        <h1>Regístrate</h1>
        <img
          src={imgLogo}
          alt="logo acuaTerra"
        />
  
        <h3>AcuaTerra</h3>
  
        {/* Campo de Nombre de Usuario */}
        <div className="form-group">
        <InputComponent
  label="Nombre de Usuario: "
  placeholder="Escribe aquí tu usuario"
  value={formData.username} // Estado controlado
  onChange={(value) => handleInputChange('username', value)} // Propaga cambios al estado global
/>
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>
  
        {/* Campo de Correo Electrónico */}
        <div className="form-group">
          <InputComponent
            label="Correo Electrónico: "
            placeholder="Escribe aquí tu correo"
            onChange={(value) => handleInputChange('email', value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
  
        {/* Campo de Contraseña */}
        <div className="form-group">
          <InputComponent
            label="Contraseña: "
            placeholder="Escribe aquí tu contraseña"
            type='password'
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
  
        {/* Botón para enviar */}
        <ButtonComponent
          label="Registrar Usuario"
          onClick={handleSubmit}
        />
      </div>
    );
  }
  
  export default Register
  