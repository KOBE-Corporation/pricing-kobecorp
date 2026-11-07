import { useLanguage } from '../contexts/useLanguage'

export type NavItem = {
  label: string
  path: string
  /** Chemins additionnels considérés actifs (ex. `/` pour SaaS) */
  matchPaths?: string[]
  sections?: { label: string; anchor: string }[]
}

export function useNavigationItems(): NavItem[] {
  const { language, t } = useLanguage()
  const fr = language === 'fr'

  return [
    {
      label: t('nav.saas'),
      path: '/saas',
      matchPaths: ['/', '/saas'],
      sections: [
        { label: t('nav.home'), anchor: 'hero' },
        { label: t('nav.services'), anchor: 'services' },
        { label: fr ? 'Programmes' : 'Programs', anchor: 'forfaits' },
        { label: fr ? 'Missions' : 'Missions', anchor: 'missions' },
        { label: fr ? 'Processus' : 'Process', anchor: 'processus' },
      ],
    },
    {
      label: t('nav.fullControl'),
      path: '/full-control',
      sections: [
        { label: t('nav.home'), anchor: 'hero' },
        { label: t('nav.services'), anchor: 'services' },
        { label: fr ? 'Programmes' : 'Programs', anchor: 'forfaits' },
        { label: fr ? 'Missions' : 'Missions', anchor: 'missions' },
        { label: fr ? 'Processus' : 'Process', anchor: 'processus' },
      ],
    },
    {
      label: t('nav.hosting'),
      path: '/hebergement',
      sections: [
        { label: t('nav.home'), anchor: 'hero' },
        { label: t('nav.services'), anchor: 'services' },
      ],
    },
    {
      label: t('nav.contact'),
      path: '/contact',
    },
  ]
}

export function isNavItemActive(pathname: string, item: NavItem): boolean {
  const paths = item.matchPaths ?? [item.path]
  return paths.some((p) => pathname === p || (p !== '/' && pathname.startsWith(`${p}/`)))
}
