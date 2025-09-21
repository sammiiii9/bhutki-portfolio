import { useState, useEffect } from 'react'
import siteConfig from '../config/siteConfig'

// Custom hook for managing site configuration
// This can be extended to fetch from APIs and provide real-time updates
export const useSiteConfig = () => {
  const [config, setConfig] = useState(siteConfig)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Function to fetch config from API
  const fetchConfig = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // In a real implementation, this would fetch from your API
      // const response = await fetch(`${siteConfig.api.baseUrl}${siteConfig.api.endpoints.config}`)
      // const data = await response.json()
      // setConfig(data)
      
      // For now, just return the static config
      setConfig(siteConfig)
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch site config:', err)
    } finally {
      setLoading(false)
    }
  }

  // Function to update config
  const updateConfig = async (updates) => {
    setLoading(true)
    setError(null)
    
    try {
      // In a real implementation, this would POST to your API
      // const response = await fetch(`${siteConfig.api.baseUrl}${siteConfig.api.endpoints.config}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updates)
      // })
      // const updatedConfig = await response.json()
      
      // For now, just merge locally
      const updatedConfig = { ...config, ...updates }
      setConfig(updatedConfig)
      
      return updatedConfig
    } catch (err) {
      setError(err.message)
      console.error('Failed to update site config:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Fetch config on mount
  useEffect(() => {
    fetchConfig()
  }, [])

  return {
    config,
    loading,
    error,
    fetchConfig,
    updateConfig,
    // Convenience getters
    contact: config.contact,
    businessHours: config.businessHours,
    stats: config.stats,
    company: config.company,
    social: config.social,
    programs: config.programs,
    videoTestimonials: config.videoTestimonials
  }
}

export default useSiteConfig