import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { Reservation } from '../types';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    specialRequest: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ivory-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Reservation Confirmed!
            </h1>
            <p className="text-charcoal-600 mb-6">
              Thank you, {formData.name}! Your table reservation has been confirmed.
            </p>
            <div className="bg-ivory-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-charcoal-800 mb-4">Reservation Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}
                </div>
                <div>
                  <strong>Time:</strong> {formData.time}
                </div>
                <div>
                  <strong>Guests:</strong> {formData.guests}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
              </div>
            </div>
            <p className="text-charcoal-600 text-sm">
              A confirmation email has been sent to your email address.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-maroon-500 to-maroon-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-ivory-50 mb-4">
            Table Reservations
          </h1>
          <p className="text-ivory-200">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-charcoal-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-charcoal-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-charcoal-700 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  rows={4}
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-4">
            Reservation Policy
          </h3>
          <ul className="space-y-2 text-charcoal-600 text-sm">
            <li>• Reservations are held for 15 minutes past the scheduled time</li>
            <li>• For parties of 6 or more, please call us directly at (555) 123-4567</li>
            <li>• Cancellations must be made at least 2 hours in advance</li>
            <li>• We accommodate dietary restrictions with advance notice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservations;