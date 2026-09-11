import React from 'react';
import LidarServicePageClient from './LidarServicePageClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com";

// Add ISR for page caching (7200 seconds = 2 hours)
export const revalidate = 7200;

export const metadata = {
  title: "LiDAR & 3D Modeling Services | Techmapperz",
  description: "High-density LiDAR scanning, point cloud processing, and 3D terrain modeling for infrastructure, mining, forestry, and urban planning across India.",
  alternates: {
    canonical: `${BASE_URL}/service/lidar`,
  },
};

const LidarService = () => {
  return <LidarServicePageClient />;
};

export default LidarService;
