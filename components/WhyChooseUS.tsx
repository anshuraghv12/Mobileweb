import React from 'react';
import { CheckCircle, Award, Clock, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Quality Guaranteed',
      description: 'All our products are genuine and come with manufacturer warranty'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Our staff are certified and highly experienced'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Fast Service',
      description: 'Quick repairs and same-day delivery available'
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: 'Customer Support',
      description: '24/7 support for all your queries and concerns'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600">We pride ourselves on providing the best service</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;