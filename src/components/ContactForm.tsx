import React, { useState } from 'react';
import {
  TextField,
  Button,
  CircularProgress
} from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';

// Типизация данных формы
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSuccess: (message: string) => void;
}

// Используем тег form напрямую, а не через props.component
const FormContainer = styled.form`
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

// Кастомный стиль для текстовых полей с улучшенной визуальной обратной связью
const StyledTextField = styled(TextField)`
    margin-bottom: 1.5rem;
    width: 100%;

    & .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: #555;
        }

        &.Mui-focused fieldset {
            border-color: #333;
            border-width: 2px;
        }
    }

    & .MuiInputLabel-root.Mui-focused {
        color: #333;
    }
`;

// Стилизованная кнопка отправки формы
const SubmitButton = styled(Button)`
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    background-color: #333;

    &:hover {
        background-color: #222;
    }

    &.Mui-disabled {
        background-color: #ccc;
        color: #666;
    }
`;

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Обработчик изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Сбрасываем ошибку при вводе
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Функция валидации формы
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/contact', formData);
      onSuccess(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Используем обычный тег form вместо Box с component="form"
    <FormContainer onSubmit={handleSubmit} noValidate>
      <StyledTextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        disabled={isSubmitting}
        InputProps={{
          'aria-required': 'true',
        }}
      />

      <StyledTextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        disabled={isSubmitting}
        InputProps={{
          'aria-required': 'true',
        }}
      />

      <StyledTextField
        id="message"
        name="message"
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        disabled={isSubmitting}
        InputProps={{
          'aria-required': 'true',
        }}
      />

      <SubmitButton
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;