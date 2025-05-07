import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <button 
        onClick={() => signIn('google')}
        style={{
          padding: '10px 20px',
          background: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}