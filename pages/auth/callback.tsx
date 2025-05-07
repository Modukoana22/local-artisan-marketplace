// pages/auth/callback.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { CircularProgress, Box, Typography } from '@mui/material'; // Or your preferred UI lib

export default function Callback() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      // Role-based redirect
      const redirectPath = session.user?.role === 'Seller' 
        ? '/seller/dashboard' 
        : '/buyer/dashboard';
      router.push(redirectPath);
    }

    if (status === 'unauthenticated') {
      router.push('/auth/signin?error=AccessDenied');
    }
  }, [status]);

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        Authenticating...
      </Typography>
    </Box>
  );
}