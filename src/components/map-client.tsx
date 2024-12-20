"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapClient = dynamic(() => import("./map"), { ssr: false });

export default MapClient;
