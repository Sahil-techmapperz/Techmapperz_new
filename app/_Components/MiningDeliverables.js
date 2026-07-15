"use client";

import { useState } from 'react';

const allOutputs = [
  { category: 'GIS', title: 'GeoPackage / GDB', desc: 'Structured feature layers' },
  { category: 'GIS', title: 'SHP / GeoJSON', desc: 'Interoperable GIS delivery' },
  { category: 'CAD', title: 'DWG / DXF', desc: 'Engineering drawing outputs' },
  { category: 'Raster', title: 'GeoTIFF', desc: 'Orthomosaic and terrain raster' },
  { category: 'Point Cloud', title: 'LAS / LAZ', desc: 'Classified point cloud' },
  { category: 'Raster', title: 'DEM / DSM / DTM', desc: 'Elevation and terrain models' },
  { category: 'CAD', title: 'Contours', desc: 'Specified interval and format' },
  { category: 'Reports', title: 'Volume Reports', desc: 'Stockpile and change quantities' },
  { category: 'GIS', title: 'Web GIS', desc: 'Map-based operational access' },
];

export default function MiningDeliverables() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'GIS', 'CAD', 'Raster', 'Point Cloud', 'Reports'];

  const filteredOutputs = activeTab === 'All' 
    ? allOutputs 
    : allOutputs.filter(output => output.category === activeTab);

  return (
    <section className="deliverables">
      <div className="container">
        <div className="section-head">
          <div className="copy">
            <div className="eyebrow">Outputs & operational value</div>
            <h2>Deliverables That Fit Survey, Planning and Engineering Workflows</h2>
            <p>The page clearly states technical outputs so mine planners, surveyors, consultants and procurement teams can quickly assess capability.</p>
          </div>
        </div>
        <div className="deliver-grid">
          <div className="deliver-panel">
            <h3>Typical Mining Deliverables</h3>
            <div className="deliver-tabs">
              {tabs.map((tab) => (
                <span 
                  key={tab} 
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: 'pointer' }}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="output-grid">
              {filteredOutputs.map((out, idx) => (
                <div className="output" key={idx}>
                  <b>{out.title}</b>
                  <span>{out.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="benefit-panel">
            <h3>Built for Practical Mine-Site Use</h3>
            <p>Geospatial outputs should reduce interpretation effort and help different teams work from the same spatial context.</p>
            <div className="benefit-list">
              <div><span className="tick">✓</span><span>More current visibility of pits, roads, dumps, stockpiles and assets</span></div>
              <div><span className="tick">✓</span><span>Consistent spatial layers for planning, engineering and management teams</span></div>
              <div><span className="tick">✓</span><span>Repeatable data structure for periodic monitoring and comparison</span></div>
              <div><span className="tick">✓</span><span>Clear audit trail through review, revision and final delivery packages</span></div>
              <div><span className="tick">✓</span><span>Outputs prepared for the client’s existing GIS and CAD environment</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
