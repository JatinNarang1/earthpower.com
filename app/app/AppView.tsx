'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CustomerAppSection } from './CustomerAppSection'
import { DealerAppSection } from './DealerAppSection'

export type AppTab = 'customer' | 'dealer'

export function AppView() {
  const [activeTab, setActiveTab] = useState<AppTab>('customer')

  // Check URL hash on initial mount (#dealer, #customer)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('dealer')) {
        setActiveTab('dealer')
      } else if (hash.includes('customer')) {
        setActiveTab('customer')
      }
    }
  }, [])

  const handleTabChange = (tab: AppTab) => {
    if (activeTab === tab) return
    setActiveTab(tab)
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${tab}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, currentTab: AppTab) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const nextTab = currentTab === 'customer' ? 'dealer' : 'customer'
      handleTabChange(nextTab)
      const targetEl = document.getElementById(`tab-${nextTab}`)
      targetEl?.focus()
    }
  }

  return (
    <div className="playstore-page">
      {/* 1. Play Store Breadcrumbs */}
      <div className="ps-breadcrumb-bar">
        <div className="wrap">
          <nav className="ps-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/technology">Technology</Link>
            <span>/</span>
            <b>{activeTab === 'customer' ? 'EarthPower Battery (Customer App)' : 'EarthPower Dealer App (Coming Soon)'}</b>
          </nav>
        </div>
      </div>

      {/* 2. Top Segmented App Navigation Bar */}
      <div className="ps-segmented-nav-wrapper">
        <div className="wrap">
          <div className="ps-segmented-control-container">
            <div
              className="ps-segmented-control"
              role="tablist"
              aria-label="EarthPower Applications Navigation"
            >
              <button
                id="tab-customer"
                type="button"
                role="tab"
                aria-selected={activeTab === 'customer'}
                aria-controls="panel-customer"
                tabIndex={activeTab === 'customer' ? 0 : -1}
                className={`ps-segmented-btn ${activeTab === 'customer' ? 'active' : ''}`}
                onClick={() => handleTabChange('customer')}
                onKeyDown={(e) => handleKeyDown(e, 'customer')}
              >
                <span className="ps-segmented-text">Customer App</span>
                <span className="ps-segmented-pill pill-customer">
                  <span className="ps-segmented-dot" />
                  Available
                </span>
              </button>

              <button
                id="tab-dealer"
                type="button"
                role="tab"
                aria-selected={activeTab === 'dealer'}
                aria-controls="panel-dealer"
                tabIndex={activeTab === 'dealer' ? 0 : -1}
                className={`ps-segmented-btn ${activeTab === 'dealer' ? 'active' : ''}`}
                onClick={() => handleTabChange('dealer')}
                onKeyDown={(e) => handleKeyDown(e, 'dealer')}
              >
                <span className="ps-segmented-text">Dealer App</span>
                <span className="ps-segmented-pill pill-dealer">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tab Panels */}
      <div className="ps-tab-panels">
        <CustomerAppSection
          hidden={activeTab !== 'customer'}
          style={{ display: activeTab === 'customer' ? 'block' : 'none' }}
        />
        <DealerAppSection
          hidden={activeTab !== 'dealer'}
          style={{ display: activeTab === 'dealer' ? 'block' : 'none' }}
        />
      </div>
    </div>
  )
}
