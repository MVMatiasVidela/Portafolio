// src/components/MaintenanceMode.tsx

'use client'; // Esto asegura que este componente sea un componente de cliente

import { useEffect, useState } from 'react';
import MaintenancePage from '@/components/MaintenanceMode/MaintenancePage'; // Asegúrate de tener este componente creado

const MaintenanceMode = ({ children }: { children: React.ReactNode }) => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

  useEffect(() => {
    // Cambia esto según cómo determines el modo de mantenimiento
    setIsUnderMaintenance(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true');
  }, []);

  if (isUnderMaintenance) {
    return <MaintenancePage />; // Muestra la página de mantenimiento
  }

  return <>{children}</>; // Muestra los hijos si no está en mantenimiento
};

export default MaintenanceMode;
