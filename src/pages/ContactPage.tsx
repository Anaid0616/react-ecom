import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

// --- Styled components ---
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;

    h1 {
text-align: center;
    margin-bottom: 3rem; 
  }

    @media (max-width: 600px) {
      padding: 0.5rem;
    }

  h1 {
    @media (max-width: 600px) {
      font-size: 2.3rem;
    }

`;

const Field = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:focus {
      border-color: #009b8a;
      outline: none;
    }
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #009b8a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #007d6f;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// --- Schema ---
const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Full name must be at least 3 characters.')
      .required('Full name is required.'),
    subject: yup
      .string()
      .min(3, 'Subject must be at least 3 characters.')
      .required('Subject is required.'),
    email: yup
      .string()
      .email('Must be a valid email.')
      .required('Email is required.'),
    body: yup
      .string()
      .min(3, 'Message must be at least 3 characters.')
      .required('Message is required.'),
  })
  .required();

// --- Types ---
type FormData = yup.InferType<typeof schema>;

/**
 * ContactPage component using react-hook-form and yup.
 */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('✅ Submitted with RHF:', data);
    reset(); // Reset the form after submission
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <h1>Contact Us</h1>
      {submitted && (
        <SuccessMessage>
          ✅ Thank you! Your message has been sent.
        </SuccessMessage>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" autoComplete="name" {...register('fullName')} />
          {errors.fullName && (
            <small style={{ color: 'red' }}>{errors.fullName.message}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="subject">Subject</label>
          <input id="subject" autoComplete="off" {...register('subject')} />
          {errors.subject && (
            <small style={{ color: 'red' }}>{errors.subject.message}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <small style={{ color: 'red' }}>{errors.email.message}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            rows={5}
            autoComplete="off"
            {...register('body')}
          />
          {errors.body && (
            <small style={{ color: 'red' }}>{errors.body.message}</small>
          )}
        </Field>

        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
}
