'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CATEGORIES, PRODUCTS } from '@/data/products'
import { Arrow } from './ui'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '8ae30dbd-7510-48f3-a4ba-6966d0b1a710'
const SUCCESS_MESSAGE = 'Thank you for contacting us. Our team will get back to you soon.'

interface F {
  name: string
  phone: string
  email: string
  businessType: string
  model: string
  message: string
}

const BUSINESS_TYPES = CATEGORIES.map((c) => c.label)

export default function ContactForm() {
  const params = useSearchParams()
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const [btOpen, setBtOpen] = useState(false)
  const [btShowAll, setBtShowAll] = useState(true)
  const [btActiveIdx, setBtActiveIdx] = useState(-1)
  const comboRef = useRef<HTMLDivElement>(null)
  const inFlightRef = useRef(false)
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<F>({
    defaultValues: { businessType: '', model: '' },
  })

  const btValue = watch('businessType') ?? ''

  const filteredTypes = useMemo(() => {
    if (btShowAll || !btValue.trim()) return BUSINESS_TYPES
    const q = btValue.trim().toLowerCase()
    const matches = BUSINESS_TYPES.filter((t) => t.toLowerCase().includes(q))
    return matches.length > 0 ? matches : BUSINESS_TYPES
  }, [btShowAll, btValue])

  useEffect(() => {
    const m = params.get('model')
    if (m && PRODUCTS.some((p) => p.id === m)) setValue('model', m)
    if (params.get('topic') === 'custom') setValue('model', 'Custom configuration')
  }, [params, setValue])

  useEffect(() => {
    if (!btOpen) return
    const onOutside = (e: MouseEvent) => {
      if (comboRef.current && !comboRef.current.contains(e.target as Node)) {
        setBtOpen(false)
        setBtActiveIdx(-1)
      }
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [btOpen])

  const selectBusinessType = (val: string) => {
    setValue('businessType', val, { shouldValidate: true, shouldDirty: true })
    setBtOpen(false)
    setBtActiveIdx(-1)
    setBtShowAll(true)
  }

  const btField = register('businessType', {
    required: 'Please select or enter a business type',
    validate: (v) => v.trim().length > 0 || 'Please select or enter a business type',
  })

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
    const cleanBusinessType = d.businessType.trim()
    const cleanMessage = d.message.trim()

    try {
      const formEl = event?.target instanceof HTMLFormElement ? event.target : null
      const formData = formEl ? new FormData(formEl) : new FormData()
      formData.set('access_key', WEB3FORMS_ACCESS_KEY)
      formData.set('name', cleanName)
      if (cleanPhone) formData.set('phone', cleanPhone)
      formData.set('email', cleanEmail)
      formData.set('businessType', cleanBusinessType)
      if (d.model) formData.set('model', d.model)
      else formData.delete('model')
      formData.set('message', cleanMessage)
      formData.set(
        'subject',
        d.model
          ? `New Earth Power Enquiry (${cleanBusinessType} · ${d.model}) from ${cleanName}`
          : `New Earth Power Enquiry (${cleanBusinessType}) from ${cleanName}`,
      )
      formData.set('from_name', 'Earth Power Website')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        toast.success(SUCCESS_MESSAGE)
        setSent(true)
        reset()
        setBtOpen(false)
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
        <div className="combo" ref={comboRef}>
          <input
            id="fb"
            type="text"
            role="combobox"
            autoComplete="off"
            placeholder="Select or type business type"
            aria-autocomplete="list"
            aria-expanded={btOpen}
            aria-controls="fb-listbox"
            aria-activedescendant={btOpen && btActiveIdx >= 0 ? `fb-opt-${btActiveIdx}` : undefined}
            className={errors.businessType ? 'bad' : ''}
            {...btField}
            onFocus={() => {
              setBtShowAll(true)
              setBtOpen(true)
            }}
            onClick={() => {
              setBtShowAll(true)
              setBtOpen(true)
            }}
            onChange={(e) => {
              btField.onChange(e)
              setBtShowAll(false)
              setBtOpen(true)
              setBtActiveIdx(-1)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                if (!btOpen) {
                  setBtShowAll(true)
                  setBtOpen(true)
                  setBtActiveIdx(0)
                } else {
                  setBtActiveIdx((i) => (i + 1) % filteredTypes.length)
                }
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                if (btOpen) {
                  setBtActiveIdx((i) => (i <= 0 ? filteredTypes.length - 1 : i - 1))
                }
              } else if (e.key === 'Enter' && btOpen && btActiveIdx >= 0 && filteredTypes[btActiveIdx]) {
                e.preventDefault()
                selectBusinessType(filteredTypes[btActiveIdx])
              } else if (e.key === 'Escape' && btOpen) {
                e.preventDefault()
                setBtOpen(false)
                setBtActiveIdx(-1)
              } else if (e.key === 'Tab') {
                setBtOpen(false)
                setBtActiveIdx(-1)
              }
            }}
          />
          <button
            type="button"
            className="combo-toggle"
            aria-label={btOpen ? 'Hide business type options' : 'Show business type options'}
            aria-expanded={btOpen}
            tabIndex={-1}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setBtShowAll(true)
              setBtOpen((o) => !o)
              setBtActiveIdx(-1)
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d={btOpen ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
            </svg>
          </button>
          {btOpen && (
            <ul id="fb-listbox" className="combo-list" role="listbox" aria-label="Business Type options">
              {filteredTypes.map((opt, idx) => {
                const selected = btValue.trim().toLowerCase() === opt.toLowerCase()
                return (
                  <li key={opt} role="option" id={`fb-opt-${idx}`} aria-selected={selected}>
                    <button
                      type="button"
                      className={`combo-opt${idx === btActiveIdx ? ' active' : ''}${selected ? ' selected' : ''}`}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        selectBusinessType(opt)
                      }}
                    >
                      <span>{opt}</span>
                      {selected && (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  </li>
                )
              })}
              <li className="combo-hint" role="presentation">
                Or type your own business type above
              </li>
            </ul>
          )}
        </div>
        <Err m={errors.businessType?.message} /></div>
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
          {SUCCESS_MESSAGE}
        </div>
      )}
      {apiError && <div className="bad-box" role="alert">{apiError}</div>}
    </form>
  )
}
