'use client'

import { useEffect } from 'react'

export default function RbDrawerClose() {
  useEffect(() => {
    const onNavigate = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest?.('.x8r2-drawer-panel a')
      if (link) {
        const toggle = document.getElementById('x8r2-navck') as HTMLInputElement | null
        if (toggle) toggle.checked = false
      }
    }
    document.addEventListener('click', onNavigate)
    return () => document.removeEventListener('click', onNavigate)
  }, [])

  return null
}
