'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { PRODUCTS } from '@/data/products'
import { Arrow } from './ui'

interface F {
  name: string
  phone: string
  email: string
  businessType: string
  model: string
  message: string
}

const TYPES = ['E-Rickshaw Operator', 'EV Dealer', 'Fleet Owner', 'OEM Manufacturer', 'Distributor', 'End User', 'Other']

export default function ContactForm() {
  const params = useSearchParams()
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<F>({ defaultValues: { model: '' } })

  useEffect(() => {
    const m = params.get('model')
    if (m && PRODUCTS.some((p) => p.id === m)) setValue('model', m)
    if (params.get('topic') === 'custom') setValue('model', 'Custom configuration')
  }, [params, setValue])

  const onSubmit = async (d: F) => {
    setBusy(true)
    setSent(false)
    const message = d.model ? `Model of interest: ${d.model}\n\n${d.message}` : d.message
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: d.name, phone: d.phone, email: d.email, businessType: d.businessType, message }),
      })
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        toast.success("Thank you for your inquiry! We'll contact you within 24 hours.")
        setSent(true)
        reset()
      } else toast.error(j.error || 'Something went wrong. Please try again.')
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const Err = ({ m }: { m?: string }) => (m ? <span className="err" role="alert">{m}</span> : null)

  return (
    <form className="f" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact enquiry">
      <h3>Send Us a Message</h3>
      <p>We respond to all enquiries within 24 hours.</p>
      <div className="fld"><label htmlFor="fn">Full Name *</label>
        <input id="fn" autoComplete="name" className={errors.name ? 'bad' : ''} {...register('name', { required: 'Please enter your name' })} /><Err m={errors.name?.message} /></div>
      <div className="fld"><label htmlFor="fp">Phone Number *</label>
        <input id="fp" inputMode="numeric" autoComplete="tel" placeholder="10-digit number" className={errors.phone ? 'bad' : ''} {...register('phone', { required: 'Please enter your phone number', pattern: { value: /^[0-9]{10}$/, message: 'Enter a 10-digit phone number' } })} /><Err m={errors.phone?.message} /></div>
      <div className="fld"><label htmlFor="fe">Email Address *</label>
        <input id="fe" type="email" autoComplete="email" className={errors.email ? 'bad' : ''} {...register('email', { required: 'Please enter your email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: 'Enter a valid email address' } })} /><Err m={errors.email?.message} /></div>
      <div className="fld"><label htmlFor="fb">Business Type *</label>
        <select id="fb" className={errors.businessType ? 'bad' : ''} {...register('businessType', { required: 'Please select a business type' })}>
          <option value="">Select Business Type</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select><Err m={errors.businessType?.message} /></div>
      <div className="fld full"><label htmlFor="fmod">Model of interest (optional)</label>
        <select id="fmod" {...register('model')}>
          <option value="">Not sure yet</option>
          {PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.id} — {p.voltage}, {p.capacity}</option>)}
          <option value="Custom configuration">Custom configuration</option>
        </select></div>
      <div className="fld full"><label htmlFor="fm">Message *</label>
        <textarea id="fm" className={errors.message ? 'bad' : ''} {...register('message', { required: 'Please enter a message' })} /><Err m={errors.message?.message} /></div>
      <div className="fsub">
        <small>Fields marked * are required.</small>
        <button className="btn btn-dark" type="submit" disabled={busy}>{busy ? 'Sending…' : <>Send Message <Arrow /></>}</button>
      </div>
      {sent && <div className="ok" role="status">Message sent. We&apos;ll be in touch within 24 hours.</div>}
    </form>
  )
}
