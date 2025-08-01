
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  source: 'google' | 'facebook' | 'yelp';
}

export interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}