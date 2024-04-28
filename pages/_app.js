import { AuthProvider } from './Providers'; // Update import statement

function App({ Component, pageProps }) {
  return (
    <AuthProvider> {/* Use AuthProvider instead of Provider */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
