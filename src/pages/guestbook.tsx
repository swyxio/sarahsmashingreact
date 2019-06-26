import React, { useState, useEffect } from "react"
import Logo from "./RevengersLogo@2x.png"
import QRCode from "qrcode.react"

/**
 *
 * note to browsers of this code:
 *
 * this hidden page requires a faunadb instance and netlify function endpoint at `/.netlify/functions/fauna-crud` to work
 *
 * to get this working from a raw repo, use the Netlify CLI and run `netlify functions:create` and pick `fauna-crud`.
 *
 * for a full demo pls check out Swyx's session at SmashingConf Toronto
 *
 *
 */

type Message = {
  data: {
    name: string
    message: string
  }
  ts: string
}
const GuestbookPage = () => {
  const [messages, setMessages] = useState(null)
  const [message, setMessage] = useState({ name: "", message: "" })
  const [saving, setSaving] = useState(false)

  let polling = true
  const poll = () => {
    fetch("/.netlify/functions/fauna-crud")
      .then((response) => response.json())
      .then((messages) => setMessages(messages))
      .then(() => polling && setTimeout(poll, 10000))
  }
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)
    fetch("/.netlify/functions/fauna-crud", {
      method: "POST",
      body: JSON.stringify(message)
    })
      .then(() => setMessages(messages.concat({ data: message, ts: new Date().getTime() })))
      .then(() => setMessage({ name: "", message: "" }))
      .then(() => setSaving(false))
  }

  useEffect(() => {
    poll()
    return () => (polling = false)
  }, [])
  return (
    <div className="revengers">
      <div className="chicken-wrap">
        <div className="revengers-title">
          <img src={Logo} alt="Logo" />
          <h2>A messaging app for super-villains</h2>
        </div>
        {typeof window !== "undefined" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ border: "3px solid white", marginBottom: "1rem", display: "inline-block" }}>
              <QRCode value={window.location.href} />
            </div>
            <h3>
              <a href="https://smashingtoronto-react.netlify.com">{window.location.href}</a>
            </h3>
          </div>
        )}
        {messages === null && <div>Loading guestbook...</div>}
        {messages &&
          (["BadRequest", "Unauthorized"].includes(messages.name) ? (
            <div style={{ border: "1px solid red", color: "yellow" }}>
              Bad/Unauthorized Request - you may have forgotten to setup your Fauna DB addon (
              <pre>netlify addons:create fauna</pre>) and run{" "}
              <pre>netlify dev:exec functions/fauna/create-schema.js</pre>
            </div>
          ) : (
            messages.map((message: Message) => (
              <div className="msg" key={message.ts}>
                <div>
                  <p>{message.data.message.trim()}</p>
                </div>
                <h2 className="msg-author">{message.data.name}</h2>
              </div>
            ))
          ))}

        <div>
          <form className="guestbook-form" onSubmit={submit}>
            <div className="form-control">
              <label>Your evil name:</label>
              <input
                type="text"
                value={message.name}
                required
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label>Your evil message:</label>
              <textarea
                value={message.message}
                required
                onChange={(e) => setMessage({ ...message, message: e.target.value })}
              />
            </div>
            <div className="form-control">
              <button className="submit-btn" type="submit" disabled={saving}>
                {saving ? "Sending..." : "SEND MESSAGE, in a evil way"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GuestbookPage
