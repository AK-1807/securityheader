"use client"
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setHeaders(null);
  
    try {
      const response = await fetch(`/api/headers?url=${encodeURIComponent(url)}`, {
        method: 'GET',
      });
      const data = await response.json();
  
      if (data.error) {
        setError(data.error);
      } else {
        setHeaders(data);
      }
    } catch (err) {
      setError('Error fetching headers');
    }
  };
  
  
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Test Your Security Headers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enter a URL to see if your site is secure with the correct HTTP headers.
          </p>
          <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              required
            />
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700" type="submit" >
              {/* {loading ? "Checking..." : "Check Headers"}  disabled={loading}*/}
              Check Headers
            </button>
          </form>
          {error && <p>{error}</p>}
          {headers && (
            <div>
              <h2>HTTP Headers for {url}</h2>
              <pre>{JSON.stringify(headers, null, 2)}</pre>
            </div>
          )}
          {/* {result && (
            <div>
              <h2>Results for {url}</h2>
              <ul>
                {Object.keys(result).map((header) => (
                  <li key={header}>
                    <strong>{header}:</strong> {result[header]}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
            
          </div>
        </div>
      </main>

    </div>
  );
}
