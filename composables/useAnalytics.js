export const useAnalytics = () => {
  const config = useRuntimeConfig()
  const isDev = process.dev
  const route = useRoute()
  
  // Auto-track page views on route changes
  if (process.client && !isDev) {
    watch(() => route.path, (newPath) => {
      trackPageView(newPath, document.title)
    }, { immediate: true })
  }
  
  const trackEvent = (eventName, parameters = {}) => {
    if (isDev) {
      console.log('Analytics (dev mode):', eventName, parameters)
      return
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackPageView = (pagePath, pageTitle) => {
    if (isDev) {
      console.log('Analytics (dev mode): Page View', { pagePath, pageTitle })
      return
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.public.googleAnalyticsId, {
        page_path: pagePath,
        page_title: pageTitle
      })
    }
  }

  const trackGameStart = (gameType) => {
    trackEvent('game_start', {
      game_type: gameType,
      event_category: 'gameplay'
    })
  }

  const trackGameStop = (gameType, duration) => {
    trackEvent('game_stop', {
      game_type: gameType,
      duration: duration,
      event_category: 'gameplay'
    })
  }

  const trackLanguageSwitch = (fromLang, toLang) => {
    trackEvent('language_switch', {
      from_language: fromLang,
      to_language: toLang,
      event_category: 'user_interaction'
    })
  }

  const trackHelpPageView = (helpPage) => {
    trackEvent('help_page_view', {
      help_page: helpPage,
      event_category: 'user_interaction'
    })
  }

  const trackSpeedChange = (gameType, speed) => {
    trackEvent('speed_change', {
      game_type: gameType,
      speed: speed,
      event_category: 'gameplay'
    })
  }

  const trackSizeChange = (gameType, size) => {
    trackEvent('size_change', {
      game_type: gameType,
      size: size,
      event_category: 'gameplay'
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackGameStart,
    trackGameStop,
    trackLanguageSwitch,
    trackHelpPageView,
    trackSpeedChange,
    trackSizeChange
  }
}
