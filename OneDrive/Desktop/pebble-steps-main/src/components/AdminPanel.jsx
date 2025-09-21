import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent } from '../../components/ui/card'
import { Save, RefreshCw, Settings, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { useSiteConfig } from '../hooks/useSiteConfig'

export default function AdminPanel() {
  const { config, updateConfig, loading } = useSiteConfig()
  const [formData, setFormData] = useState(config)
  const [activeTab, setActiveTab] = useState('contact')

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: typeof prev[section][field] === 'object' 
          ? { ...prev[section][field], ...value }
          : value
      }
    }))
  }

  const handleSave = async () => {
    try {
      await updateConfig(formData)
      alert('Configuration updated successfully!')
    } catch (error) {
      alert('Failed to update configuration: ' + error.message)
    }
  }

  const tabs = [
    { id: 'contact', label: 'Contact Info', icon: Phone },
    { id: 'hours', label: 'Business Hours', icon: Clock },
    { id: 'company', label: 'Company Info', icon: Settings },
    { id: 'social', label: 'Social Media', icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Site Configuration Admin</h1>
          <p className="text-muted-foreground">Manage your website's contact information, hours, and settings</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contact Information Tab */}
        {activeTab === 'contact' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Phone</label>
                  <Input
                    value={formData.contact?.phone?.primary || ''}
                    onChange={(e) => handleInputChange('contact', 'phone', { 
                      ...formData.contact.phone, 
                      primary: e.target.value,
                      display: e.target.value,
                      href: `tel:${e.target.value.replace(/\s/g, '')}`
                    })}
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Email</label>
                  <Input
                    value={formData.contact?.email?.primary || ''}
                    onChange={(e) => handleInputChange('contact', 'email', { 
                      ...formData.contact.email, 
                      primary: e.target.value 
                    })}
                    placeholder="hello@pebblesteps.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Support Email</label>
                  <Input
                    value={formData.contact?.email?.support || ''}
                    onChange={(e) => handleInputChange('contact', 'email', { 
                      ...formData.contact.email, 
                      support: e.target.value 
                    })}
                    placeholder="support@pebblesteps.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <Input
                    value={formData.contact?.whatsapp?.number || ''}
                    onChange={(e) => handleInputChange('contact', 'whatsapp', { 
                      ...formData.contact.whatsapp, 
                      number: e.target.value 
                    })}
                    placeholder="+919876543210"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Locations (comma separated)</label>
                  <Input
                    value={formData.contact?.locations?.join(', ') || ''}
                    onChange={(e) => handleInputChange('contact', 'locations', e.target.value.split(', '))}
                    placeholder="Mumbai, Delhi, Bangalore"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Business Hours Tab */}
        {activeTab === 'hours' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Weekdays</label>
                    <Input
                      value={formData.businessHours?.weekdays?.hours || ''}
                      onChange={(e) => handleInputChange('businessHours', 'weekdays', { 
                        ...formData.businessHours.weekdays, 
                        hours: e.target.value 
                      })}
                      placeholder="9:00 AM - 7:00 PM"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Saturday</label>
                    <Input
                      value={formData.businessHours?.saturday?.hours || ''}
                      onChange={(e) => handleInputChange('businessHours', 'saturday', { 
                        ...formData.businessHours.saturday, 
                        hours: e.target.value 
                      })}
                      placeholder="9:00 AM - 5:00 PM"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Response Time</label>
                    <Input
                      value={formData.businessHours?.responseTime || ''}
                      onChange={(e) => handleInputChange('businessHours', 'responseTime', e.target.value)}
                      placeholder="2 hours during business hours"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assessment Response</label>
                    <Input
                      value={formData.businessHours?.assessmentResponse || ''}
                      onChange={(e) => handleInputChange('businessHours', 'assessmentResponse', e.target.value)}
                      placeholder="24 hours"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Company Information Tab */}
        {activeTab === 'company' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <Input
                    value={formData.company?.name || ''}
                    onChange={(e) => handleInputChange('company', 'name', e.target.value)}
                    placeholder="Pebble Steps"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tagline</label>
                  <Input
                    value={formData.company?.tagline || ''}
                    onChange={(e) => handleInputChange('company', 'tagline', e.target.value)}
                    placeholder="Building Reading Clarity & Confidence"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full p-3 border border-border rounded-md resize-none h-24"
                    value={formData.company?.description || ''}
                    onChange={(e) => handleInputChange('company', 'description', e.target.value)}
                    placeholder="Company description..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Social Media Tab */}
        {activeTab === 'social' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Facebook</label>
                  <Input
                    value={formData.social?.facebook || ''}
                    onChange={(e) => handleInputChange('social', 'facebook', e.target.value)}
                    placeholder="https://facebook.com/pebblesteps"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Twitter</label>
                  <Input
                    value={formData.social?.twitter || ''}
                    onChange={(e) => handleInputChange('social', 'twitter', e.target.value)}
                    placeholder="https://twitter.com/pebblesteps"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Instagram</label>
                  <Input
                    value={formData.social?.instagram || ''}
                    onChange={(e) => handleInputChange('social', 'instagram', e.target.value)}
                    placeholder="https://instagram.com/pebblesteps"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn</label>
                  <Input
                    value={formData.social?.linkedin || ''}
                    onChange={(e) => handleInputChange('social', 'linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/pebblesteps"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Save Button */}
        <div className="flex justify-end space-x-4 mt-6">
          <Button 
            variant="outline" 
            onClick={() => setFormData(config)}
            disabled={loading}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          
          <Button 
            onClick={handleSave}
            disabled={loading}
            className="bg-primary hover:bg-primary/90"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>
    </div>
  )
}