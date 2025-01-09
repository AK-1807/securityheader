"use client";
import { useState } from "react";
import axios from "axios";
import Summary from "../components/Summery";

export default function Home() {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setHeaders(null);
    setLoading(true);

    try {
      const response = await fetch(
        `/api/headers?url=${encodeURIComponent(url)}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setHeaders(data);
        console.log(data);
      }
    } catch (err) {
      setError("Error fetching headers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative ">
      <div className="w-full max-w-[1240px] px-[20px] mx-auto">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 bg-gray-50 py-12">
            <div className="mx-auto px-6 text-center">
              <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                Test Your Security Headers
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Enter a URL to see if your site is secure with the correct HTTP
                headers.
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

                  <button
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    type="submit"
                    disabled={loading || !url}
                  >
                    {loading ? "Checking..." : "Check Headers"}
                  </button>
                </form>
              </div>
              {error && <p>{error}</p>}
              {headers && (
                <>
                  <Summary site={url} headers={headers} />
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
