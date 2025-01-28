import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

// פונקציה מדומה להדמיית שליפת 5 ידיעות אחרונות על המניה
function fetchStockNews(symbol) {
  const links = {
    'Google Finance': `https://www.google.com/finance/quote/${symbol}:NASDAQ`,
    'Bloomberg': `https://www.bloomberg.com/quote/${symbol}:US`,
    'Investing': `https://www.investing.com/search/?q=${symbol}`,
    'Yahoo Finance': `https://finance.yahoo.com/quote/${symbol}`
  }

  // המקורות לדוגמה
  const sources = ['Google Finance', 'Bloomberg', 'Investing', 'Yahoo Finance', 'Google Finance']

  return new Promise((resolve) => {
    setTimeout(() => {
      const dummyNews = sources.map((source, idx) => {
        return {
          title: `Latest News About ${symbol} #${idx + 1}`,
          source,
          date: `2025-01-28`,
          link: links[source] || '#'
        }
      })
      resolve(dummyNews)
    }, 1000)
  })
}

export default function App() {
  const [symbolInput, setSymbolInput] = useState('')
  const [stocks, setStocks] = useState([])

  const handleAddStock = async () => {
    if (!symbolInput) return
    const news = await fetchStockNews(symbolInput)
    setStocks((prev) => [...prev, { symbol: symbolInput, news }])
    setSymbolInput('')
  }

  return (
    <div style={{
      minHeight: '100vh', 
      backgroundColor: '#e5ebff', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%', 
        maxWidth: '720px', 
        backgroundColor: '#fff2c5', 
        marginTop: '2rem', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: '1rem',
        padding: '1rem'
      }}>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          stock reports and news
        </h1>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            placeholder='Enter a stock symbol (for example: AAPL)'
            value={symbolInput}
            onChange={(e) => setSymbolInput(e.target.value.toUpperCase())}
            style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
          />
          <button 
            onClick={handleAddStock} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem'
            }}
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div>
          {stocks.map((stock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#fefefe',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            >
              <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Stock: {stock.symbol}</h2>
              {stock.news?.length > 0 ? (
                <ul style={{ listStyle: 'disc', marginLeft: '1.25rem' }}>
                  {stock.news.slice(0, 5).map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 'bold' }}>{item.title}</span> <br />
                      Source: {item.source} | Date: {item.date} <br />
                      <a href={item.link} target='_blank' rel='noreferrer' style={{ color: '#2563eb', textDecoration: 'underline' }}>
                        Link to {item.source} news
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No information available for this stock at this time.</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
