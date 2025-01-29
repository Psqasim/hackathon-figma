import { useState } from "react"
import { User, Phone, Mail, MapPin, CreditCard } from "lucide-react"

interface UserInfo {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  city: string
  state: string
  zipCode: string
}

interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void
}

const initialUserInfo: UserInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
}

export default function UserInfoForm({ onSubmit }: UserInfoFormProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)
  const [errors, setErrors] = useState<Partial<UserInfo>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    return phoneRegex.test(phone)
  }

  const validateZipCode = (zip: string) => {
    const zipRegex = /^\d{5}(-\d{4})?$/
    return zipRegex.test(zip)
  }

  const validateForm = () => {
    const newErrors: Partial<UserInfo> = {}

    if (!userInfo.firstName.trim()) newErrors.firstName = "First name is required"
    if (!userInfo.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!validateEmail(userInfo.email)) newErrors.email = "Valid email is required"
    if (!validatePhoneNumber(userInfo.phoneNumber)) newErrors.phoneNumber = "Valid phone number is required"
    if (!userInfo.address.trim()) newErrors.address = "Address is required"
    if (!userInfo.city.trim()) newErrors.city = "City is required"
    if (!userInfo.state.trim()) newErrors.state = "State is required"
    if (!validateZipCode(userInfo.zipCode)) newErrors.zipCode = "Valid ZIP code is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof UserInfo]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(userInfo)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">

      <div className="w-full max-w-3xl mx-auto pb-8">

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">

          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">

            <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-1">Shipping Information</h3>

            <p className="text-xs md:text-sm text-blue-600">Please enter your details for shipping and contact purposes.</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User size={16} className="inline mr-2" />
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John"
              />

              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}

            </div>

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Doe"
              />

              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}

            </div>

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="john.doe@example.com"
              />

              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}

            </div>

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone size={16} className="inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="(123) 456-7890"
              />

              {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>}

            </div>
          </div>

          <div className="space-y-3 md:space-y-4">

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                <MapPin size={16} className="inline mr-2" />
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="123 Main St"
              />

              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}

            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">

              <div className="col-span-2 md:col-span-1">

                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>

                <input
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="New York"
                />

                {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}

              </div>

              <div className="col-span-1">

                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>

                <input
                  type="text"
                  name="state"
                  value={userInfo.state}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="NY"
                />

                {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}

              </div>

              <div className="col-span-1">

                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>

                <input
                  type="text"
                  name="zipCode"
                  value={userInfo.zipCode}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="10001"
                />

                {errors.zipCode && <p className="mt-1 text-xs text-red-500">{errors.zipCode}</p>}
                
              </div>
            </div>
          </div>

          <div className="pt-2 md:pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <CreditCard size={18} />
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}