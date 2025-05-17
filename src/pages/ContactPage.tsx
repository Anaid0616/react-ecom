import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Wrapper, Field, Button, SuccessMessage } from './ContactPage.styles';
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Contact Us | Vibity</title>
        <meta
          name="description"
          content="Contact Vibity with your questions or feedback."
        />
      </Helmet>
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
            <input
              id="fullName"
              autoComplete="name"
              {...register('fullName')}
            />
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
    </>
  );
}
