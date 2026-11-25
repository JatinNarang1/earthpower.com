'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { PRODUCTS } from '@/data/products'
import { Arrow } from './ui'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '8ae30dbd-7510-48f3-a4ba-6966d0b1a710'

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
  const [apiError, setApiError] = useState<string | null>(null)
  const inFlightRef = useRef(false)
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<F>({ defaultValues: { model: '' } })

  useEffect(() => {
    const m = params.get('model')
    if (m && PRODUCTS.some((p) => p.id === m)) setValue('model', m)
    if (params.get('topic') === 'custom') setValue('model', 'Custom configuration')
  }, [params, setValue])

  const onSubmit = async (d: F, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault()
    if (inFlightRef.current) return
    inFlightRef.current = true
    setBusy(true)
    setSent(false)
    setApiError(null)

    const cleanName = d.name.trim()
    const cleanPhone = d.phone.replace(/\D/g, '').slice(-10)
    const cleanEmail = d.email.trim()
    const cleanMessage = d.message.trim()

    try {
      const formEl = event?.target instanceof HTMLFormElement ? event.target : null
      const formData = formEl ? new FormData(formEl) : new FormData()
      formData.set('access_key', WEB3FORMS_ACCESS_KEY)
      formData.set('name', cleanName)
      if (cleanPhone) formData.set('phone', cleanPhone)
      formData.set('email', cleanEmail)
      formData.set('businessType', d.businessType)
      if (d.model) formData.set('model', d.model)
      else formData.delete('model')
      formData.set('message', cleanMessage)
      formData.set(
        'subject',
        d.model
          ? `New Earth Power Enquiry (${d.businessType} · ${d.model}) from ${cleanName}`
          : `New Earth Power Enquiry (${d.businessType}) from ${cleanName}`,
      )
      formData.set('from_name', 'Earth Power Website')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        toast.success("Thank you for contacting Earth Power! We'll respond within 24 hours.")
        setSent(true)
        reset()
      } else {
        const msg =
          typeof data?.message === 'string' && data.message.trim()
            ? data.message.trim()
            : 'We could not send your enquiry right now. Please try again or email us directly.'
        setApiError(msg)
        toast.error(msg)
      }
    } catch {
      const msg = 'Unable to reach our enquiry service right now. Please check your internet connection and try again.'
      setApiError(msg)
      toast.error(msg)
    } finally {
      inFlightRef.current = false
      setBusy(false)
    }
  }

  const Err = ({ m }: { m?: string }) => (m ? <span className="err" role="alert">{m}</span> : null)

  return (
    <form className="f" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact enquiry">
      <h3>Send Us a Message</h3>
      <p>We respond to all enquiries within 24 hours.</p>
      <div className="fld"><label htmlFor="fn">Full Name *</label>
        <input id="fn" autoComplete="name" className={errors.name ? 'bad' : ''} {...register('name', { required: 'Please enter your name', validate: (v) => v.trim().length > 0 || 'Please enter your name' })} /><Err m={errors.name?.message} /></div>
      <div className="fld"><label htmlFor="fp">Phone Number *</label>
        <input id="fp" inputMode="numeric" autoComplete="tel" placeholder="10-digit number" className={errors.phone ? 'bad' : ''} {...register('phone', { required: 'Please enter your phone number', validate: (v) => /^[0-9]{10}$/.test(v.replace(/[\s\-()]/g, '').replace(/^\+?91/, '')) || 'Enter a 10-digit phone number' })} /><Err m={errors.phone?.message} /></div>
      <div className="fld"><label htmlFor="fe">Email Address *</label>
        <input id="fe" type="email" autoComplete="email" className={errors.email ? 'bad' : ''} {...register('email', { required: 'Please enter your email', validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address' })} /><Err m={errors.email?.message} /></div>
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
        <textarea id="fm" className={errors.message ? 'bad' : ''} {...register('message', { required: 'Please enter a message', validate: (v) => v.trim().length > 0 || 'Please enter a message' })} /><Err m={errors.message?.message} /></div>
      <div className="fsub">
        <small>Fields marked * are required.</small>
        <button className="btn btn-dark" type="submit" disabled={busy} aria-busy={busy}>
          {busy ? 'Sending Message…' : <>Send Message <Arrow /></>}
        </button>
      </div>
      {sent && (
        <div className="ok" role="status">
          Thank you for contacting Earth Power. Your enquiry has been sent and our team will respond within 24 hours.
        </div>
      )}
      {apiError && <div className="bad-box" role="alert">{apiError}</div>}
    </form>
  )
}
