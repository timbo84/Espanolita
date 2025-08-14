"use client"
import { useState } from "react"
import Header from "../../components/Header"
import { supabase } from "../../lib/supabase/client"
import styles from "./page.module.css"

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    party_size: "",
    special_requests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: "", text: "" })

    try {
      const { data, error } = await supabase.from("reservations").insert([formData])

      if (error) {
        throw error
      }

      setMessage({
        type: "success",
        text: "Your reservation has been submitted successfully! We will contact you shortly to confirm.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        party_size: "",
        special_requests: "",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: "There was an error submitting your reservation. Please try again.",
      })
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate time options
  const timeOptions = []
  for (let hour = 17; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      timeOptions.push(time)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.reservations}>
        <div className="container">
          <h1 className={styles.reservationTitle}>Reserve Your Table</h1>
          <p className={styles.reservationSubtitle}>
            Join us for an unforgettable dining experience. Please fill out the form below to make your reservation.
          </p>

          <form onSubmit={handleSubmit} className={styles.reservationForm}>
            {message.text && (
              <div className={message.type === "success" ? styles.successMessage : styles.errorMessage}>
                {message.text}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="time">Time *</label>
                <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                  <option value="">Select a time</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="party_size">Party Size *</label>
              <select id="party_size" name="party_size" value={formData.party_size} onChange={handleChange} required>
                <option value="">Select party size</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="special_requests">Special Requests</label>
              <textarea
                id="special_requests"
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
                rows="4"
                placeholder="Any dietary restrictions, special occasions, or other requests..."
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Make Reservation"}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
