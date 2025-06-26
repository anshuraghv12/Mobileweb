import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Mobile Yard Shop</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted mobile repair experts providing fast, reliable, and affordable repairs for all smartphone
              brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 7737726976</p>
                  <p className="text-sm text-gray-400">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">raghavnshu1204@gmail.com</p>
                  <p className="text-sm text-gray-400">Email support</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mobile Yard Shop</p>
                  <p className="text-sm text-gray-400">Visit our store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-400 mr-3" />
                <div>
                  <p className="text-gray-300">Mon - Sat</p>
                  <p className="text-sm text-gray-400">9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-400 mr-3" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-sm text-gray-400">10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Screen Replacement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Battery Replacement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Camera Repair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Water Damage Repair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Software Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Charging Port Repair
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Mobile Yard Shop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
