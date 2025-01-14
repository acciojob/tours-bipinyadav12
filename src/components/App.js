import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const API_URL = 'https://api.example.com/tours'; // Replace with your API endpoint

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tours:', error);
