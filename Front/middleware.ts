import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  // Si el modo mantenimiento está activado y no está accediendo a /maintenance
  if (maintenanceMode && !req.nextUrl.pathname.includes('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  // Permitir la navegación si no está en modo mantenimiento
  return NextResponse.next();
}
