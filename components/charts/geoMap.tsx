"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryData = [
  { name: "United States of America", visitors: 50 },
  { name: "India", visitors: 120 },
  { name: "Bangladesh", visitors: 90 },
  { name: "Malaysia", visitors: 10 },
  { name: "South Africa", visitors: 10 },
  { name: "Japan", visitors: 10 },
  { name: "Chile", visitors: 21 },
  { name: "Colombia", visitors: 21 },
  { name: "Algeria", visitors: 21 },
  { name: "Turkey", visitors: 21 },
  { name: "S. Sudan", visitors: 21 },
  { name: "Mongolia", visitors: 21 },
  { name: "United Kingdom", visitors: 85 },
  { name: "Germany", visitors: 70 },
  { name: "Canada", visitors: 60 },
];

const getColor = (countryName: string) => {
  const country = countryData.find((c) => c.name === countryName);
  if (!country) return "#1e293b";
  return "oklch(62.3% 0.214 259.815)";
};

const GeographicalMap = () => {
  const [hovered, setHovered] = useState<{
    name: string;
    visitors: number;
  } | null>(null);

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="relative w-full -ml-[5%] px-0 py-5 overflow-visible">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 230, center: [0, 10] }}
        width={1400}
        height={500}
        viewBox="0 0 1400 500"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "35vh",
          background: "transparent",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const match = countryData.find((c) => c.name === countryName);
              const baseColor = getColor(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    setTooltipPosition({ x: e.pageX, y: e.pageY });
                    setHovered({
                      name: countryName,
                      visitors: match?.visitors || 0,
                    });
                  }}
                  onMouseMove={(e) => {
                    setTooltipPosition({ x: e.pageX, y: e.pageY });
                  }}
                  onMouseLeave={() => setHovered(null)}
                  fill={baseColor}
                  stroke="#334155"
                  style={{
                    default: {
                      outline: "none",
                      transition: "fill 0.3s ease-in-out",
                    },
                    hover: {
                      fill: match ? baseColor : "#facc15",
                      outline: "none",
                      transition: "fill 0.3s ease-in-out",
                    },
                    pressed: { fill: "#ef4444", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip with animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed bg-gray-800 text-white text-xs p-2 rounded! shadow-lg pointer-events-none z-9999"
            style={{
              top: tooltipPosition.y,
              left: tooltipPosition.x,
            }}
          >
            <strong>{hovered.name}</strong>
            <br />
            Visitors: <span className="text-green-400">{hovered.visitors}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GeographicalMap;
