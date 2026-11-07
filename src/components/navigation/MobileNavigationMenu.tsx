import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { isNavItemActive, type NavItem } from '../../data/navigation'
import { HEADER_SCROLL_OFFSET } from '../../constants/layout'

interface MobileNavigationMenuProps {
  items: NavItem[]
  onClose: () => void
}

export function MobileNavigationMenu({ items, onClose }: MobileNavigationMenuProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [openItems, setOpenItems] = useState<string[]>([])
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const toggleItem = (path: string) => {
    setOpenItems((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path],
    )
  }

  const scrollToAnchor = (path: string, anchor: string) => {
    const element = document.getElementById(anchor)
    if (!element) return
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - HEADER_SCROLL_OFFSET
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    window.history.replaceState(null, '', `${path}#${anchor}`)
  }

  const handleNavClick = (item: NavItem, anchor?: string) => {
    onClose()

    if (anchor) {
      if (isNavItemActive(location.pathname, item)) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToAnchor(item.path, anchor))
        })
      } else {
        navigate(`${item.path}#${anchor}`)
      }
      return
    }

    navigate(item.path)
  }

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const hasSections = item.sections && item.sections.length > 0
        const isOpen = openItems.includes(item.path)
        const isActive = isNavItemActive(location.pathname, item)

        return (
          <div key={item.path}>
            {hasSections ? (
              <>
                <div className="flex w-full items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      navigate(item.path)
                      onClose()
                    }}
                    className={`relative flex flex-1 items-center rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 ${
                      isActive
                        ? 'text-brand-500 font-semibold'
                        : 'bg-transparent text-neutral-700 hover:bg-neutral-50 hover:text-brand-500'
                    }`}
                    aria-label={item.label}
                  >
                    {isActive && (
                      <span className="absolute bottom-0 left-4 h-0.5 w-8 rounded-full bg-brand-500" />
                    )}
                    <span>{item.label}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.path)}
                    className="rounded-lg p-2.5 text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                    aria-label={`${item.label} - ${isOpen ? 'Close' : 'Open'} sections`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                <div
                  ref={(el) => {
                    sectionRefs.current[item.path] = el
                  }}
                  className={`ml-4 overflow-hidden border-l-2 border-neutral-200 pl-4 transition-all duration-200 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'
                  }`}
                  style={{ willChange: 'max-height, opacity' }}
                >
                  <div className="space-y-1">
                    {item.sections?.map((section, index) => {
                      const currentHash = window.location.hash.replace('#', '')
                      const isSectionActive = isActive && currentHash === section.anchor

                      return (
                        <button
                          key={section.anchor}
                          type="button"
                          onClick={() => handleNavClick(item, section.anchor)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-150 focus:outline-none focus:ring-0 focus:border-0 ${
                            isSectionActive
                              ? 'text-brand-500 font-semibold'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-500'
                          }`}
                          style={{
                            animation: isOpen
                              ? `slideInLeft 0.2s ease-out ${index * 0.03}s both`
                              : 'none',
                            willChange: isOpen ? 'transform, opacity' : 'auto',
                          }}
                          aria-label={`${item.label} - ${section.label}`}
                        >
                          {section.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  navigate(item.path)
                  onClose()
                }}
                className={`relative block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-0 focus:border-0 ${
                  isActive
                    ? 'text-brand-500 font-semibold'
                    : 'bg-transparent text-neutral-700 hover:bg-neutral-50 hover:text-brand-500'
                }`}
                aria-label={item.label}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 h-0.5 w-8 rounded-full bg-brand-500" />
                )}
              </button>
            )}
          </div>
        )
      })}
    </nav>
  )
}
