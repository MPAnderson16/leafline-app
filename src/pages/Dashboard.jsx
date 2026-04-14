import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Navigate } from "react-router-dom"

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  if (user === null) return <Navigate to="/login" />

  return <h1>Welcome, {user.email}</h1>
}
