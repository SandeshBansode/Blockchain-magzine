import React, { useState } from 'react';
import { Search, Crown, Menu, TrendingUp, Bell, ChevronDown, X, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import Marquee from 'react-fast-marquee';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const cryptoPrices = [
    { name: 'BTC', price: '52,341.22', change: '+5.24%', color: 'text-green-500', icon: '₿' },
    { name: 'ETH', price: '2,841.15', change: '+3.12%', color: 'text-green-500', icon: 'Ξ' },
    { name: 'BNB', price: '635.93', change: '+5.24%', color: 'text-green-500', icon: 'BNB' },
    { name: 'SOL', price: '163.58', change: '+8.41%', color: 'text-green-500', icon: 'SOL' },
    { name: 'USDC', price: '0.99903', change: '+0.04%', color: 'text-green-500', icon: '$' },
    { name: 'DOGE', price: '0.24475', change: '+5.52%', color: 'text-green-500', icon: 'Ð' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <a href="#" className="block py-2 hover:text-yellow-400">Technology</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Policy</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Research</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Finance</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Learn</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Markets</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Companies</a>
              <a href="#" className="block py-2 hover:text-yellow-400">Airdrops</a>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button className="btn-primary">
                Advertise
              </button>
            </div>
            <div className="text-2xl font-bold tracking-tight hover:opacity-80 cursor-pointer transition-opacity">
              <span className="text-black">BLOCKCHAIN</span>
              <span className="text-yellow-400">MAGAZINE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border p-4">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <div className="space-y-2">
                      <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <p className="text-sm font-medium">Bitcoin breaks $50,000!</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                      <div className="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <p className="text-sm font-medium">New airdrop announced</p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button className="btn-secondary hidden md:flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Monthly Plan</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Annual Plan</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Enterprise</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Ticker */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-3 sticky top-16 z-30">
        <Marquee gradient={false} speed={40}>
          <div className="flex space-x-8">
            {cryptoPrices.map((crypto, index) => (
              <div key={index} className="crypto-price">
                <span className="font-mono">{crypto.icon}</span>
                <span className="font-semibold text-white">{crypto.name}</span>
                <span className="text-gray-300">${crypto.price}</span>
                <span className={crypto.color}>{crypto.change}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b sticky top-[120px] z-20">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between h-12">
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-1 text-red-500 nav-link">
                <TrendingUp className="h-4 w-4" />
                <span>Trending News</span>
              </a>
              <a href="#" className="nav-link">Technology</a>
              <a href="#" className="nav-link">Policy</a>
              <a href="#" className="nav-link">Research</a>
              <a href="#" className="nav-link">Finance</a>
              <a href="#" className="nav-link">Learn</a>
              <a href="#" className="nav-link">Markets</a>
              <a href="#" className="nav-link">Companies</a>
              <a href="#" className="nav-link relative">
                Airdrops
                <span className="absolute -top-1 -right-2 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">Live</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="btn-secondary flex items-center space-x-2">
                <Crown className="h-4 w-4" />
                <span>Chain Gamez</span>
              </a>
              <a href="#" className="btn-secondary flex items-center space-x-2">
                <span>Magazine</span>
                <span className="text-xs italic">Journey Of Leaders</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Article */}
          <div className="md:col-span-8">
            <div className="article-card group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Featured Crypto"
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Bookmark className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="h-5 w-5 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="tag bg-yellow-400 text-black">Featured</span>
                    <span className="tag bg-white/20 backdrop-blur-sm text-white">Trending</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mt-2 group-hover:text-yellow-400 transition-colors">
                    The Meme Coin 'Pepe Crypto' Making Waves in the Crypto Market
                  </h2>
                  <p className="text-gray-200 mt-2 max-w-2xl">
                    Exploring the phenomenon behind the latest trending cryptocurrency and its impact on the market dynamics.
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Author"
                        className="h-8 w-8 rounded-full border-2 border-white"
                      />
                      <span className="text-white text-sm">By John Doe</span>
                    </div>
                    <span className="text-gray-300 text-sm">5 min read</span>
                    <span className="text-gray-300 text-sm">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="md:col-span-4 space-y-6">
            <article className="article-card p-4 group">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-blue-100 text-blue-800">Blockchain News</span>
                <span className="tag bg-gray-100 text-gray-800">New</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                What's Next for Grayscale XRP and Dogecoin Trusts?
              </h3>
              <p className="text-gray-600 mt-2">
                SEC's 240 Day Review Process Begins
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Sarah Johnson</span>
                </div>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </div>
            </article>

            <article className="article-card p-4 group">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-green-100 text-green-800">Market Analysis</span>
                <span className="tag bg-yellow-100 text-yellow-800">Hot</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                BTC Price Analysis: Key Levels to Watch
              </h3>
              <p className="text-gray-600 mt-2">
                Technical indicators suggest potential breakout
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Michael Chen</span>
                </div>
                <span className="text-sm text-gray-500">3 hours ago</span>
              </div>
            </article>

            <article className="article-card p-4 group">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-purple-100 text-purple-800">Regulation</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                SEC's New Crypto Regulations Spark Industry Optimism
              </h3>
              <p className="text-gray-600 mt-2">
                What it means for investors and traders
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Emma Wilson</span>
                </div>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
            </article>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <article className="article-card group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Crypto News"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <ExternalLink className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-yellow-100 text-yellow-800">Technology</span>
                <span className="tag bg-gray-100 text-gray-800">Guide</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                Understanding the Mempool: Blockchain's Transaction Queue
              </h3>
              <p className="text-gray-600 mt-2">
                A deep dive into how blockchain transactions are processed
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">David Kim</span>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            </div>
          </article>

          <article className="article-card group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Crypto News"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <ExternalLink className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-blue-100 text-blue-800">Markets</span>
                <span className="tag bg-red-100 text-red-800">Breaking</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                XRP ETF On The Horizon: Bitwise CIO's Analysis
              </h3>
              <p className="text-gray-600 mt-2">
                Industry experts weigh in on potential XRP ETF approval
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Rachel Lee</span>
                </div>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
            </div>
          </article>

          <article className="article-card group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Crypto News"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <ExternalLink className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="tag bg-purple-100 text-purple-800">Policy</span>
                <span className="tag bg-orange-100 text-orange-800">Analysis</span>
              </div>
              <h3 className="text-xl font-bold mt-2 group-hover:text-yellow-400 transition-colors">
                Global Regulatory Framework for Cryptocurrencies
              </h3>
              <p className="text-gray-600 mt-2">
                New policies shaping the future of digital assets
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Author"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Alex Thompson</span>
                </div>
                <span className="text-sm text-gray-500">4 days ago</span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;