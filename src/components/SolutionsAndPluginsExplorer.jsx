import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  ArrowUpRight,
  Database,
  PhoneCall,
  Headphones,
  MessageSquare,
  ShoppingBag,
  Smartphone,
  Server,
  RefreshCw,
  Globe,
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/siteData';

const ICON_MAP = {
  Database,
  PhoneCall,
  Headphones,
  MessageSquare,
  ShoppingBag,
  Smartphone,
  Server,
  RefreshCw,
  Globe,
};

export default function SolutionsAndPluginsExplorer({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'CRM & Add-ons', 'IPPBX & Telephony', 'Web, E-Commerce & Mobile'];

  const filteredSolutions = SOLUTIONS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.highlights.some((h) => h.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            End-to-End Technology Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Services &amp; Ready-to-Deploy Plugins
          </h2>
          <p className="text-slate-600 text-base">
            Whether you need custom SuiteCRM architecture, an Asterisk call center, or plug-and-play
            Twilio &amp; WhatsApp connectors, filter our stack below.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Twilio, Asterisk, OpenCart..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Cards Grid */}
        {filteredSolutions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-medium">
              No matching solutions found for &ldquo;{searchTerm}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-sm font-semibold text-blue-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((item) => {
              const Icon = ICON_MAP[item.iconName] || Database;
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.highlights.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-600" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenConsultation(`Inquiry: ${item.title}`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-semibold text-xs transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Get Specs &amp; Pricing
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}