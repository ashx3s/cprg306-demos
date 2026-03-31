"use client";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "@/app/lib/authHelpers";

export default function SignupForm() {
  // state: email, password, success flag, error state, loading flag
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    // user is equal to signUpWithEmail passing the form data to the function (global async)
    const { user, error } = await signUpWithEmailAndPassword(email, password);
    // error handling, loading indicator, and form reset
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // form reset
      setEmail("");
      setPassword("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="signup-email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="signup-email"
          id="signup-email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="signup-password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="signup-password"
          className="w-full px-3 py-2 border rounded-md"
          id="signup-password"
          // required
        />
      </div>

      {error && <div>{error}</div>}
      {success && <div>Account created Successfully</div>}
      <button
        disabled={loading}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creating Account..." : "Signup"}
      </button>
    </form>
  );
}
