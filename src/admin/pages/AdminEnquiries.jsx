import React, { useState, useEffect } from "react";
import { Mail, Phone, Calendar, User, CheckCircle2, Clock, Inbox, RefreshCw } from "lucide-react";
import { api } from "../../services/api";

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecords = async () => {
    setLoading(true);
    // 1. Fetch from Local Storage first
    try {
      const localEnq = JSON.parse(localStorage.getItem("ritora_enquiries") || "[]");
      const localSubs = JSON.parse(localStorage.getItem("ritora_newsletter_subscribers") || "[]");
      setSubscribers(localSubs);

      // 2. Fetch from backend API
      try {
        const { data } = await api.get("/enquiries");
        if (Array.isArray(data) && data.length > 0) {
          setEnquiries(data);
        } else {
          setEnquiries(localEnq);
        }
      } catch (err) {
        // Fallback to local storage if offline
        setEnquiries(localEnq);
      }
    } catch (e) {
      console.warn("Storage read error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ritora-teal/55">
            Advisory Desk
          </p>
          <h1 className="mt-2 font-serif text-3xl text-ritora-teal sm:text-4xl">Client Enquiries</h1>
          <p className="mt-1 text-sm text-slate-500">
            All submitted consultation requests and property briefing subscribers.
          </p>
        </div>
        <button
          onClick={fetchRecords}
          className="inline-flex items-center gap-2 px-4 py-2 border border-ritora-gold/30 bg-white hover:bg-slate-50 text-ritora-teal text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-all"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Enquiries Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Inbox className="w-5 h-5 text-ritora-teal" />
            <h2 className="font-serif text-xl font-bold text-ritora-teal">Consultation Requests</h2>
          </div>
          <span className="text-xs px-2.5 py-1 bg-ritora-gold/15 text-ritora-teal font-semibold rounded-full">
            {enquiries.length} Inquiries
          </span>
        </div>

        {enquiries.length === 0 ? (
          <p className="text-sm text-slate-400 py-8 text-center">No consultation inquiries received yet.</p>
        ) : (
          <div className="space-y-4">
            {enquiries.map((item, idx) => (
              <div key={item.id || idx} className="p-5 rounded-xl border border-slate-200 hover:border-ritora-gold/50 bg-[#FAF8F5]/50 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-ritora-gold" />
                    <span className="font-semibold text-ritora-teal text-sm">{item.name}</span>
                    {item.role && (
                      <span className="text-[11px] px-2 py-0.5 bg-slate-200 text-slate-700 rounded font-medium">
                        {item.role}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock size={13} />
                    <span>{item.created_at || item.submittedAt ? new Date(item.created_at || item.submittedAt).toLocaleString() : "Recent"}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Mail size={13} className="text-slate-400" />
                    <a href={`mailto:${item.email}`} className="hover:text-ritora-teal underline">{item.email}</a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={13} className="text-slate-400" />
                    <a href={`tel:${item.phone}`} className="hover:text-ritora-teal">{item.phone}</a>
                  </span>
                  {item.budget && (
                    <span className="text-slate-500">Budget: <strong>{item.budget}</strong></span>
                  )}
                  {item.timeframe && (
                    <span className="text-slate-500">Timeframe: <strong>{item.timeframe}</strong></span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-200/60 leading-relaxed">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Subscribers Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-ritora-teal" />
            <h2 className="font-serif text-xl font-bold text-ritora-teal">Property Briefings Subscribers</h2>
          </div>
          <span className="text-xs px-2.5 py-1 bg-ritora-gold/15 text-ritora-teal font-semibold rounded-full">
            {subscribers.length} Subscribers
          </span>
        </div>

        {subscribers.length === 0 ? (
          <p className="text-sm text-slate-400 py-4 text-center">No newsletter subscriptions recorded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {subscribers.map((sub, idx) => {
              const email = typeof sub === "string" ? sub : sub.email;
              const date = typeof sub === "object" && sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : "Active";
              return (
                <div key={idx} className="p-3.5 rounded-lg border border-slate-100 bg-[#FAF8F5] flex items-center justify-between text-xs">
                  <span className="font-medium text-ritora-teal truncate pr-2">{email}</span>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{date}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

