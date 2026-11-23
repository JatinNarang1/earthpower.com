'use client'

import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
  itemLabel?: string
  scrollTargetId?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  itemLabel = 'models',
  scrollTargetId,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
    if (scrollTargetId) {
      const el = document.getElementById(scrollTargetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Calculate visible slice range (1-based)
  const startIdx = (currentPage - 1) * pageSize + 1
  const endIdx = Math.min(currentPage * pageSize, totalItems)

  // Generate page numbers to render
  const getPages = () => {
    const pages: (number | 'ellipsis')[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('ellipsis')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('ellipsis')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <nav className="ep-pagination-bar" aria-label={`${itemLabel} pagination`}>
      <div className="ep-pagination-summary" aria-live="polite">
        Showing <strong>{startIdx}–{endIdx}</strong> of <strong>{totalItems}</strong> {itemLabel}
        <span className="ep-pagination-page-indicator"> · Page {currentPage} of {totalPages}</span>
      </div>

      <div className="ep-pagination-controls">
        <button
          type="button"
          className="ep-page-btn ep-page-nav-btn"
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Previous</span>
        </button>

        <div className="ep-page-numbers" role="group" aria-label="Page numbers">
          {getPages().map((p, idx) => {
            if (p === 'ellipsis') {
              return (
                <span key={`ellipsis-${idx}`} className="ep-page-ellipsis" aria-hidden="true">
                  …
                </span>
              )
            }
            const isCurrent = p === currentPage
            return (
              <button
                key={p}
                type="button"
                className={`ep-page-btn ep-page-num ${isCurrent ? 'active' : ''}`}
                onClick={() => handlePage(p)}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`Page ${p}`}
              >
                {p}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="ep-page-btn ep-page-nav-btn"
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          <span>Next</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
