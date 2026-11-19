'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { PRODUCTS, getProduct } from '@/data/products'
import { Arrow } from './ui'

interface F {
  name: string
  phone: string
  email: string
  model: string
  serial: string
  date: string
  invoice: string
  dealer: string
  city: string
  confirm: boolean
}

/**
 * Warranty registration. Submits through the site's existing /api/contact mail pipeline
 * (businessType "Warranty Registration"), so registrations arrive in the company inbox.
 */
export default function WarrantyForm() {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState<F | null>(null)
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<F>({ defaultValues: { model: '' } })
  const selected = getProduct(watch('model'))
  const today = new Date().toISOString().slice(0, 10)

  const onSubmit = async (d: F) => {
    setBusy(true)
    const message = [
      'WARRANTY REGISTRATION',
      `Product model: ${d.model}`,
      `Battery serial number: ${d.serial}`,
      `Purchase date: ${d.date}`,
      `Invoice number: ${d.invoice || '—'}`,
      `Dealer: ${d.dealer}, ${d.city}`,
    ].join('\n')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: d.name, phone: d.phone, email: d.email, businessType: 'Warranty Registration', message }),
      })
      const j = await r.json().catch(() => ({}))
      if (r.ok) {
        setDone(d)
        reset()
        toast.success('Warranty registration submitted.')
      } else toast.error(j.error || 'Could not submit. Please try again or email us.')
    } catch {
      toast.error('Network error. Please try again or email us.')
    } finally {
      setBusy(false)
    }
  }

  const Err = ({ m }: { m?: string }) => (m ? <span className="err" role="alert">{m}</span> : null)

  return (
    <form className="f" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Warranty registration">
      <h3>Warranty registration</h3>
      <p>Fields marked * are required. Your details are sent to the Earth Power team by email.</p>

      <fieldset>
        <legend>Customer</legend>
        <div className="fld"><label htmlFor="wn">Customer name *</label>
          <input id="wn" autoComplete="name" className={errors.name ? 'bad' : ''} {...register('name', { required: 'Please enter your name' })} /><Err m={errors.name?.message} /></div>
        <div className="fld"><label htmlFor="wp">Mobile number *</label>
          <input id="wp" inputMode="numeric" autoComplete="tel" placeholder="10-digit number" className={errors.phone ? 'bad' : ''} {...register('phone', { required: 'Please enter your mobile number', pattern: { value: /^[0-9]{10}$/, message: 'Enter a 10-digit mobile number' } })} /><Err m={errors.phone?.message} /></div>
        <div className="fld full"><label htmlFor="we">Email address *</label>
          <input id="we" type="email" autoComplete="email" className={errors.email ? 'bad' : ''} {...register('email', { required: 'Please enter your email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: 'Enter a valid email address' } })} /><Err m={errors.email?.message} /></div>
      </fieldset>

      <fieldset>
        <legend>Product</legend>
        <div className="fld"><label htmlFor="wm">Product model *</label>
          <select id="wm" className={errors.model ? 'bad' : ''} {...register('model', { required: 'Please choose your model' })}>
            <option value="">Select model</option>
            {PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.id} — {p.voltage}, {p.capacity}</option>)}
          </select><Err m={errors.model?.message} /></div>
        <div className="fld"><label htmlFor="ws">Battery serial number *</label>
          <input id="ws" autoComplete="off" className={errors.serial ? 'bad' : ''} {...register('serial', { required: 'Please enter the serial number' })} /><Err m={errors.serial?.message} /></div>
        <div className={`sel-prod${selected ? ' on' : ''}`} aria-live="polite">
          {selected && (
            <>
              <Image src={selected.image} alt="" width={64} height={64} />
              <div><b>{selected.id}</b><span>{selected.voltage} · {selected.capacity} · {selected.energy} · 5-year warranty</span></div>
            </>
          )}
        </div>
        <div className="fld"><label htmlFor="wd">Purchase date *</label>
          <input id="wd" type="date" max={today} className={errors.date ? 'bad' : ''} {...register('date', { required: 'Please enter the purchase date' })} /><Err m={errors.date?.message} /></div>
        <div className="fld"><label htmlFor="wi">Invoice number (optional)</label>
          <input id="wi" autoComplete="off" {...register('invoice')} /></div>
      </fieldset>

      <fieldset>
        <legend>Dealer</legend>
        <div className="fld"><label htmlFor="wdn">Dealer name *</label>
          <input id="wdn" className={errors.dealer ? 'bad' : ''} {...register('dealer', { required: 'Please enter the dealer name' })} /><Err m={errors.dealer?.message} /></div>
        <div className="fld"><label htmlFor="wdl">Dealer city / location *</label>
          <input id="wdl" className={errors.city ? 'bad' : ''} {...register('city', { required: 'Please enter the dealer location' })} /><Err m={errors.city?.message} /></div>
      </fieldset>

      <label className="chk2">
        <input type="checkbox" {...register('confirm', { required: 'Please confirm the details are correct' })} />
        <span>I confirm the details above are correct and that I have read the <a className="link" style={{ display: 'inline' }} href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. *</span>
      </label>
      <Err m={errors.confirm?.message} />

      <div className="fsub">
        <small>Have your purchase invoice ready for any follow-up from Earth Power.</small>
        <button className="btn btn-dark" type="submit" disabled={busy}>{busy ? 'Submitting…' : <>Submit registration <Arrow /></>}</button>
      </div>

      {done && (
        <div className="result on" role="status">
          <h4>Registration submitted</h4>
          <p style={{ marginBottom: 10 }}>Thank you, {done.name}. Our team has received your details and will confirm by email.</p>
          <dl>
            <dt>Model</dt><dd>{done.model}</dd>
            <dt>Serial number</dt><dd>{done.serial}</dd>
            <dt>Purchase date</dt><dd>{done.date}</dd>
            <dt>Dealer</dt><dd>{done.dealer}, {done.city}</dd>
          </dl>
        </div>
      )}
    </form>
  )
}
