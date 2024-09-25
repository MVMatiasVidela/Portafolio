// src/components/MaintenanceMode.tsx

'use client';

import { useEffect, useState } from 'react';
import MaintenancePage from '@/components/MaintenanceMode/MaintenancePage'; // Asegúrate de tener este componente creado

const MaintenanceMode = ({ children }: { children: React.ReactNode }) => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

  useEffect(() => {
    // Cambia esto según cómo determines el modo de mantenimiento
    const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
    setIsUnderMaintenance(maintenanceMode);
  }, []);

  if (isUnderMaintenance) {
    return <MaintenancePage />; // Muestra la página de mantenimiento
  }

  return <>{children}</>; // Muestra los hijos si no está en mantenimiento
};

export default MaintenanceMode;
