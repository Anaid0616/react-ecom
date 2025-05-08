import { useState } from 'react';
import styled from 'styled-components';

// --- Styled components ---
const Wrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
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
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #007d6f;
  }
`;

// --- Types ---
type FormData = {
  fullName: string;
  subject: string;
  email: string;
  body: string;
};

/**
 * ContactPage component.
 *
 * Renders a contact form with the following fields:
 * - Full name (required, minimum 3 characters)
 * - Subject (required, minimum 3 characters)
 * - Email (required, must be a valid email address)
 * - Body (required, minimum 3 characters)
 *
 * Upon successful validation, the form submission is logged to the console.
 *
 * @returns A React component that displays the contact form.
 */
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.fullName.trim().length < 3)
      newErrors.fullName = 'Full name must be at least 3 characters.';
    if (formData.subject.trim().length < 3)
      newErrors.subject = 'Subject must be at least 3 characters.';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email address.';
    if (formData.body.trim().length < 3)
      newErrors.body = 'Message must be at least 3 characters.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('✅ Submitted Data:', formData);
    }
  };

  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <Field>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <small style={{ color: 'red' }}>{errors.fullName}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && (
            <small style={{ color: 'red' }}>{errors.subject}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small style={{ color: 'red' }}>{errors.email}</small>
          )}
        </Field>

        <Field>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            autoComplete="off"
            rows={5}
            value={formData.body}
            onChange={handleChange}
            required
          />
          {errors.body && <small style={{ color: 'red' }}>{errors.body}</small>}
        </Field>

        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
}
