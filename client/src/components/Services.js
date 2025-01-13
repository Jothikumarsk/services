import React, { useState } from 'react';
import '../App.css';

const serviceData = [
  {
    id: 'automation',
    title: 'Testing Automation',
    description: 'Automate testing processes to increase efficiency and reduce costs.',
    cost: 'Can be discussed for one resource offshore cost in USD',
    image: '/images/automation.jpg'
  },
  {
    id: 'performance',
    title: 'Performance Testing',
    description: 'Ensure systems handle high loads with robust performance testing.',
    cost: 'Can be discussed for one resource offshore cost in USD',
    image: '/images/performance.jpg'
  },
  {
    id: 'security',
    title: 'Security Testing',
    description: 'Protect systems from vulnerabilities with comprehensive security testing.',
    cost: 'Can be discussed for one resource offshore cost in USD',
    image: '/images/security.jpg'
  },
  {
    id: 'Devops',
    title: 'Devops',
    description: 'Create CI/CD/CT tool chain for implementing Devops.',
    cost: 'Can be discussed for one resource offshore cost in USD',
    image: '/images/devops.jpg'
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-details">
          <h3>{selectedService.title}</h3>
          <p>{selectedService.description}</p>
          <p><strong>Cost:</strong> {selectedService.cost}</p>
        </div>
      )}
    </section>
  );
}

export default Services;
